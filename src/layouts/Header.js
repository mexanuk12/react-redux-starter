import React from 'react';
import Button from '../components/Button';


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
        <div className='clearfix'>
          <Button></Button>
          <div className='business'>
            <img src="http://wx.qlogo.cn/mmopen/IbQhd2Y9oKc2zOTLXD4TZqVVh3BAHWLuGed8lcGJYgVsDaXTLOJp1IDWEZtEyUzEVLSLqGdDGEkdekGIKXCMHQ/0" alt="星巴克" />
            <dl>
              <dt>星巴克代购</dt>
              <dd>24小时营业 9元外送费</dd>
            </dl>
          </div>
        </div>
      </header>
    );
  }
}


export default Header;