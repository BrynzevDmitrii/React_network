import React from 'react';
import './../../../App.css';


function Header(props) {
    return (
        <section className = 'header'>
            <div className = 'logo'><img className ='logo' src = 'logotip.svg' width = '100'></img></div>
            <div className = 'search'><input type = 'text'placeholder = 'Начнем поиск!'></input><button type = 'button'>Искать</button></div>
            <div className ='notifications'><img className = 'colocol' src = 'colocol1.png'></img></div>
            <div className = 'profileMenu'><img className = 'profile' src = 'profile.png'></img></div>
        </section>
    )
}

export default Header;