import React, { Component } from 'react';
import { Radio } from 'antd';

class TodoItem extends Component {
  static defaultProps = {
    complete: false
  }
  constructor(props) {
    super(props);
    this.state = {
      completed: props.completed
    }
  }
  handleClick = () => {
    if (this.props.onChange) {
      this.props.onChange(this.props.idx,!this.state.completed);
    }
    this.setState({completed: !this.state.completed});
  }
  render() {
    const { name } = this.props;
    const { completed } = this.state;
    return (
      <li onClick={this.handleClick}>
        <Radio disabled={completed} checked={completed}>
         <sapn style={{textDecoration: completed ? 'line-through' : ''}}>{name}</sapn>
        </Radio>
      </li>
    )
  }
}
export default TodoItem;