import styled from "styled-components";

export const Container = styled.button`
  width: 150px;
  height: 50px;
  background-color: var(--topBlue);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid var(--topBlue);
  transition: 0.5s;
  :hover {
    border: 2px solid var(--black);
    background-color: var(--botBlue);
    transition: 0.5s;
  }
`;
