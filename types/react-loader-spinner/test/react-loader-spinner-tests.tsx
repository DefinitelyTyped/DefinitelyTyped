import * as React from 'react';
import Loader from 'react-loader-spinner';

const App = () => {
    return (
        <div>
            <Loader
                color="#8000FF"
                height={80}
                secondaryColor="#ffffff"
                timeout={3000}
                type="Audio"
                visible={true}
                width={80}
                className="some-class"
                style={{color: "red"}}
            />
            <Loader
                color="#8000FF"
                height={"2rem"}
                secondaryColor="#ffffff"
                timeout={3000}
                type="Audio"
                visible={true}
                width={"1rem"}
            />
        </div>
    );
};
