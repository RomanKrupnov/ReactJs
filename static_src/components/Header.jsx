import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from "prop-types";
import './styles/styles.css';
import {ListItem} from "material-ui/List";
import ContentSend from "material-ui/svg-icons/content/send";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };
  static defaultProps = {
    chatId: 1,
  };
  render() {
    return (
        <div className="header">
          <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
          <Link to="/profile/">
            <ListItem primaryText="Profile" />
          </Link>
        </div>
    )
  }
}