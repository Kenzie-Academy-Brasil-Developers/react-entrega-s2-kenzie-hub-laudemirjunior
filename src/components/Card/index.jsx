import { Container } from "./styles";
import Button from "../Button";

const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{status}</h2>
      <Button onClick={onClick}>Concluir</Button>
    </Container>
  );
};

export default Card;
