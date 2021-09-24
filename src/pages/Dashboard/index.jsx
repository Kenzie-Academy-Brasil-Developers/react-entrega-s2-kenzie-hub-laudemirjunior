import { useForm } from "react-hook-form";
import { Container, Content, Cards, Logout } from "./styles";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import Card from "../../components/Card";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dashboard({ authenticated }) {
  const [id] = useState(JSON.parse(localStorage.getItem("@KenzieHub:id")));
  const [techs, setTechs] = useState([]);
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function loadTasks() {
    api
      .get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechs(response.data.techs));
  }

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCompleted = (id) => {
    const newTech = techs.filter((item) => item.id !== id);
    api
      .delete(`/users/techs//${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((reponse) => setTechs(newTech))
      .then(() => toast.warning("Tecnologia excluida com Sucesso"));
  };

  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  const onSubmitFunction = (data) => {
    api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => loadTasks())
      .then(() => toast.success("Tecnologia adicionada com sucesso"))
      .catch(() => toast.error("Adicione um tecnologia diferente"));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Logout>
        <Button onClick={() => logout()}>Logout</Button>
      </Logout>
      <Content>
        <h1>Minhas tecnologias</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            register={register}
            name="title"
            icon={FiMail}
            label="Tecnologia"
            placeholder="Digite uma tecnologia"
            error={errors.title?.message}
          />
          <Input
            register={register}
            name="status"
            icon={FiLock}
            label="Status"
            placeholder="Digite o status"
            type="text"
            S
            error={errors.status?.message}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Content>
      <Cards>
        {techs.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              status={item.status}
              onClick={() => handleCompleted(item.id)}
            />
          );
        })}
      </Cards>
    </Container>
  );
}
