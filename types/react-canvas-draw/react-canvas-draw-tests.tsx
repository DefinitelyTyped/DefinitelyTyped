import CanvasDraw from 'react-canvas-draw';
import * as React from 'react';

const AllOptions: JSX.Element = (
    <CanvasDraw
        onChange={canvas => canvas.getSaveData()}
        loadTimeOffset={7}
        lazyRadius={4}
        brushRadius={1}
        brushColor="brushColor"
        catenaryColor="catenaryColor"
        gridColor="gridColor"
        backgroundColor="backgroundColor"
        hideGrid
        canvasWidth="100%"
        canvasHeight={12}
        disabled
        imgSrc="imgSrc"
        saveData="saveData"
        immediateLoading
        hideInterface
        className="className"
        style={{ border: '1px solid #000' }}
    />
);

const NoOptions: JSX.Element = <CanvasDraw />;

function RefTest() {
    const ref = React.useRef<CanvasDraw>(null);

    if (ref.current) {
        ref.current.clear();
        ref.current.undo();
        ref.current.loadSaveData('data');
        ref.current.loadSaveData('data', true);
        const saveData: string = ref.current.getSaveData();
    }

    return <CanvasDraw ref={ref} />;
}
