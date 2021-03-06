import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';
import User from "../User/User";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class Profile extends React.Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className='main-layout'>
                <div className='content-wrapper'>
                    <h3>Profile</h3>
                    <User name={this.props.name}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ userReducer }) =>({
    user: userReducer.user.name,
});

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Profile);