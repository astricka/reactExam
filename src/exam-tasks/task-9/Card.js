import React, { Component } from 'react';
import css from './Card.module.css';

export default class Card extends Component {
  render() {
    return (
        <div className={css.container}>
          <h5>Title: {this.props.title}</h5>
          <h5>Complete status: {this.props.completed}</h5>
        </div>
    )
  }
}
