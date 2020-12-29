import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 35%;
  font-weight: bold;
  text-align: center;
  div {
    color: Aqua;
    letter-spacing: 0.2rem;
    .top {
      font-size: 4rem;
    }
    .bottom {
      font-size: 1.5rem;
    }
  }
`;

const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="top">
          Hi, I am <br /> Maor Kamilyan
        </div>
        <div className="bottom">
          <Typewriter
            options={{
              strings: ["Web Developer", "Software Engineer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage;
