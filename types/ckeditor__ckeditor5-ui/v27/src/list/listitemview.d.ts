import View from "../view";
import ViewCollection from "../viewcollection";

export default class ListItemView extends View {
    readonly children: ViewCollection;
    focus(): void;
}
