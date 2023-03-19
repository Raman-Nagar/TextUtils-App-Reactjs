import React, { useState } from "react";

export class Listbox extends React.Component {
  constructor(props) {
    super(props);
    this.Box = this.Box.bind(this);
    this.Calc = this.Calc.bind(this);

    this.state = { nam: "", fee: "", s: "", s1: "" };
  }
  Box(e) {
    var r = "";
    var r1 = 0;
    for (let i = 0; i < e.target.length; i++) {
      if (e.target.options[i].selected) {
        r += e.target.options[i].title;
        r1 += +e.target.options[i].value;
      }
    }
    this.setState({ s: r });
    this.setState({ s1: r1 });
  }
  Calc(event) {
    this.setState({ nam: this.state.s });
    this.setState({ fee: this.state.s1 });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <select onChange={this.Box} multiple>
          <option value="10000" title=" C (10000), ">
            C
          </option>
          <option value="20000" title=" C++ (20000), ">
            C++
          </option>
          <option value="30000" title=" Java (30000) ">
            Java
          </option>
        </select>
        <buttun onClick={this.Calc}>click</buttun>
        <h2>{this.state.nam}</h2>
        <h2>{this.state.fee}</h2>
      </div>
    );
  }
}
