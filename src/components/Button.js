import React from 'react';

class Button extends React.Component {

  handleClick () {
    console.log('button clicked.')
  }

  static propTypes = {
    text: React.PropTypes.string
  }

  static defaultProps = {
    text: '按钮'
  }

  render () {
    const { text } = this.props;
    return (
      <button onClick={this.handleClick}>{text}</button>
    );
  }
}

export default Button;