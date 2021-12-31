import React from "react";
import Card from "react-bootstrap/Card";

function CardForEachHome(props) {
  return (
    <div>
      <div className="">
        <Card className="cardHome" style={{ width: "70rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src={props.image}
            height="286px"
            width="190px"
          />
          <Card.Body>
          <Card.Text>{props.price}</Card.Text>
            <Card.Text>{props.address}</Card.Text>
            <Card.Text>{props.city}, {props.county}</Card.Text>
            <Card.Text>  {props.propertyType}{props.daysOnMarket}</Card.Text>
            <Card.Text>
              {props.bedrooms} bds | {props.bathrooms} ba &nbsp;
              {props.squareFootage} sq ft <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardForEachHome;
