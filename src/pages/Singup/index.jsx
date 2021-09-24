import { useForm } from "react-hook-form";
import { Container, Content } from "./styles";
import Button from "../../components/Button/index";
import { Link } from "react-router-dom";
import Input from "../../components/Input/index";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { GiLunarModule } from "react-icons/gi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";

export default function Singup({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
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

  const history = useHistory({});

  const onSubmitFunction = ({ name, course_module, email, password }) => {
    const user = { name, course_module, email, password };
    api
      .post("/user", user)
      .then((response) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta, teste outro email"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Cadastro</h1>
          <Input
            register={register}
            name="name"
            icon={FiUser}
            label="Nome"
            placeholder="Seu nome"
            error={errors.name?.message}
          />
          <Input
            register={register}
            name="course_module"
            icon={GiLunarModule}
            label="Módulo do curso"
            placeholder="Seu módulo do curso"
            error={errors.course_module?.message}
          />
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
          <Input
            register={register}
            name="passwordConfirm"
            icon={FiLock}
            label="Confirmação de senha"
            placeholder="Confirmação de senha"
            type="password"
            error={errors.passwordConfirm?.message}
          />
          <Button type="submit">Enviar</Button>
          <p>
            Já tem uma conta? Faça seu <Link to="/login">Login</Link>
          </p>
        </form>
      </Content>
    </Container>
  );
}
