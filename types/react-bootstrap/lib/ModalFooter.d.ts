import * as React from 'react';

declare namespace ModalFooter {
    export interface ModalFooterProps extends React.HTMLProps<ModalFooter> {
        componentClass?: React.ReactType | undefined;
        bsClass?: string | undefined;
    }
}
declare class ModalFooter extends React.Component<ModalFooter.ModalFooterProps> { }
export = ModalFooter;
