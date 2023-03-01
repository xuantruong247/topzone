import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/img/eco-logo .png";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/img/user-icon.png";
import "./header.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "product",
    display: "Product",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <NavLink to="/">
              <div className="logo">
                <img src={logo} alt="logo" />
                <div style={{ textDecoration: "none" }}>
                  <h1>
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
            </NavLink>

            <div className="nav__navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__items" key={index}>
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="heart__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="user"
                />
              </span>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
