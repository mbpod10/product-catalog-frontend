import React, { useState, useEffect } from "react";
import axios from "axios";
import * as RBS from "react-bootstrap";
import { Link } from "react-router-dom";

const Catalog = (props) => {
  const [productData, setProductData] = useState([]);

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    const makeAPIcall = () => {
      axios
        .get(`http://localhost:4000/api/products`)
        .then((response) => {
          console.log(response);
          setProductData(response.data);
        })
        .catch((error) => {
          console.log("error in catalog", error);
        });
    };
    makeAPIcall();
  }, []);

  console.log(productData);

  const productCards = productData.map((element, index) => {
    return (
      <RBS.Card style={{ width: "25rem" }} key={element.index}>
        <RBS.Card.Img variant="top" src={element.imageUrl} />
        <RBS.Card.Body>
          <RBS.Card.Title>
            {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
          </RBS.Card.Title>
          <RBS.ListGroup className="list-group-flush">
            <RBS.ListGroupItem>
              Price:{" "}
              <b>
                <i>{formatter.format(element.price)}</i>
              </b>
            </RBS.ListGroupItem>
            <RBS.ListGroupItem>
              Manufacturer:{" "}
              <b>
                <i>{element.manufacturer}</i>
              </b>
            </RBS.ListGroupItem>
            <RBS.ListGroupItem>
              Average Review Score:{" "}
              <b>
                <i>{element.aveScore}</i>
              </b>
            </RBS.ListGroupItem>
          </RBS.ListGroup>
        </RBS.Card.Body>
        <RBS.Card.Footer>
          <small className="text-muted">
            <Link to={`/${element._id}/reviews`}>
              {" "}
              {element.reviewCount} Reviews
            </Link>
          </small>
        </RBS.Card.Footer>
      </RBS.Card>
    );
  });

  return (
    <>
      <h1>Catalog</h1>
      {/* <RBS.CardGroup> {productCards}</RBS.CardGroup> */}
      <div className="product-container"> {productCards}</div>
    </>
  );
};

export default Catalog;
