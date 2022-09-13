import * as React from 'react';
import Tagify = require('@yaireo/tagify');
import { BaseTagData, ChangeEventData, EventData, TagifySettings } from '@yaireo/tagify';
import Tags = require('@yaireo/tagify/dist/react.tagify');
import { MixedTags, TagifyTagsReactProps } from '@yaireo/tagify/dist/react.tagify';

// Tests the minimal required attribute for the Tags component
export function TestTagsMinimal(): React.ReactElement {
    return (<div>
        <Tags />
    </div>);
}

// Tests the autoFocus prop of the Tags component
export function TestTagsAutoFocus(): React.ReactElement {
    return (<div>
        <Tags autoFocus={true} />
        <Tags autoFocus={false} />
    </div>);
}

// Tests the children prop of the Tags component
export function TestTagsChildren(): React.ReactElement {
    return (<div>
        <Tags>a,b,c</Tags>
        <Tags>{["a", "b", "c"]}</Tags>
        {
            // @ts-expect-error
            <Tags><span>a</span></Tags>
        }
        {
            // @ts-expect-error
            <Tags>{{ foo: 'bar' }}</Tags>
        }
    </div>);
}

// Tests the className prop of the Tags component
export function TestTagsClassName(): React.ReactElement {
    return (<div>
        <Tags className='my-awesome-tagify' />
    </div>);
}

// Tests the defaultValue prop of the Tags component
export function TestTagsDefaultValue(): React.ReactElement {
    return (<div>
        <Tags defaultValue="a,b,c" />
        <Tags defaultValue={['a', 'b', 'c']} />
        <Tags defaultValue={[{ value: 'a' }, { value: 'b' }, { value: 'c' }]} />
    </div>);
}

// Tests the possible values for the InputMode prop
export function TestTagsInputMode(): React.ReactElement {
    return (<div>
        <Tags InputMode='input' />
        <Tags InputMode='textarea' />
        {
            // @ts-expect-error
            <Tags InputMode='select' />
        }
    </div>);
}

// Tests the loading prop of the Tags component
export function TestTagsLoading(): React.ReactElement {
    return (<div>
        <Tags loading={true} />
        <Tags loading={false} />
    </div>);
}

// Tests the name prop of the Tags component
export function TestTagsName(): React.ReactElement {
    return (<div>
        <Tags name='emails' />
    </div>);
}

// Tests the on... callback props of the Tags component
export function TestTagsOnCallbacks(): React.ReactElement {
    return (<div>
        <Tags
            onAdd={e => {
                // $ExpectType AddEventData<TagData>
                e.detail;
            }}
            onBlur={e => {
                // $ExpectType BlurEventData<TagData>
                e.detail;
            }}
            onChange={e => {
                // $ExpectType ChangeEventData<TagData>
                e.detail;
            }}
            onClick={e => {
                // $ExpectType ClickEventData<TagData>
                e.detail;
            }}
            onDropdownHide={e => {
                // $ExpectType DropDownHideEventData<TagData>
                e.detail;
            }}
            onDropdownNoMatch={e => {
                // $ExpectType DropDownNoMatchEventData<TagData>
                e.detail;
            }}
            onDropdownScroll={e => {
                // $ExpectType DropDownScrollEventData<TagData>
                e.detail;
            }}
            onDropdownSelect={e => {
                // $ExpectType DropDownSelectEventData<TagData>
                e.detail;
            }}
            onDropdownShow={e => {
                // $ExpectType DropDownShowEventData<TagData>
                e.detail;
            }}
            onDropdownUpdated={e => {
                // $ExpectType DropDownUpdatedEventData<TagData>
                e.detail;
            }}
            onEditBeforeUpdate={e => {
                // $ExpectType EditBeforeUpdateEventData<TagData>
                e.detail;
            }}
            onEditInput={e => {
                // $ExpectType EditInputEventData<TagData>
                e.detail;
            }}
            onEditKeydown={e => {
                // $ExpectType EditKeydownEventData<TagData>
                e.detail;
            }}
            onEditStart={e => {
                // $ExpectType EditStartEventData<TagData>
                e.detail;
            }}
            onEditUpdated={e => {
                // $ExpectType EditUpdatedEventData<TagData>
                e.detail;
            }}
            onFocus={e => {
                // $ExpectType FocusEventData<TagData>
                e.detail;
            }}
            onInput={e => {
                // $ExpectType InputEventData<TagData>
                e.detail;
            }}
            onInvalid={e => {
                // $ExpectType InvalidTagEventData<TagData>
                e.detail;
            }}
            onKeydown={e => {
                // $ExpectType KeydownEventData<TagData>
                e.detail;
            }}
            onRemove={e => {
                // $ExpectType RemoveEventData<TagData>
                e.detail;
            }}
        />
    </div>);
}

