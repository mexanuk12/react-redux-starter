import React from 'react';


class Nav extends React.Component {
  static propTypes = {
    title: React.PropTypes.string
  }

  static defaultProps = {
    title : '默认标题'
  }

  render () {
    // const { title } = this.props;
    return (
      <aside className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#">{this.props.title}</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}


export default Nav;