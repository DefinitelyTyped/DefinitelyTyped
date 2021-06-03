import { Button } from "../../button/button";
import ButtonView from "../../button/buttonview";
import IconView from "../../icon/iconview";
import { DropdownButton } from "./dropdownbutton";

export default class DropdownButtonView extends ButtonView implements DropdownButton, Button {
    readonly arrowView: IconView;
}
