import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md='6' className="mb-4" >
            <div to="/">
              <div className="logo">
                <div>
                  <h1 className="text-white">
                    <span>T</span>
                    <span>o</span>
                    <span>p</span>
                    <span style={{ color: "red" }}>Z</span>
                    <span style={{ color: "blue" }}>o</span>
                    <span style={{ color: "green" }}>n</span>
                    <span style={{ color: "pink" }}>e</span>
                  </h1>
                </div>
              </div>
              <p className="footer__text mt-4">
                Technology is the closest thing to magic that exists in this
                world!
              </p>
            </div>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Iphone</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Ipad</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Macbook</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Apple Watch</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Airpods</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="">Phu-Kien</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Userful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/product">Product</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-fill"></i>
                  </span>
                  <p>
                    15/1B Hong Ha Ward 2, Tan Binh District, Ho Chi Minh City
                  </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+84988****39</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>truongnxgcs190087@fpt.edu.vn</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Xuan Truong. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
