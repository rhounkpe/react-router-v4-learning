import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Topic from './Topic';
import './Topics.css';

const Topics = ({ match }) => {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <NavLink 
                        to={`${match.url}/rendering`}
                        activeCLassName="active"
                    >
                        Rendering with React
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`${match.url}/components`}
                        activeCLassName="active"
                    >
                        Components
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`${match.url}/props-v-state`}
                        activeCLassName="active"
                    >
                        Props vs. State
                    </NavLink>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route exact path={match.path} render={() => (
                <h3>Please select a topic.</h3>
            )} />

        </div>
    );
}

export default Topics;