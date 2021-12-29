import { ButtonView, View, ViewCollection } from "@ckeditor/ckeditor5-ui";

export default class CharacterGridView extends View {
    tiles: ViewCollection;

    createTile(character: string, name: string): ButtonView;
}
