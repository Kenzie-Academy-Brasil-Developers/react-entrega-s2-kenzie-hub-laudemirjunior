import styled from "styled-components";
export const Container = styled.div`
  text-align: left;
  width: 300px;
  div {
    font-size: 0.8rem;
    span {
      color: red;
    }
  }
`;

export const InputContainer = styled.div`
  border-radius: 5px;
  border: 2px solid var(--midBlue);
  background-color: var(--botBlue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border-radius: 5px;
    width: 280px;
    height: 40px;
    border: none;
    background-color: var(--botBlue);
    input:-internal-autofill-selected {
      background-color: red;
    }
  }
  svg {
    margin: 0 5px;
  }
`;
