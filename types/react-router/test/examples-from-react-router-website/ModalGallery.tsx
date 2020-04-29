import * as React from 'react';
import {
    BrowserRouter as Router,
    RouteComponentProps,
    Route,
    Link,
    Routes,
    useParams,
    useLocation,
} from 'react-router-dom';

const { useState, useEffect } = React;

// This example shows how to render two different screens
// (or the same screen in a different context) at the same url,
// depending on you got there.
//
// Click the colors and see them full screen, then "visit the
// gallery" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.

const ModalSwitch: React.FunctionComponent = () => {
    const location = useLocation<{ modal: boolean }>();

    const [previousLocation, setPreviousLocation] = useState(location);

    useEffect(() => {
        // history.action !== 'POP' && has been removed. No idea how to make it work with v6
        if (!location.state || !location.state.modal) {
            setPreviousLocation(location);
        }
    });

    const isModal = location.state && location.state.modal && previousLocation !== location; // not initial render

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/img/:id" element={<ImageView />} />
            </Routes>
            {isModal ? <Route path="/img/:id" component={Modal} /> : null}
        </div>
    );
};

const IMAGES = [
    { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
    { id: 1, title: 'Lime Green', color: 'LimeGreen' },
    { id: 2, title: 'Tomato', color: 'Tomato' },
    { id: 3, title: 'Seven Ate Nine', color: '#789' },
    { id: 4, title: 'Crimson', color: 'Crimson' },
];

const Thumbnail: React.FunctionComponent<{ color: string }> = ({ color }) => (
    <div
        style={{
            width: 50,
            height: 50,
            background: color,
        }}
    />
);

const Image: React.FunctionComponent<{ color: string }> = ({ color }) => (
    <div
        style={{
            width: '100%',
            height: 400,
            background: color,
        }}
    />
);

const Home = () => (
    <div>
        <Link to="/gallery">Visit the Gallery</Link>
        <h2>Featured Images</h2>
        <ul>
            <li>
                <Link to="/img/2">Tomato</Link>
            </li>
            <li>
                <Link to="/img/4">Crimson</Link>
            </li>
        </ul>
    </div>
);

const Gallery = () => (
    <div>
        {IMAGES.map(i => (
            <Link
                key={i.id}
                to={{
                    pathname: `/img/${i.id}`,
                    // this is the trick!
                    state: { modal: true },
                }}
            >
                <Thumbnail color={i.color} />
                <p>{i.title}</p>
            </Link>
        ))}
    </div>
);

const ImageView: React.FunctionComponent = () => {
    const { id } = useParams();
    const image = IMAGES[parseInt(id, 10)];
    if (!image) {
        return <div>Image not found</div>;
    }

    return (
        <div>
            <h1>{image.title}</h1>
            <Image color={image.color} />
        </div>
    );
};

const Modal: React.FunctionComponent<RouteComponentProps<{ id: string }>> = ({ match, history }) => {
    const image = IMAGES[parseInt(match.params.id, 10)];
    if (!image) {
        return null;
    }
    const back = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        history.goBack();
    };
    return (
        <div
            onClick={back}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: 'rgba(0, 0, 0, 0.15)',
            }}
        >
            <div
                className="modal"
                style={{
                    position: 'absolute',
                    background: '#fff',
                    top: 25,
                    left: '10%',
                    right: '10%',
                    padding: 15,
                    border: '2px solid #444',
                }}
            >
                <h1>{image.title}</h1>
                <Image color={image.color} />
                <button type="button" onClick={back}>
                    Close
                </button>
            </div>
        </div>
    );
};

const ModalGallery = () => (
    <Router>
        <Route element={<ModalSwitch />} />
    </Router>
);

export default ModalGallery;
