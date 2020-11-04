import React from "react";
import styled from "styled-components";

function HeroSection() {
  return (
    <StyledHeroSection>
      <div className="left">
        <h1>TEXT GOES HER</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
          provident!
        </p>
        <button>BUTTON</button>
      </div>
      <div className="right">
        <img src="./components/dog.jpg" alt="" />
      </div>
    </StyledHeroSection>
  );
}

export default HeroSection;

const StyledHeroSection = styled.div`
  background: url(/images/camels.jpg) no-repeat center center/cover;
  height: 90vh;
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);

  .left {
    flex: 1;
    height: 50%;
    border: 1px solid white;
    margin: 10px;
    padding: 10px;
    font-size: 12px;
  }

  .right {
    flex: 1;
    height: 90%;
    border: 1px solid white;
    margin: 10px;
    padding: 1px;

    display: flex;

    align-items: center;
    justify-content: center;
  }
  img {
    height: 90%;
    width: 80%;
  }

  @media only screen and (max-width: 400px) {
    .left {
      font-size: 6px;
      padding: 2px;
    }
  }
  @media only screen and (max-height: 340px) {
    .left {
      font-size: 6px;
      padding: 2px;
    }
  }
`;
