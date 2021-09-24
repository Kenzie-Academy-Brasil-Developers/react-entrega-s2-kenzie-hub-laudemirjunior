import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  text-align: center;
  form {
    height: 600px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;
