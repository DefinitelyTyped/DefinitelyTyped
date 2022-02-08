import React = require('react');
import { BannerProps } from '../helper-types';

/**
 * Display a DFP Publisher banner
 */
declare class Banner extends React.Component<BannerProps> {}

declare namespace Banner {
    const simulatorId: string;
}

export = Banner;