// Tests the placeholder prop of the Tags component
export function TestTagsPlaceholder(): React.ReactElement {
    return (<div>
        <Tags placeholder='Enter more emails here...' />
    </div>);
}

// Tests the readOnly prop of the Tags component
export function TestTagsReadOnly(): React.ReactElement {
    return (<div>
        <Tags readOnly={false} />
        <Tags readOnly={true} />
    </div>);
}

// Tests the settings prop of the Tags component
export function TestTagsSettings(): React.ReactElement {
    return (<div>
        <Tags showDropdown={false} />
        <Tags showDropdown={true} />
        <Tags showDropdown="a,b" />
    </div>);
}

// Tests the showDropdown prop of the Tags component
declare const settings: TagifySettings;
export function TestTagsShowDropdown(): React.ReactElement {
    return (<div>
        <Tags settings={{}} />
        <Tags settings={{ maxTags: 10, pattern: /\w+/ }} />
        <Tags settings={settings} />
    </div>);
}

// Tests that a reference to the tagify instance can be obtained via the tagifyRef prop
export function TestTagsTagifyRef(): React.ReactElement {
    const ref = React.useRef<Tagify>();
    return (<div>
        <Tags tagifyRef={ref} />
    </div>);
}

// Tests that the value prop can be passed to tagify
// Can be either a string with tags, an array of string, or an array of tag data
export function TestTagsValue(): React.ReactElement {
    return (<div>
        <Tags value='a,b,c' />
        <Tags value={['a', 'b', 'c']} />
        <Tags value={[{ value: 'a' }, { value: 'b' }, { value: 'c' }]} />
    </div>);
}

// Tests the whitelist prop of the Tags component
// Can be either a string of tag values, or an array of tag data
export function TestTagsWhitelist(): React.ReactElement {
    return (<div>
        <Tags whitelist={['a', 'b', 'c']} />
        <Tags whitelist={[{ value: 'a' }, { value: 'b' }, { value: 'c' }]} />
    </div>);
}

