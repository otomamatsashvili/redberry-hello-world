import React from 'react';
import { useParams } from 'react-router-dom';
import Robot from '../robot.png';

function Hello() {
    const { name } = useParams();
    return (
        <div className="Hello_Main">
            <img src={Robot} alt="Robot" />
            <h1>
                {'< '} <p className="Hello_Main-greeting">Hello,</p>{' '}
                <p className="Hello_Main-name">{name ? name + '!' : 'World'}</p> {' />'}
            </h1>
        </div>
    );
}

export default Hello;
