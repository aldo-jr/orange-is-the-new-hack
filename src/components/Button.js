import React from 'react';

export default class Button extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <button
        className={`btn btn-${this.props.color} ${this.props.classes}`}
        {...this.props}>
        {this.props.children}
      </button>
    )
  }
}