import React from "react";
import { useRef, useEffect, useState } from "react";
import products from "./../products.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Alert } from "react-bootstrap";
import Loading from "./../ressources/loading.gif";

const NUM_PER_PAGE = 3;
const TOTAL_PAGES = 9;

const Product = () => {
  const [pageNumber, setpageNumber] = useState(1);
  const [productlist, setproductlist] = useState([]);
  const [loading, setloading] = useState(false);

  const product = products["products"];

  console.log(product.length);

  //fetches the data from the json file
  const onGrabData = async (pageNumber) => {
    const data = await product.slice(
      ((pageNumber - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
      NUM_PER_PAGE * (pageNumber % TOTAL_PAGES)
    );
    console.log("this si data" + data);
    //create a copy of the data and set it to the state
    setproductlist((prod) => [...prod, ...data]);
    setloading(true);
  };

  //side effect to fetch the data using the page number that i want to show on screen
  useEffect(() => {
    onGrabData(pageNumber);
  }, [pageNumber]);

  const loadMore = () => {
    setpageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const pageEnd = useRef();

  let num = 1;

  //using intersection observer to load more data when the user scroll down
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
            if (num >= 5) {
              observer.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  });

  return (
    <div>
      {
        // map the list of products to show it up on the screen
        productlist.map((product, i) => {
          return (
            <div className="products" key={i}>
              <div>
                <div>
                  <Card>
                    <Card.Header as="h5">
                      <span>product id :</span> {product.productId}
                    </Card.Header>
                    <Card.Body>
                      <div className="titlestyling">
                        <Card.Title>
                        <div class="row">
                        <div class="col-6">
                        <h4>Bank Name :{product.bank.name}</h4>
                        </div>
                        <div class="col-6">
                        <h5>Bank detail : {product.bank.detailedName}</h5>
                        <h5>Bank loanername : {product.bank.loanerName}</h5>
                        </div>
                      </div>
                          
                         
                        </Card.Title>
                      </div>
                      <Card.Text>
                        <div className="ratesstyle">
                          <div>
                            product monthly rate :
                            {product.rates.effective.min.monthlyRate}
                          </div>
                          <div>
                            product min interest :
                            {product.rates.effective.min.interest}
                          </div>
                        </div>
                      </Card.Text>
                      <div class="row">
                        <div class="col-8">
                          <Alert.Link href="#">
                            product bullets :{product.bullets}
                          </Alert.Link>
                        </div>
                        <div class="col-4">
                          <Button class="secondary">weiter</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          );
        })
      }
      <div className="loading">
        <img src={Loading} alt="loading" />
      </div>
      <div className="loadmore">
        <h3> {productlist.length}</h3>

        <button
          type="button"
          class="btn btn-link"
          onClick={loadMore}
          ref={pageEnd}
        >
          Load more{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
