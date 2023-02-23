import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../style/home.css";
import heroImg from "../assets/images/img/hero_img.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Service from "../services/Service";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import { useEffect, useState } from "react";
import couterImg from "../assets/images/img/count-timer.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setWiPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterdTrendingProducts = products.filter(
      (item) => item.category === "ipad"
    );

    const filterdBestSalesProducts = products.filter(
      (item) => item.category === "iphone"
    );

    const filterdmobileProducts = products.filter(
      (item) => item.category === "airpods"
    );

    const filterdwirelessProducts = products.filter(
      (item) => item.category === "phu-kien"
    );

    const filterdPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filterdTrendingProducts);
    setBestSaleProducts(filterdBestSalesProducts);
    setMobileProducts(filterdmobileProducts);
    setWirelessProducts(filterdwirelessProducts);
    setWiPopularProducts(filterdPopularProducts);
  }, []);

  return (
    <div>
      <section className="hero__section">
        <div>
          <Helmet>
            <title>TopZone - Cửa hàng Apple chính hãng</title>
          </Helmet>
        </div>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content" >
                <p className="hero__subtitle">Trending product in{year}</p>
                <h2>Change your life & Connect to the future</h2>
                <p>
                  Technology is the closest thing to magic that exists in this
                  world!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/product" style={{ color: "white" }}>
                    SHOPPING NOW
                  </Link>
                </motion.button>
              </div>
            </Col>
            <Col>
              <div className="hero__img">
                <img
                  src={heroImg}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Service />

      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title mb-5">Trending Producst</h2>
          </Col>
          <ProductsList data={trendingProducts} />
        </Row>
      </Container>

      <div className="best__sales mt-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title mb-5">Best Sales</h2>
            </Col>
            <ProductsList data={bestSaleProducts} />
          </Row>
        </Container>
      </div>
      <section className="timer__count mt-5">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Macbook</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                type="button"
                class="store__btn buy__btn"
              >
                <Link to="/product">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={couterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title mb-5">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title mb-5">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
