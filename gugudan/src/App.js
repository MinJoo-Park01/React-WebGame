import React, { Component } from 'react';


class GuGuDan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '', //input에 들어갈 값
      result: '', //결과값
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '', //input에 들어갈 값
        result: '정답',

      })
    } else {
      this.setState({
        result: '땡',
        value: '',
      })
    }
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <>
        <div>
          {this.state.first}곱하기{this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="number" value={this.state.value} onChange={this.onChange} />
          <button>입력!</button>
        </form>
        {this.state.result}
      </>
    );
  }
}

export default GuGuDan;