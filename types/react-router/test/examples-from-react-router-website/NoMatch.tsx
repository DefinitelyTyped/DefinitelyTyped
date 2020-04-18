import * as React from 'react';
import {
    BrowserRouter as Router,
    RouteComponentProps,
    Route,
    Link,
    Routes,
    useLocation,
    useNavigate,
} from 'react-router-dom';

const NoMatchExample = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname === '/old-match') {
        navigate('/will-match');
        return;
    }
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/old-match">Old Match, to be redirected</Link>
                    </li>
                    <li>
                        <Link to="/will-match">Will Match</Link>
                    </li>
                    <li>
                        <Link to="/will-not-match">Will Not Match</Link>
                    </li>
                    <li>
                        <Link to="/also/will/not/match">Also Will Not Match</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/will-match" element={<WillMatch />} />
                    <Route element={<NoMatch />} />
                </Routes>
            </div>
        </Router>
    );
};

const Home = () => (
    <p>
        A <code>&lt;Switch&gt;</code> renders the first child <code>&lt;Route&gt;</code> that matches. A{' '}
        <code>&lt;Route&gt;</code> with no <code>path</code> always matches.
    </p>
);

const WillMatch = () => <h3>Matched!</h3>;

const NoMatch: React.FunctionComponent = () => {
    const location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
};

export default NoMatchExample;
