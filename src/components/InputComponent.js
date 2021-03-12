import React, { Component } from "react";
import styled from "styled-components";

const InputText = styled.input`
  width: ${(props) => props.tamanho};
  padding: 5px;
  height: 3em;
  outline: none;
  align-content: start;
`;

export default class InputComponent extends Component {
  render() {
    return (
      <div>
        <InputText
          tamanho={this.props.tamanhoComponente}
          placeholder={this.props.placeholderText}
          value={this.props.valorInput}
          onChange={this.props.handleInput}
          onKeyUp={this.props.handleEnter}
        />
      </div>
    );
  }
}
