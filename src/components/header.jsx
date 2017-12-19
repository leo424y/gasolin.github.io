import React from 'react';
import { Tab, Tabbar } from 'react-mdc-web/lib/Tabs';
import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle } from 'react-mdc-web/lib/Toolbar';
import { Link, NavLink } from 'react-router-dom';

const tabStyle = {
  marginTop: '3px',
};

const toolbarStyle = {
  minHeight: '48px',
};

const linkStyle = {
  color: 'inherit',
  textDecoration: 'inherit',
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    let handleClick = (evt) => evt.target.dataset.value && this.setState({value: evt.target.dataset.value});
    return (<Toolbar z={4}>
      <ToolbarRow style={toolbarStyle}>
        <ToolbarSection align="start">
          <ToolbarTitle data-value={0}>
            <Link to="/" style={linkStyle}>gasolin</Link>
          </ToolbarTitle>
          <Tabbar style={tabStyle} onClick={handleClick}>
            <NavLink className="mdc-tab" activeClassName="mdc-tab--active" to="/resume" style={linkStyle} data-value={1}>Resume</NavLink>
            <NavLink className="mdc-tab" activeClassName="mdc-tab--active" to="/portfolio" style={linkStyle} data-value={2}>Projects</NavLink>
            <NavLink className="mdc-tab" activeClassName="mdc-tab--active" to="/present" style={linkStyle} data-value={3}>Presentations</NavLink>
          </Tabbar>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>);
  }
}

export default Header;
