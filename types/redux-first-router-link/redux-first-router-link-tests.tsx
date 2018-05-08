import * as React from "react";
import Link, { NavLink } from "redux-first-router-link";

interface Payload {
    category: string;
}

export default () => {
    return (
        <div>
            { /* as a standard href path string: */ }
            <Link to='/list/db-graphql'>DB & GRAPHQL</Link>

            { /* as an array of path segments: */ }
            <Link to={['list', 'react-redux']}>REACT & REDUX</Link>

            { /* as an action object (RECOMMENDED APPROACH SO YOU CAN CHANGE ALL URLs FROM YOUR ROUTESMAP): */ }
            <Link to={{type: 'LIST', payload: { category: 'fp' }}}>FP</Link>

            <Link
                to='/'
                key='1'
                className='home-link'
                style={{
                    color: 'hotpink',
                }}
                id='the-home-link'
            >Home</Link>

            <NavLink
                to={{ type: 'LIST', payload: { category: 'redux-first-router' } }}
                activeClassName='active'
                activeStyle={{ color: 'purple' }}
                exact={true}
                strict={true}
                isActive={(match, location) => (location.payload as Payload).category === 'redux-first-router'} >
                Redux First Router
            </NavLink>

            <NavLink
                to='/'
                className='nav-link'
            >Nav link with class</NavLink>
        </div>
    );
};
