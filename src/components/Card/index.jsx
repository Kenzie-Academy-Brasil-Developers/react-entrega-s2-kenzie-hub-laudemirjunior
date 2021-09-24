import { Container } from "./styles";
import Button from "../Button";

const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <section>
        <h2>{title}</h2>
        <h3>{status}</h3>
      </section>
      <div>
        <Button onClick={onClick}>Concluir</Button>
      </div>
    </Container>
  );
};

export default Card;
