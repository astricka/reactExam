import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
        <div>
          <h4>Title: {this.props.title}</h4>
          <h5>Complete status: {this.props.completed}</h5>
        </div>
    )
  }
}
