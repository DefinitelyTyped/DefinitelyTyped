import Slider from 'react-rangeslider';
import * as React from 'react';

const value = 80;

const handleChange = (value: number) => {
    console.log('changed to', value);
};

const slider = <Slider
                    disabled={false}
                    max={100}
                    min={0}
                    orientation="vertical"
                    reverse={false}
                    step={1}
                    tooltip={true}
                    value={value}
                    onChange={handleChange}
                    onChangeStart={handleChange}
                    onChangeComplete={handleChange}
                />;
