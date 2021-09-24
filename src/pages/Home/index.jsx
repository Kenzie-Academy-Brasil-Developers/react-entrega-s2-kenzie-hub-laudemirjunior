import Button from "../../components/Button";
import { useHistory } from "react-router";
import { Container, Content } from "./styles";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <div>
      <Container>
        <Content>
          <h1>Kenzie Hub</h1>
          <span>
            Cadastre e exponha as tecnologias que aprendeu ou está aprendendo.
          </span>
          <div>
            <Button onClick={() => handleNavigation("/signup")} whiteSchema>
              Cadastra-se
            </Button>
            <Button onClick={() => handleNavigation("/login")}>Login</Button>
          </div>
        </Content>
      </Container>
    </div>
  );
};

export default Home;
