import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  .pointer {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <div className="pointer">&gt;</div>
    </MyScroll>
  );
};

export default ScrollDown;
