import React from 'react'
import { Route, Link } from 'react-router-dom'

const Topics = ({ match }) => (

    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/rendering`} component={Topic}/>
        <Route path={`${match.url}/components`} component={Topic}/>
        {/*<Route path={`${match.url}/:topicId`} component={Topic}/>*/}

    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>lol</h3>
    </div>
);
export default Topics