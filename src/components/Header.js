import React from "react";
import styled from "@emotion/styled";

//Asi se declara styled components, imporatntdolo arriba y almacenandolo en una variable mas abajo posteriormente se cambia la etiqueta mencionada en la varibale por el nombee de la variable para aplicar el css hecho
const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;
const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

export default Header;
