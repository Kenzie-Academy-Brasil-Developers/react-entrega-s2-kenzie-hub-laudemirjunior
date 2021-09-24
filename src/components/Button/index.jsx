import { Container } from "./styles.js";

const Button = ({ children, whiteSchema, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
