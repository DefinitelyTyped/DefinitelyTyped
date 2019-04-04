import * as React from 'react';

declare namespace ModalBody {
    export interface ModalBodyProps extends React.HTMLProps<ModalBody> {
        componentClass?: React.ElementType;
        bsClass?: string;
    }
}
declare class ModalBody extends React.Component<ModalBody.ModalBodyProps> { }
export = ModalBody;
