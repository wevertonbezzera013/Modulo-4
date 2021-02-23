import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from './MenuItems';
import './NavBar.css'

class NavBar extends Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">BonsDrinks<i className="fas fa-cocktail"></i></h1>
                <div className="menu-icon" onClick ={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key ={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;