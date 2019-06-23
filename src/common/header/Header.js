import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import accountCircle from '../../assets/icon/accountCircle.svg';








class Header extends Component {
    render() {
        return (
            //the account circle icon image has been inserted inside the button component
            <header className="app-header">

                <div className="login-button">
                    <Button variant="contained" color="default">
                    <img src={accountCircle} className="accountCircle-logo" alt="accountCircle" />
                    Login
                    </Button>
                </div>

            </header>

        )
    }
}

export default Header; 