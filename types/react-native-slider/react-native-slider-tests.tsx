import Slider from 'react-native-slider';
import { useState } from 'react';

const SliderTest = () => {
    const [val, setVal] = useState<number>(0);

    return (
        <Slider
            value={val}
            onValueChange={setVal}
            onSlidingStart={setVal}
            onSlidingComplete={setVal}
        />
    );
};

export default SliderTest;
