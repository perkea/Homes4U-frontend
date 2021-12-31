import React from "react";
import Card from "react-bootstrap/Card";

function CardForHome(props) {
  return (
    <div>
      <div className="">
        {/* <Card style={{ width: "18rem", margin: "10px" }}> */}
        <Card>
          <Card.Img
            variant="top"
            src={props.image}
            height="286px"
            width="190px"
          />
          <Card.Body>
            <Card.Title>${props.price}</Card.Title>
            <Card.Text>
              {props.bedrooms} bds | {props.bathrooms} ba &nbsp;
              {props.squarefootage} sq ft <br />
              {props.address}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardForHome;
