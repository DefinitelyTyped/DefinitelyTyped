import * as React from 'react';
import { useRanger } from 'react-ranger';

const App = () => {
    const [values, setValues] = React.useState([10]);

    const ranger = useRanger({
        values,
        onChange: setValues,
        min: 0,
        max: 100,
        stepSize: 5,
    });

    return (
        <>
            <div
                {...ranger.getTrackProps({
                    style: {
                        height: '4px',
                        background: '#ddd',
                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,.6)',
                        borderRadius: '2px',
                    },
                })}
            >
                {ranger.ticks.map(({ getTickProps }) => {
                    const tickProps = getTickProps({ className: 'tick-class' }); // $ExpectType { className: string; } & TickProps
                    return <div {...tickProps} />;
                })}
                {ranger.handles.map(({ getHandleProps }) => (
                    <div
                        {...getHandleProps({
                            style: {
                                width: '12px',
                                height: '12px',
                                borderRadius: '100%',
                                background: 'linear-gradient(to bottom, #eee 45%, #ddd 55%)',
                                border: 'solid 1px #888',
                            },
                        })}
                    />
                ))}
            </div>
        </>
    );
};
