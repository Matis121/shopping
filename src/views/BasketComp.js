import React, { Component, useState } from "react";

export default class Basket extends Component {
  state = {
    basketValue: 0,
  };

  render() {
    const updateState = (value) => {};

    return <div>{this.props.basketValue}</div>;
  }
}
