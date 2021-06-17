import { Plugin } from "@ckeditor/ckeditor5-core";
import BalloonPanelView from "../../panel/balloon/balloonpanelview";
import ToolbarView from "../toolbarview";
import BlockButtonView from "./blockbuttonview";

export default class BlockToolbar extends Plugin {
    buttonView: BlockButtonView;
    panelView: BalloonPanelView;
    toolbarView: ToolbarView;
}
