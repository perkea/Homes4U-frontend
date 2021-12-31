import React from "react";
import AppNavBar from "./AppNavBar";
import CardForEachHome from "./CardForEachHome";
import HomeImage from "./HomeImage";
import "./App.css";

class ShowHome extends React.Component {
  constructor(props) {
    super(props);
    console.log("----", props.match.params.id);
    this.state = {
      error: null,
      isLoaded: false,
      id: props.match.params.id,
      property_result: {},
    };
  }
  componentDidMount() {
    fetch(
      "http://localhost:5000/propertyId/" + encodeURIComponent(this.state.id)
    )
      .then((res) => res.json())
      .then(
        (property_result) => {
          console.log(property_result, "the data i got");
          this.setState({
            isLoaded: true,
            property_result: property_result,
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
    const { error, isLoaded, property_result } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <AppNavBar />
          <CardForEachHome
            image={HomeImage[12].src}
            price={property_result.price}
            squareFootage={property_result.squareFootage}
            bathrooms={property_result.bathrooms}
            address={property_result.formattedAddress}
            bedrooms={property_result.bedrooms}
            city={property_result.city}
            county={property_result.county}
            propertyType={property_result.propertyType}
            daysOnMarket={property_result.daysOnMarket}
          />
        </div>
      );
    }
  }
}

export default ShowHome;
