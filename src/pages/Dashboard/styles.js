import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logout = styled.div`
  width: 100px;
  position: absolute;
  bottom: 0;
  margin: 0.5rem;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  h1 {
    color: var(--topBlue);
    font-weight: 600;
    font-size: 3rem;
    text-shadow: var(--black) 2px 2px;
  }
  form {
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Cards = styled.div`
  max-width: 700px;
  display: flex;
  margin-top: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
`;
