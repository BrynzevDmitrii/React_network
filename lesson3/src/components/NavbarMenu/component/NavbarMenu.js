import React from 'react';
import c from './NavbarMenu.module.css';

function NavbarMenu (props) {
    return(
        <div className= {c.navMenu}>
            <ul className = {c.list}>
                {props.sectins}
            </ul>
        </div>
    )
}

export default NavbarMenu;
