import React from 'react';


class Header extends React.Component {
  static propTypes = {
    title: React.PropTypes.string
  }

  static defaultProps = {
    title : '默认标题'
  }

  render () {
    const { title } = this.props;
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>dropdown here.</nav>
      </header>
    );
  }
}


export default Header;