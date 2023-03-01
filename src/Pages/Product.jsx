import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";

import CommonSection from "../components/UI/CommonSection";

import "../style/product.css";
import products from "./../assets/data/products";
import ProductsList from "./../components/UI/ProductsList";

const Product = () => {
  //select option
  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (!filterValue) {
      setProductData(products);
    } else {
      const filterProducts = products.filter(
        (item) => item.category === filterValue
      );
      console.log("filterValue", filterValue);
      setProductData(filterProducts);
    }
  };

  // handle search
  const handleSearch = (e) => {
    const searchItem = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductData(searchProducts);
  };

  return (
    <div>
      <Helmet>
        <title>TopZone - Cửa hàng Apple chính hãng</title>
      </Helmet>
      <CommonSection />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="">Filter By Category</option>
                  <option value="iphone">Iphone</option>
                  <option value="ipad">Ipad</option>
                  <option value="macbook">Macbook</option>
                  <option value="watch">Apple Watch</option>
                  <option value="airpods">Airpods</option>
                  <option value="phu-kien">Accessory</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center fs-4">No product are found!</h1>
            ) : (
              <ProductsList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Product;
