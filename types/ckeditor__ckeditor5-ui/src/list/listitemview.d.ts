import View from "../view";
import ViewCollection from "../viewcollection";

export default class ListItemView<T = View> extends View {
    readonly children: ViewCollection<T extends View ? T : never>;
    focus(): void;
}
