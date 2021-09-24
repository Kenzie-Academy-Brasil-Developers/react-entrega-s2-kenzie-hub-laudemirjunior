import { useForm } from "react-hook-form";
import { Container, Content } from "./styles";
import Button from "../../components/Button/index";
import { Link } from "react-router-dom";
import Input from "../../components/Input/index";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";

export default function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem(
          "@KenzieHub:id",
          JSON.stringify(response.data.user.id)
        );
        setAuthenticated(true);
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>
          <Input
            register={register}
            name="email"
            icon={FiMail}
            label="Email"
            placeholder="Seu melhor email"
            error={errors.email?.message}
          />

          <Input
            register={register}
            name="password"
            icon={FiLock}
            label="Senha"
            placeholder="Uma Senha bem segura"
            type="password"
            error={errors.password?.message}
          />
          <Button type="submit">Enviar</Button>
          <p>
            Não tem uma conta? Faça seu <Link to="/signup">Cadastro</Link>
          </p>
        </form>
      </Content>
    </Container>
  );
}