// Tests that the Tags component can be parameterized with a type param that
// corresponds to the type of tag data used by the component
interface ValueTagData extends BaseTagData {
    name: string;
    age: number;
}
export function TestTagsTypeParam(): React.ReactElement {
    const John: ValueTagData = { age: 12, name: 'John', value: 'p123' };
    const Mary = { age: 18, name: 'Mary', value: 'p843' };
    const Odo = { age: 341, name: 'Odo', value: 'p354' };
    const InvalidTag: Partial<ValueTagData> = { name: '', value: '' };
    return (<div>
        <Tags<ValueTagData>
            defaultValue={[John]}
            onAdd={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onBlur={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onChange={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onClick={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onDropdownHide={e => {
                // $ExpectType DropDownHideEventData<ValueTagData>
                e.detail;
            }}
            onDropdownNoMatch={e => {
                // $ExpectType DropDownNoMatchEventData<ValueTagData>
                e.detail;
            }}
            onDropdownScroll={e => {
                // $ExpectType DropDownScrollEventData<ValueTagData>
                e.detail;
            }}
            onDropdownSelect={e => {
                // $ExpectType DropDownSelectEventData<ValueTagData>
                e.detail;
            }}
            onDropdownShow={e => {
                // $ExpectType DropDownShowEventData<ValueTagData>
                e.detail;
            }}
            onDropdownUpdated={e => {
                // $ExpectType DropDownUpdatedEventData<ValueTagData>
                e.detail;
            }}
            onEditBeforeUpdate={e => {
                // $ExpectType EditBeforeUpdateEventData<ValueTagData>
                e.detail;
            }}
            onEditInput={e => {
                // $ExpectType EditInputEventData<ValueTagData>
                e.detail;
            }}
            onEditKeydown={e => {
                // $ExpectType EditKeydownEventData<ValueTagData>
                e.detail;
            }}
            onEditStart={e => {
                // $ExpectType EditStartEventData<ValueTagData>
                e.detail;
            }}
            onEditUpdated={e => {
                // $ExpectType EditUpdatedEventData<ValueTagData>
                e.detail;
            }}
            onFocus={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onInput={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onInvalid={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onKeydown={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onRemove={e => {
                // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            value={[John]}
            whitelist={[John, Mary, Odo]}
        />
        {
            // @ts-expect-error
            <Tags<ValueTagData> defaultValue={[InvalidTag]} />
        }
        {
            // @ts-expect-error
            <Tags<ValueTagData> value={[InvalidTag]} />
        }
        {
            // @ts-expect-error
            <Tags<ValueTagData> whitelist={[InvalidTag]} />
        }
    </div>);
}

// Tests the minimal required attribute for the MixedTags component
export function TestMixedTagsMinimal(): React.ReactElement {
    return (<div>
        <MixedTags />
    </div>);
}

// Tests the autoFocus prop of the MixedTags component
export function TestMixedTagsAutoFocus(): React.ReactElement {
    return (<div>
        <MixedTags autoFocus={true} />
        <MixedTags autoFocus={false} />
    </div>);
}

// Tests the children prop of the MixedTags component
export function TestMixedTagsChildren(): React.ReactElement {
    return (<div>
        <Tags>a,b,c</Tags>
        <Tags>{["a", "b", "c"]}</Tags>
        {
            // @ts-expect-error
            <Tags><span>a</span></Tags>
        }
        {
            // @ts-expect-error
            <Tags>{{ foo: 'bar' }}</Tags>
        }
    </div>);
}

// Tests the className prop of the MixedTags component
export function TestMixedTagsClassName(): React.ReactElement {
    return (<div>
        <MixedTags className='my-awesome-tagify' />
    </div>);
}

// Tests the defaultValue prop of the MixedTags component
export function TestMixedTagsDefaultValue(): React.ReactElement {
    return (<div>
        <MixedTags defaultValue="a,b,c" />
        <MixedTags defaultValue={['a', 'b', 'c']} />
        <MixedTags defaultValue={[{ value: 'a' }, { value: 'b' }, { value: 'c' }]} />
    </div>);
}

// Tests the loading prop of the MixedTags component
export function TestMixedTagsLoading(): React.ReactElement {
    return (<div>
        <MixedTags loading={true} />
        <MixedTags loading={false} />
    </div>);
}

// Tests the name prop of the MixedTags component
export function TestMixedTagsName(): React.ReactElement {
    return (<div>
        <MixedTags name='emails' />
    </div>);
}

// Tests the on... callback props of the MixedTags component
export function TestMixedTagsOnCallbacks(): React.ReactElement {
    return (<div>
        <Tags
            onAdd={e => {
                // // $ExpectType AddEventData<TagData>
                e.detail;
            }}
            onBlur={e => {
                // // $ExpectType BlurEventData<TagData>
                e.detail;
            }}
            onChange={e => {
                // // $ExpectType ChangeEventData<TagData>
                e.detail;
            }}
            onClick={e => {
                // // $ExpectType ClickEventData<TagData>
                e.detail;
            }}
            onDropdownHide={e => {
                // $ExpectType DropDownHideEventData<TagData>
                e.detail;
            }}
            onDropdownNoMatch={e => {
                // $ExpectType DropDownNoMatchEventData<TagData>
                e.detail;
            }}
            onDropdownScroll={e => {
                // $ExpectType DropDownScrollEventData<TagData>
                e.detail;
            }}
            onDropdownSelect={e => {
                // $ExpectType DropDownSelectEventData<TagData>
                e.detail;
            }}
            onDropdownShow={e => {
                // $ExpectType DropDownShowEventData<TagData>
                e.detail;
            }}
            onDropdownUpdated={e => {
                // $ExpectType DropDownUpdatedEventData<TagData>
                e.detail;
            }}
            onEditBeforeUpdate={e => {
                // $ExpectType EditBeforeUpdateEventData<TagData>
                e.detail;
            }}
            onEditInput={e => {
                // $ExpectType EditInputEventData<TagData>
                e.detail;
            }}
            onEditKeydown={e => {
                // $ExpectType EditKeydownEventData<TagData>
                e.detail;
            }}
            onEditStart={e => {
                // $ExpectType EditStartEventData<TagData>
                e.detail;
            }}
            onEditUpdated={e => {
                // $ExpectType EditUpdatedEventData<TagData>
                e.detail;
            }}
            onFocus={e => {
                // // $ExpectType FocusEventData<TagData>
                e.detail;
            }}
            onInput={e => {
                // // $ExpectType InputEventData<TagData>
                e.detail;
            }}
            onInvalid={e => {
                // // $ExpectType InvalidTagEventData<TagData>
                e.detail;
            }}
            onKeydown={e => {
                // // $ExpectType KeydownEventData<TagData>
                e.detail;
            }}
            onRemove={e => {
                // // $ExpectType RemoveEventData<TagData>
                e.detail;
            }}
        />
    </div>);
}

// Tests the placeholder prop of the MixedTags component
export function TestMixedTagsPlaceholder(): React.ReactElement {
    return (<div>
        <MixedTags placeholder='Enter more emails here...' />
    </div>);
}

// Tests the readOnly prop of the MixedTags component
export function TestMixedTagsReadOnly(): React.ReactElement {
    return (<div>
        <MixedTags readOnly={false} />
        <MixedTags readOnly={true} />
    </div>);
}

// Tests the settings prop of the MixedTags component
export function TestMixedTagsSettings(): React.ReactElement {
    return (<div>
        <MixedTags showDropdown={false} />
        <MixedTags showDropdown={true} />
        <MixedTags showDropdown="a,b" />
    </div>);
}

// Tests the showDropdown prop of the MixedTags component
export function TestMixedTagsShowDropdown(): React.ReactElement {
    return (<div>
        <MixedTags settings={{}} />
        <MixedTags settings={{ maxTags: 10, pattern: /\w+/ }} />
        <MixedTags settings={settings} />
    </div>);
}

// Tests that a reference to the tagify instance can be obtained via the tagifyRef prop
export function TestMixedTagsTagifyRef(): React.ReactElement {
    const ref = React.useRef<Tagify>();
    return (<div>
        <MixedTags tagifyRef={ref} />
    </div>);
}

// Tests that the value prop can be passed to tagify
// Can be either a string with tags, an array of string, or an array of tag data
export function TestMixedTagsValue(): React.ReactElement {
    return (<div>
        <MixedTags value='a,b,c' />
        <MixedTags value={['a', 'b', 'c']} />
        <MixedTags value={[{ value: 'a' }, { value: 'b' }, { value: 'c' }]} />
    </div>);
}

// Tests the whitelist prop of the MixedTags component
// Can be either a string of tag values, or an array of tag data
export function TestMixedTagsWhitelist(): React.ReactElement {
    return (<div>
        <MixedTags whitelist={['a', 'b', 'c']} />
        <MixedTags whitelist={[{ value: 'a' }, { value: 'b' }, { value: 'c' }]} />
    </div>);
}

// Tests that the MixedTags component can be parameterized with a type param that
// corresponds to the type of tag data used by the component
interface ValueTagData extends BaseTagData {
    name: string;
    age: number;
}
export function TestMixedTagsTypeParam(): React.ReactElement {
    const John: ValueTagData = { age: 12, name: 'John', value: 'p123' };
    const Mary = { age: 18, name: 'Mary', value: 'p843' };
    const Odo = { age: 341, name: 'Odo', value: 'p354' };
    const InvalidTag: Partial<ValueTagData> = { name: '', value: '' };
    return (<div>
        <Tags<ValueTagData>
            onAdd={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onBlur={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onChange={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onClick={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onDropdownHide={e => {
                // $ExpectType DropDownHideEventData<ValueTagData>
                e.detail;
            }}
            onDropdownNoMatch={e => {
                // $ExpectType DropDownNoMatchEventData<ValueTagData>
                e.detail;
            }}
            onDropdownScroll={e => {
                // $ExpectType DropDownScrollEventData<ValueTagData>
                e.detail;
            }}
            onDropdownSelect={e => {
                // $ExpectType DropDownSelectEventData<ValueTagData>
                e.detail;
            }}
            onDropdownShow={e => {
                // $ExpectType DropDownShowEventData<ValueTagData>
                e.detail;
            }}
            onDropdownUpdated={e => {
                // $ExpectType DropDownUpdatedEventData<ValueTagData>
                e.detail;
            }}
            onEditBeforeUpdate={e => {
                // $ExpectType EditBeforeUpdateEventData<ValueTagData>
                e.detail;
            }}
            onEditInput={e => {
                // $ExpectType EditInputEventData<ValueTagData>
                e.detail;
            }}
            onEditKeydown={e => {
                // $ExpectType EditKeydownEventData<ValueTagData>
                e.detail;
            }}
            onEditStart={e => {
                // $ExpectType EditStartEventData<ValueTagData>
                e.detail;
            }}
            onEditUpdated={e => {
                // $ExpectType EditUpdatedEventData<ValueTagData>
                e.detail;
            }}
            onFocus={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onInput={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onInvalid={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onKeydown={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            onRemove={e => {
                // // $ExpectType ValueTagData[]
                e.detail.tagify.value;
            }}
            value={[John]}
            whitelist={[John, Mary, Odo]}
        />
        {
            // @ts-expect-error
            <Tags<ValueTagData> value={[John]} whitelist={[InvalidTag]} />
        }
    </div>);
}

// Test that InputMode cannot be specified on the MixedTags component
export function TestMixedTagsNoInputMode(): React.ReactElement {
    return (<div>
        {
            // @ts-expect-error
            <MixedTags InputMode='textarea' />
        }
    </div>);
}

// Taken from the official example for the react wrapper
// https://codesandbox.io/s/tagify-react-wrapper-oempc

const baseTagifySettings: TagifySettings = {
    blacklist: ['xxx', 'yyy', 'zzz'],
    maxTags: 6,
    // backspace: 'edit',
    placeholder: 'type something',
    dropdown: {
        enabled: 0 // a;ways show suggestions dropdown
    },
};

// this example callback is used for all Tagify events
const callback = (e: CustomEvent<EventData>) =>
    console.log(`%c ${e.type}: `, 'background:#222; color:#bada55', e.detail);

// callbacks props (for this demo, the same callback reference is assigned to every event type)
const tagifyCallbacks: TagifySettings['callbacks'] = {
    add: callback,
    remove: callback,
    input: callback,
    invalid: callback,
    click: callback,
    keydown: callback,
    focus: callback,
    blur: callback,
    'edit:input': callback,
    'edit:updated': callback,
    'edit:start': callback,
    'edit:keydown': callback,
    'dropdown:show': callback,
    'dropdown:hide': callback,
    'dropdown:select': callback,
};

// this is an example React component which implements Tagify within
// itself. This example is a bit elaborate, to demonstrate what's possible.

declare function getWhitelistFromServer(duration: number): Promise<string>;
declare function getValue(duration: number): Promise<string>;

export const CrazyTags = () => {
    const tagifyRef = React.useRef<Tagify>();
    // just a name I made up for allowing dynamic changes for tagify settings on this component
    const [tagifySettings, setTagifySettings] = React.useState<TagifySettings>({});
    const [tagifyProps, setTagifyProps] = React.useState<TagifyTagsReactProps>({});

    // on component mount
    React.useEffect(() => {
        setTagifyProps({ loading: true });

        getWhitelistFromServer(2000).then((response) => {
            setTagifyProps((lastProps) => ({
                ...lastProps,
                whitelist: response.split(','),
                showDropdown: 'a',
                loading: false
            }));
        });

        // simulate setting tags value via server request
        getValue(3000).then((response) =>
            setTagifyProps((lastProps) => ({ ...lastProps, value: response }))
        );

        // simulated state change where some tags were deleted
        setTimeout(
            () =>
                setTagifyProps((lastProps) => ({
                    ...lastProps,
                    value: ['abc'],
                    showDropdown: false
                })),
            5000
        );
    }, []);

    // merged tagify settings (static & dynamic)
    const settings: TagifySettings = {
        ...baseTagifySettings,
        ...tagifySettings,
        callbacks: tagifyCallbacks
    };

    const onChange = React.useCallback((e: CustomEvent<ChangeEventData>) => {
        if (e.target instanceof HTMLInputElement) {
            console.log('CHANGED:', e.target.value);
        }
    }, []);

    // access Tagify internal methods example:
    const clearAll = () => {
        tagifyRef.current && tagifyRef.current.removeAllTags();
    };

    return (
        <>
            <h2>
                <em>Crazy</em> Tags:
        </h2>
            <p>
                Wait a <em>few seconds</em> to see things happen. <br />
                <small>
                    <em>(Carefully examine the source-code)</em>
                </small>
            </p>
            <button className='clearAllBtn' onClick={clearAll}>
                Clear All
        </button>
            <Tags
                tagifyRef={tagifyRef}
                settings={settings}
                value='a,b,c'
                autoFocus={true}
                {...tagifyProps}
                onChange={onChange}
            />
            <h2>Readonly tags:</h2>
            <Tags value='foo,bar' readOnly />
        </>
    );
};
