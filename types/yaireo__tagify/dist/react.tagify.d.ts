import Tagify = require('@yaireo/tagify');

import {
    AddEventData,
    BaseTagData,
    BlurEventData,
    ChangeEventData,
    ClickEventData,
    DropDownHideEventData,
    DropDownNoMatchEventData,
    DropDownScrollEventData,
    DropDownSelectEventData,
    DropDownShowEventData,
    DropDownUpdatedEventData,
    EditBeforeUpdateEventData,
    EditKeydownEventData,
    EditInputEventData,
    EditStartEventData,
    EditUpdatedEventData,
    FocusEventData,
    InputEventData,
    InvalidTagEventData,
    KeydownEventData,
    RemoveEventData,
    TagData,
    TagifySettings,
} from '@yaireo/tagify';

import { MutableRefObject, ReactElement } from 'react';

declare namespace Tags {
    /**
     * Possible values for the {@link TagifyBaseReactProps.InputMode} setting.
     * - `input` - renders an HTML INPUT element
     * - `textarea` - renders an HTML TEXTAREA element and switch tagify to mixed
     * mode
     */
    type InputMode = 'input' | 'textarea';

    /**
     * Base react props that for both the {@link Tags} and {@link MixedTags}
     * react wrapper component for tagify.
     * @template T Type of the tag data used by the tagify instance. Must
     * contain at least a `value` property. Defaults to {@link TagData}, which
     * allows arbitrary properties. To enjoy more type safety, extend from
     * {@link BaseTagData},specify the allowed properties and use that as the
     * type parameter.
     */
    interface TagifyBaseReactProps<T extends BaseTagData = TagData> {
        /**
         * Should the component have focus on mount. Must be unique, per-page.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default undefined
         */
        autoFocus?: boolean | undefined;

        /**
         * Initial value, i.e. the initial tags that are shown.
         * @deprecated Specify the tags via the `value` property.
         */
        children?: string | string[] | undefined;

        /**
         * Optional class name to be added to the component.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default undefined
         */
        className?: string | undefined;

        /**
         * Same as `value`. Initial value, i.e. the initial tags that are shown.
         * Can be either a string separated by the delimiter set in the
         * settings, an array of tag values, or an array of tag items.
         *
         * This property can be updated, i.e. setting this to a different value
         * after the initial render will update the tagify editor
         * correspondingly.
         * @default undefined
         */
        defaultValue?: string | string[] | T[] | undefined;

        /**
         * Toggles loading state for the whole component.
         *
         * This property can be updated, i.e. setting this to a different value
         * after the initial render will update the tagify editor
         * correspondingly.
         * @default false
         */
        loading?: boolean | undefined;

        /**
         * Value for the `name` attribute of the `INPUT` or `TEXTAREA` element.
         *
         * This property can be updated, i.e. setting this to a different value
         * after the initial render will update the tagify editor
         * correspondingly.
         * @default undefined
         */
        name?: string | undefined;

        /**
         * Callback invoked when a tag has been added.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onAdd?: ((event: CustomEvent<AddEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when the component lost focus.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onBlur?: ((event: CustomEvent<BlurEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when any change to the value has occurred.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onChange?: ((event: CustomEvent<ChangeEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when a tag was clicked.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onClick?: ((event: CustomEvent<ClickEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when the suggestions dropdown has been removed from
         * the DOM.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onDropdownHide?: ((event: CustomEvent<DropDownHideEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when no whitelist suggestion item matched for the
         * typed input. At this point it is possible to manually set
         * `suggestedListItems` to any possible custom value, for example:
         * `[{ value:"default" }]`.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onDropdownNoMatch?: ((event: CustomEvent<DropDownNoMatchEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when the dropdown was scrolled by the user. Use
         * `event.detail.percentage` to get the percentage scrolled.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onDropdownScroll?: ((event: CustomEvent<DropDownScrollEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when a suggestions dropdown item was selected (by
         * mouse / keyboard / touch).
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onDropdownSelect?: ((event: CustomEvent<DropDownSelectEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when the suggestions dropdown is about to be
         * rendered. The dropdown DOM node is passed to the callback.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onDropdownShow?: ((event: CustomEvent<DropDownShowEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when the dropdown menu is open and its items were
         * recomputed via `Tagify.refilter`.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onDropdownUpdated?: ((event: CustomEvent<DropDownUpdatedEventData<T>>) => void) | undefined;

        /**
         * Callback invoked just before a tag has been updated, while still in
         * "edit" mode.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onEditBeforeUpdate?: ((event: CustomEvent<EditBeforeUpdateEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when typing inside an edited tag.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onEditInput?: ((event: CustomEvent<EditInputEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when a keydown event occurs while an edited tag is
         * in focus.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onEditKeydown?: ((event: CustomEvent<EditKeydownEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when a tag is now in "edit mode".
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onEditStart?: ((event: CustomEvent<EditStartEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when a tag has been updated (changed view editing or
         * by directly calling the `replaceTag` method).
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onEditUpdated?: ((event: CustomEvent<EditUpdatedEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when the component gained focus.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onFocus?: ((event: CustomEvent<FocusEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when a tag is being typed / edited.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onInput?: ((event: CustomEvent<InputEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when a tag has been added but did not pass
         * validation.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onInvalid?: ((event: CustomEvent<InvalidTagEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when the tagify input element (for adding new tags
         * or editing existing tags) has focus and a key was pressed.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onKeydown?: ((event: CustomEvent<KeydownEventData<T>>) => void) | undefined;

        /**
         * Callback invoked when a tag has been removed.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default () => {}
         */
        onRemove?: ((event: CustomEvent<RemoveEventData<T>>) => void) | undefined;

