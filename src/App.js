import styled from "styled-components";
import React, { Component } from "react";
import InputComponent from "./components/InputComponent";
import BalaoComponent from "./components/BalaoComponent";

const LinhaContainer = styled.div`
  display: flex;
  width: 490px;
  padding: 10px;
`;

const ChatContainer = styled.div`
  min-height: 100vh;
  background-color: pink;
  width: 500px;
  margin: auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const InputsContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Enviar = styled.button`
  height: 3.9em;
  font-weight: bold;
  padding: 0 5px;
`;

export default class App extends Component {
  state = {
    idMensagem: 1,
    inputUsuario: "",
    inputMensagem: "",
    mensagens: [],
  };

  handleInputUsuario = (event) => {
    this.setState({
      inputUsuario: event.target.value,
    });
  };

  handleInputMensagem = (event) => {
    this.setState({
      inputMensagem: event.target.value,
    });
  };

  onClickEnviar = () => {
    const mensagem = {
      id: this.state.idMensagem,
      usuario: this.state.inputUsuario.trim(),
      mensagem: this.state.inputMensagem,
    };

    this.setState({
      idMensagem: this.state.idMensagem + 1,
      mensagens: [...this.state.mensagens, mensagem],
    });
  };

  onDubleClickExcluiMsg = (id) => {
    if (window.confirm("Tem certeza que deseja deletar essa mensagem?")) {
      const novoArrayMensagem = this.state.mensagens.filter((mensagem) => {
        return mensagem.id !== id;
      });

      this.setState({
        mensagens: [...novoArrayMensagem],
      });
    }
  };

  aoClicarEnter = (event) => {
    if (event.key === "Enter") {
      this.onClickEnviar();
    }
  };

  render() {
    const listademensagens = this.state.mensagens.map((mensagem) => {
      return (
        <LinhaContainer key={mensagem.id}>
          <BalaoComponent
            usuario={mensagem.usuario}
            mensagem={mensagem.mensagem}
            onDubClick={() => {
              this.onDubleClickExcluiMsg(mensagem.id);
            }}
          />
        </LinhaContainer>
      );
    });

    return (
      <ChatContainer>
        {listademensagens}

        <InputsContainer>
          <InputComponent
            tamanhoComponente={"80px"}
            placeholderText="Usuário"
            valorInput={this.state.inputUsuario}
            handleInput={this.handleInputUsuario}
          />

          <InputComponent
            tamanhoComponente={"300px"}
            placeholderText="Mensagem"
            valorInput={this.state.inputMensagem}
            handleInput={this.handleInputMensagem}
            handleEnter={this.aoClicarEnter}
          />

          <Enviar onClick={this.onClickEnviar}>Enviar</Enviar>
        </InputsContainer>
      </ChatContainer>
    );
  }
}
