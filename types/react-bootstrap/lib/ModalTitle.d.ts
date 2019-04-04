import * as React from 'react';

declare namespace ModalTitle {
    export interface ModalTitleProps extends React.HTMLProps<ModalTitle> {
        componentClass?: React.ElementType;
        bsClass?: string;
    }
}
declare class ModalTitle extends React.Component<ModalTitle.ModalTitleProps> { }
export = ModalTitle;
