import styled from "styled-components";

export const Container = styled.button`
  height: 50px;
  width: 100%;
  background-color: var(--topBlue);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid var(--topBlue);
  transition: 0.5s;
  color: white;
  padding: 5px;
  :hover {
    border: 2px solid var(--black);
    background-color: var(--botBlue);
    transition: 0.5s;
    color: black;
  }
`;
