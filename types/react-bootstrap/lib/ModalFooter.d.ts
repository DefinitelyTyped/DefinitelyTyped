import * as React from 'react';

declare namespace ModalFooter {
    export interface ModalFooterProps extends React.HTMLProps<ModalFooter> {
        componentClass?: React.ElementType | undefined;
        bsClass?: string | undefined;
    }
}
declare class ModalFooter extends React.Component<ModalFooter.ModalFooterProps> { }
export = ModalFooter;
