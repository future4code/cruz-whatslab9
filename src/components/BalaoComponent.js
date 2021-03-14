import React, { Component } from "react";
import styled from "styled-components";

const BalaoContainer = styled.div`
  background-color: ${(props) => {
    if (props.tipoUsuario.toLowerCase() === "eu") {
      return "#bdc3c7";
    } else {
      return "#ffbe76";
    }
  }};
  margin-bottom: 1em;
  margin-left: 10px;
  padding: 10px;
  min-width: 20%;
  max-width: 60%;
  word-wrap: break-word;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: ${(props) => {
    if (props.tipoUsuario.toLowerCase() === "eu") {
      return "0 0 0 auto";
    } else {
      return "0 auto 0 0 ";
    }
  }};
`;

const Remetente = styled.p`
  font-size: 1.1em;
  font-weight: bold;
`;

const Mensagem = styled.p`
  font-size: 0.9em;
`;

export default class BalaoComponent extends Component {
  render() {
    return (
      <BalaoContainer
        tipoUsuario={this.props.usuario}
        onDoubleClick={this.props.onDubClick}
      >
        {this.props.usuario.toLowerCase() === "eu" ? (
          ""
        ) : (
          <Remetente>{this.props.usuario}</Remetente>
        )}

        <Mensagem>{this.props.mensagem}</Mensagem>
      </BalaoContainer>
    );
  }
  s;
}
