import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Information</h1>
      <subsection>
        <a className="contactInformation1">
          <p>
            <i className="far fa-envelope fa-lg" />
            &nbsp;&nbsp;&nbsp;&nbsp;Email: DavidBaladi@gmail.com
          </p>
        </a>
        <a href=" tel: 4166888645" className="contactInformation2">
          <p>
            <i className="fas fa-mobile-alt fa-lg" />
            &nbsp;&nbsp;&nbsp;&nbsp;Mobile: (416) 688-8645
          </p>
        </a>
        <div className="contactInformation3">
          <p>
            <i className="fab fa-canadian-maple-leaf fa-lg" />
            &nbsp;&nbsp;&nbsp;&nbsp;City: Toronto, ON
          </p>
        </div>
      </subsection>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.section`
  background: black;
  color: white;
  text-align: center;
  padding: 10px;
  h1 {
    border-bottom: 2px solid #aaa;
    padding-bottom: 8px;
  }
  subsection {
    display: flex;
    justify-content: space-evenly;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.5s linear;
  }
  a: hover {
    color: lime;
  }
`;
