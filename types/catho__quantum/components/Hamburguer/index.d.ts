import React = require('react');

export interface HamburguerProps {
    showNotification?: boolean;
    isOpened?: boolean;
    inverted?: boolean;
    ariaLabelDescription?: string;
}

export default class Hamburguer extends React.Component<HamburguerProps> {}
