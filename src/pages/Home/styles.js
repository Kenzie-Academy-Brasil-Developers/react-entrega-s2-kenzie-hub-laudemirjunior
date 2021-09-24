import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 500px;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
  }
  div {
    display: flex;
    margin-top: 3rem;
    justify-content: space-evenly;
  }
  span {
    font-size: 1.5rem;
  }
`;
