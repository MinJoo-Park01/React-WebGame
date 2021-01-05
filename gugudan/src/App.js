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

  render() {
    return (
      <>
        <div>
          {this.state.first}곱하기{this.state.second}는?
        </div>
        <form>
          <input type="number" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
          <button>입력!</button>
        </form>
        {this.state.result}
      </>
    );
  }
}

export default GuGuDan;