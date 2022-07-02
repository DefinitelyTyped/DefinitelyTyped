import * as React from 'react';

declare namespace ModalTitle {
    export interface ModalTitleProps extends React.HTMLProps<ModalTitle> {
        componentClass?: React.ElementType | undefined;
        bsClass?: string | undefined;
    }
}
declare class ModalTitle extends React.Component<ModalTitle.ModalTitleProps> { }
export = ModalTitle;
