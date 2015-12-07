import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render () {
    return (
      <aside className='navbar'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Index</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}


export default Nav;