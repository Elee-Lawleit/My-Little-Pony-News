import React from 'react';
import { Media } from 'reactstrap';

function MenuComponent(props) {
    return (
        <div className='container'>
            <div className='row'>
                <Media list>
                    {menu}
                </Media>
            </div>
        </div>
    );
}

export default MenuComponent;