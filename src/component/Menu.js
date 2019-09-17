import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UserMiddleware from '../store/Middleware/UserMiddleWare';

class Menu extends Component {
    state = {
        setClass: "",
        showMenu: false,
    }
    Submit = () => {
        this.props.logout();
    }
    handleMenu = (evt) => {
        evt.preventDefault();
        this.setState(({ setClass, showMenu }) => {
            return {
                showMenu: !showMenu,
                setClass: setClass === "" ? "is-active" : ""
            }
        })
    }
    render() {
        const { setClass, showMenu } = this.state;
        return (
            <React.Fragment>
                {<div className={showMenu ? "menu-wrap animated fadeIn slower" : "menu-wrap animated fadeOut slower"}>
                    <nav className="menu">
                        <div className="link-list">
                            <Link to="/home">Home</Link><br />
                            <Link to="/add-question">Create Question</Link><br />
                            <Link to="/leaders-board">Leaders Board</Link><br />
                            <Link to="/" onClick={() => this.Submit()}>Logout</Link><br />
                        </div>
                    </nav>
                </div>}

                <div className="menuHolder" onClick={(evt) => this.handleMenu(evt)}>
                    <button className={"c-hamburger c-hamburger--htx " + setClass} id="open-button" >
                        <span>toggle menu</span>
                    </button>
                </div>
            </React.Fragment>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: (data) => {
            return dispatch(UserMiddleware.logout(data))
        },
    }
}
export default connect(null, mapDispatchToProps)(Menu)