import React from "react";
import AppNavBar from "./AppNavBar";
import CardForHome from "./CardForHome";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HomeImage from "./HomeImage";
import './App.css';
import URL from "./config"


class Homes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: [],
    };
  }
  componentDidMount() {
    fetch(URL + "/results")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result, "the data i got");
          this.setState({
            isLoaded: true,
            results: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <AppNavBar />
          <img src="/images/image6.png" alt="" height="700px" />
          <Container fluid="md">
            <Row md={3}>
              {results.map((result, index) => {
                return (
                  <Col md>
                    <a href={'/show/' + result.id}>
                      <CardForHome
                      image = {HomeImage[index % HomeImage.length].src}
                      squarefootage={result.squareFootage}
                      bathrooms={result.bathrooms}
                      address={result.formattedAddress}
                      bedrooms={result.bedrooms}
                      price={result.price}
                    /></a>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      );
    }
  }
}


export default Homes;
