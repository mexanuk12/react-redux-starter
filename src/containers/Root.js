import React                    from 'react';
import { Provider }             from 'react-redux';
import { Router }               from 'react-router';
import routes                   from '../routes';
import DevTools                 from './DevTools';
import { createDevToolsWindow } from '../utils';

import Header from './Header';
import Nav from './Nav';
import AboutView from 'views/AboutView';

export default class Root extends React.Component {
  static propTypes = {
    history : React.PropTypes.object.isRequired,
    store   : React.PropTypes.object.isRequired,
    debug   : React.PropTypes.bool,
    debugExternal : React.PropTypes.bool,
    children: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    debug : false,
    debugExternal : false
  }

  renderDevTools () {
    if (!this.props.debug) {
      return null;
    }

    return this.props.debugExternal ?
      createDevToolsWindow(this.props.store) : <DevTools />;
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div>
          <Header></Header>
          <div className='wrapper'>
            <Nav></Nav>
            <Router history={this.props.history}>{routes}</Router>
          </div>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
