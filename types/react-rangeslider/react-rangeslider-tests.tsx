import Slider from 'react-rangeslider';
import * as React from 'react';

let value = 80;

let handleChange = function() {
  console.log('changed');
}

let slider =  <Slider
                disabled={false}
                max="100"
                min="0"
                orientation="vertical"
                reverse={false}
                step="1"
                tooltip={true}
                value={value}
                onChange={handleChange()}
                onChangeStart={handleChange()}
                onChangeComplete={handleChange()}
              />
