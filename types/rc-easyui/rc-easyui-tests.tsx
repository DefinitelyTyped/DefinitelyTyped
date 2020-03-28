import * as React from 'react';
import { Dialog } from 'rc-easyui';
import {useState} from "../react";

interface IProps {

}
const ExampleDialog: React.FC<IProps> = (props: IProps) => {
    const [dialogOpen] = useState<boolean>(false);
    return(
        <Dialog
            closed={!dialogOpen}
            title="Basic Dialog"
            style={{width:'400px',height:'200px'}}
        />
    )
};

export default ExampleDialog;