        /**
         * Placeholder text for input where the user can enter more tags.
         *
         * This property can be updated, i.e. setting this to a different value
         * after the initial render will update the tagify editor
         * correspondingly.
         * @default ''
         */
        placeholder?: string | undefined;

        /**
         * Toggles read-only state. When the tagify component is read-only, the user
         * cannot add, edit, or remove tags.
         *
         * This property can be updated, i.e. setting this to a different value
         * after the initial render will update the tagify editor
         * correspondingly.
         * @default undefined
         */
        readOnly?: boolean | undefined;

        /**
         * Settings for the tagify component.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default {}
         */
        settings?: TagifySettings<T> | undefined;

        /**
         * If `false`, does not show the suggestions dropdown. If `true`, shows
         * the suggestions dropdown. If a string, shows the dropdown
         * pre-filtered.
         *
         * This property can be updated, i.e. setting this to a different value
         * after the initial render will update the tagify editor
         * correspondingly.
         * @default undefined
         */
        showDropdown?: string | boolean | undefined;

        /**
         * An optional react ref that will be populated with the Tagify
         * instance. use this when you need to access methods on the Tagify
         * instance.
         *
         * ```javascript
         * const ref = React.useRef();
         * <Tags tagifyRef={ref} {...otherProps} />
         * ```
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default undefined
         */
        tagifyRef?: MutableRefObject<Tagify<T> | undefined> | undefined;

        /**
         * Same as `defaultValue`. Initial value, i.e. the initial tags that are
         * shown. Can be either a string separated by the delimiter set in the
         * settings, an array of tag values, or an array of tag items.
         *
         * This property can be updated, i.e. setting this to a different value
         * after the initial render will update the tagify editor
         * correspondingly.
         * @default ''
         */
        value?: string | string[] | T[] | undefined;

        /**
         * Sets the whitelist which is the basis for the suggestions dropdown
         * & autocomplete.
         *
         * This property can be updated, i.e. setting this to a different value
         * after the initial render will update the tagify editor
         * correspondingly.
         * @default undefined
         */
        whitelist?: string[] | T[] | undefined;
    }

    interface TagifyTagsReactProps<T extends BaseTagData = TagData> extends TagifyBaseReactProps<T> {
        /**
         * `textarea` will create a TEXTAREA (hidden) element instead of the
         * default INPUT element and automatically make Tagify act as
         * `mix mode`.
         *
         * This property __cannot be updated__, i.e. setting this to a different
         * value after the initial render is not supported.
         * @default 'input'
         */
        InputMode?: InputMode | undefined;
    }

    /**
     * Optional react props that can be passed to the {@link Tags} react wrapper
     * component for tagify.
     * @template T Type of the tag data used by the tagify instance. Must
     * contain at least a `value` property. Defaults to {@link TagData}, which
     * allows arbitrary properties. To enjoy more type safety, extend from
     * {@link BaseTagData},specify the allowed properties and use that as the
     * type parameter.
     */
    interface TagifyMixedTagsReactProps<T extends BaseTagData = TagData> extends TagifyBaseReactProps<T> {
    }

    /**
     * React wrapper component that renders a tagify editor in mixed-mode. This
     * is a shortcut for the `<Tags InputMode="textarea" />`.
     * @param props Optional properties for configuring the tagify editor.
     * @returns The rendered React tagify element.
     */
    // Type parameter is used more than once within the TagifyMixedTagsReactProps interface
    // tslint:disable-next-line no-unnecessary-generics
    function MixedTags<T extends BaseTagData = TagData>(props: TagifyMixedTagsReactProps<T>): ReactElement;
}

/**
 * React wrapper component for the tagify tags editor.
 * @param props Optional properties for configuring the tagify editor. Please
 * note that only some of these properties can be updated (changed after the
 * initial rendering), see the individual properties in
 * {@link Tags.TagifyTagsReactProps} for more details.
 * @returns The rendered React tagify element.
 */
// Type parameter is used more than once within the TagifyTagsReactProps interface
// tslint:disable-next-line no-unnecessary-generics
declare function Tags<T extends BaseTagData = TagData>(props: Tags.TagifyTagsReactProps<T>): ReactElement;

export = Tags;
