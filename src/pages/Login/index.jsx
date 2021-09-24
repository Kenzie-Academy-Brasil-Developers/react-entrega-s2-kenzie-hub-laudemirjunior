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
import { useHistory } from "react-router-dom";

export default function Singup() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
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

  const onSubmitFunction = ({ name, email, password, course_module }) => {
    const user = { name, email, password, course_module };
    api
      .post("/user", user)
      .then((response) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta, teste outro email"));
  };

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
