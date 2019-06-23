import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import accountCircle from '../../assets/icon/accountCircle.svg';
import fastfood from '../../assets/icon/fastfood.svg';
import { withStyles } from "@material-ui/core/styles";





//used this svg icon as a component not as a image as down for accountCircle icon in login button
const FastFoodIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.class} width="35" height="35" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M21.9 5H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.12 1.21C14.9 8.16 18 10.77 18 15l.02 8h1.7c.84 0 1.53-.65 1.63-1.47L22.89 6.1c.06-.59-.4-1.1-.99-1.1zM15 21H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM2.1 15h12.8c.62 0 1.11-.56.99-1.16-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16zM15 17H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>

)

class Header extends Component {
    render() {
        return (
            //the account circle icon image has been inserted inside the button component
            <header className="app-header">
                <FastFoodIcon fill = "white"/>
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