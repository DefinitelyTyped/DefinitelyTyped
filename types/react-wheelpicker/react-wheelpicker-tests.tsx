import React, { useState } from "react";
import WheelPicker from 'react-wheelpicker';

const App = () => {
    const [pickerOpen, setPickerOpen] = useState<boolean>(false);
    const [data, setData] = useState<string[]>(["Intro to Data Science", "Big Data", "Design and Analysis of Algorithms", "Operating Systems", "Cloud Computing", "Principles of Database Systems"]);
    const [defaultSelection, setDefaultSelection] = useState<number>(3);
    const [selection, setSelection] = useState<string>("Big Data");
    const updateSelection = (index: number) => {
        setDefaultSelection(index);
        setSelection(data[index]);
    };

    return (
        <React.Fragment>
        <div className="selected" onClick={() => setPickerOpen(!pickerOpen)}>
            {selection}
        </div>
        {pickerOpen &&
            <div className="demo-container">
            <WheelPicker
                animation="wheel"
                data={data}
                height={40}
                parentHeight={250}
                fontSize={13}
                defaultSelection={defaultSelection}
                updateSelection={updateSelection}
                scrollerId="scroll-select-subject"
            />
            </div>
        };
        </React.Fragment>
    );
};
