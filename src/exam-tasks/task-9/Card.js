import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
        <>
                <tr>
                    <td>{this.props.title}</td>
                    <td>{this.props.completed}</td>
                </tr>
          {/*<h5>Title: {this.props.title}</h5>*/}
          {/*<h5>Complete status: {this.props.completed}</h5>*/}
        </>
    )
  }
}
