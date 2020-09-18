import axios from "axios";
import React, { useState, useEffect } from "react";
import APIConfig from "../APIConfig";
import * as RBS from "react-bootstrap";

const ProductReview = (props) => {
  const [reviews, getReviews] = useState([]);
  const [product, setProduct] = useState([]);
  console.log(props);

  useEffect(() => {
    const makeAPICall = () => {
      axios
        .get(`${APIConfig}/products/reviews/${props.match.params.id}`)
        .then((response) => {
          console.log(response);
          setProduct(response.data);
          getReviews(response.data.reviews);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    makeAPICall();
  }, []);
  console.log(reviews);
  console.log(product);

  const reviewArray = reviews.map((element, index) => {
    return (
      <>
        <RBS.Card className="text-center">
          <RBS.Card.Header>{element.author}</RBS.Card.Header>
          <RBS.Card.Body>
            <RBS.Card.Title>{element.title}</RBS.Card.Title>
            <RBS.Card.Text>{element.reviewBody}</RBS.Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </RBS.Card.Body>
          <RBS.Card.Footer color="red" className="text-muted">
            Author Rating: <b>{element.rating}</b>
            <small className="text-muted">
              {" "}
              <br />
              {element.date}
            </small>
          </RBS.Card.Footer>
        </RBS.Card>
        <br />
        <br />
      </>
    );
  });

  return (
    <>
      <h1>Reviews</h1>
      <div className="review">
        <RBS.Figure>
          <RBS.Figure.Image
            width={171}
            s
            height={180}
            alt="171x180"
            src={product.imageUrl}
          />
          <RBS.Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </RBS.Figure.Caption>
        </RBS.Figure>
        {reviewArray}
      </div>
    </>
  );
};

export default ProductReview;
