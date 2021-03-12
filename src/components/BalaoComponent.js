import React, { Component } from "react";
import styled from "styled-components";

const BalaoContainer = styled.div`
  background-color: #ffbe76;
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
      <BalaoContainer onDoubleClick={this.props.onDubClick}>
        <Remetente>{this.props.usuario}</Remetente>
        <Mensagem>{this.props.mensagem}</Mensagem>
      </BalaoContainer>
    );
  }
  s;
}
