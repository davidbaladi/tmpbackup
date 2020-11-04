import React, { Component } from "react";
import "./Navbar.css";
import { Button } from "./Button";
import styled from "styled-components";

/*list of dictionaries for dropdown menu*/
const MenuItems = [
  { title: "Home", url: "#", cName: "nav-links" },
  { title: "Services", url: "#", cName: "nav-links" },
  { title: "Products", url: "#", cName: "nav-links" },
  { title: "Contact Us", url: "#", cName: "nav-links" },
  { title: "Sign up", url: "#", cName: "nav-links-mobile" },
];

export default class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => this.setState({ clicked: !this.state.clicked });
  render() {
    return (
      <StyledNav>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            fullerstack
            <i className="fab fa-react" />
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button>Sign Up</Button>
        </nav>
      </StyledNav>
    );
  }
}

const StyledNav = styled.div`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  }
  .NavbarItems {
    background: linear-gradient(
      90deg,
      rgba(110, 94, 254) 0%,
      rgba(73, 63, 252, 1) 100%
    );
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
  }
  .fa-react {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }
  .nav-links {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  .nav-links:hover {
    background-color: #6d76f7;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
  .fa-bars {
    color: #fff;
  }
  /*Sign up*/
  .nav-links-mobile {
    display: none;
  }
  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 1180px) {
    .NavbarItems {
      position: relative;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 550px;
      position: absolute;
      top: 80px;
      left: -100%;
      transition: all 0.5s ease;
    }
    .nav-menu.active {
      background: #6668f4;
      left: 0;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
    .nav-links:hover {
      background-color: #7577fa;
      border-radius: 0;
    }
    .navbar-logo {
      position: absolute;
      left: 0;
    }
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
    .fa-times {
      color: #fff;
      font-size: 2rem;
    }
    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #4ad9e4;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }
    .nav-links-mobile:hover {
      background: #fff;
      color: #6568f4;
      transform: 250ms;
    }
    button {
      display: none;
    }
  }
`;
