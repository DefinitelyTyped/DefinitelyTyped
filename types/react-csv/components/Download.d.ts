import { Component } from "react";
import { CommonPropTypes } from "./CommonPropTypes";

export interface DownloadPropTypes extends CommonPropTypes {
    target?: string;
}

export default class Download extends Component<DownloadPropTypes> {
}
