import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card(props) {
  return (
    <li>
      <CardLink to={props.path}>
        <figure label={props.label}>
          <img src={props.src} alt="" />
        </figure>
        <h5>{props.text}</h5>
      </CardLink>
    </li>
  );
}

export default Card;

const CardLink = styled(Link)`
  flex: 1;
  height: 30vh;
  width: 30vw;
  margin: 10px;
  text-decoration: none;
  display: flex;
  flex-flow: column;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  -moz-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  -o-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  -ms-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));

  figure {
    position: relative;
    height: 50%;
    width: 100%;
    overflow: hidden;
  }

  figure:after {
    content: attr(label);
    position: absolute;
    bottom: 10px;
    left: 6px;

    padding: 4px 6px;
    max-width: calc(50% - 60px);
    min-width: 18%;
    font-size: 12px; /*media querie*/
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
  }

  img {
    position: absolute;
    bottom: 0;
    height: auto; //Responsive
    max-width: 100%; //Responsive
    min-height: 100%; //Prevents over shrinking
    transition: transform 0.2s linear;
    -webkit-transition: transform 0.2s linear;
    -moz-transition: transform 0.2s linear;
    -o-transition: transform 0.2s linear;
    -ms-transition: transform 0.2s linear;
  }

  img:hover {
    transform: scale(1.2);
  }

  h5 {
    margin: 10px 16px 16px;
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
  }

  @media only screen and (max-width: 600px) {
    figure:after {
      font-size: 6px;
    }

    h5 {
      font-size: 9px;
    }
  }
`;

/*USAGE:


import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Card from "./components/Card";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  list-style: none;
`; /*

/*( ^^ OPTIONAL)*/

/*
function App() {
  return (
    <Router>
      <Switch>
        <StyledList>
          <Card
            src="./images/programmer.jpg"
            label="wtf"
            path="/"
            text="texting"
          />
          <Card
            src="./images/img-5.jpg"
            label="label test"
            path="/"
            text="texts"
          />
        </StyledList>
      </Switch>
    </Router>
  );
}

export default App;

*/
