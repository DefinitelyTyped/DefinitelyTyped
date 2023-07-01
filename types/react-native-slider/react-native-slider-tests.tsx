import Slider from 'react-native-slider';
import { useState } from 'react';

export default SliderTest = () => {
    const [val, setVal] = useState<number>(0);

    return (
        <Slider
            value={val}
            onValueChange={e => setVal(e)}
            onSlidingStart={e => setVal(e)}
            onSlidingComplete={e => setVal(e)}
        />
    );
};
