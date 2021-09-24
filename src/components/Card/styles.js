import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--midBlue);
  width: 300px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
  section {
    width: 70%;
    text-align: center;
  }
`;
