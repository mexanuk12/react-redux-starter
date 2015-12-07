import React from 'react';
import 'styles/core.styl';
import Nav from './Nav';
import Header from './Header';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div>
        <Header></Header>
        <div className='wrapper'>
          <Nav></Nav>
          {this.props.children}
        </div>
      </div>
    );
  }
}
