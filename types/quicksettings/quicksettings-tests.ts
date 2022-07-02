import QuickSettings, { AnyModel, DropDownSelection } from 'quicksettings';

/**
 * QuickSettings module tests
 * Verify validity of typings for the exported module
 */

// QuickSettings.create
QuickSettings.create(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
QuickSettings.create(100); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
QuickSettings.create(100, 200); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
QuickSettings.create(100, 200, 'Test Panel', document.createElement('div')); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>

// QuickSettings.useExtStyleSheet
QuickSettings.useExtStyleSheet(); // $ExpectType void

// Test QuickSettingsPanel setup
interface TestModel {
    testString: string;
    testNumber: number;
    testBoolean: boolean;
    testDate: string | Date;
    testFile: File;
}

const testModelFull: TestModel = {
    testString: 'foo',
    testNumber: 10,
    testBoolean: true,
    testDate: new Date(),
    testFile: new File([], 'my-file.png'),
};

const qsAnyModel = QuickSettings.create();
const qsTestModel = QuickSettings.create<TestModel, 'testStatic'>();

/**
 * QuickSettingsPanel - Model independent methods
 * Verified the typings of methods that are independent of the model of a panel
 * e.g., saveInLocalStorage('name'), show(), hide() etc.
 *
 * Each method is tested with the `qsAnyModel` and `qsTestModel` and the return type
 * is asserted to be the concrete type of the QuickSettingsPane
 */

// QuickSettingsPanel.destroy
qsAnyModel.destroy(); // $ExpectType void
qsTestModel.destroy(); // $ExpectType void

// QuickSettingsPanel.saveInLocalStorage
qsAnyModel.saveInLocalStorage('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.saveInLocalStorage('foo'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.saveInLocalStorage
qsAnyModel.clearLocalStorage('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.clearLocalStorage('foo'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setPosition
qsAnyModel.setPosition(100, 100); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setPosition(100, 100); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setSize
qsAnyModel.setSize(100, 100); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setSize(100, 100); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setWidth
qsAnyModel.setWidth(100); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setWidth(100); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setHeight
qsAnyModel.setHeight(100); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setHeight(100); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setDraggable
qsAnyModel.setDraggable(true); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setDraggable(true); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.show
qsAnyModel.show(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.show(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.hide
qsAnyModel.hide(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.hide(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.toggleVisibility
qsAnyModel.toggleVisibility(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.toggleVisibility(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setCollapsible
qsAnyModel.setCollapsible(true); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setCollapsible(true); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.collapse
qsAnyModel.collapse(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.collapse(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.expand
qsAnyModel.expand(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.expand(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.toggleCollapsed
qsAnyModel.toggleCollapsed(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.toggleCollapsed(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setKey
qsAnyModel.setKey('h'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setKey('h'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.showAllTitle
qsAnyModel.showAllTitles(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.showAllTitles(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.showAllTitled
qsAnyModel.hideAllTitles(); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.hideAllTitles(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

/**
 * QuickSettingsPanel – Model mutation / retrieval / save methods
 * Verified the typings of methods related to settings / retrieving / saving
 * the model of a panel.
 *
 * All calls are performed on `qsAnyModel` and `qsTestModel` and the validity of
 * the passed in model data or properties is made sure.
 */

// QuickSettingsPanel.setGlobalChangeHandler
qsAnyModel.setGlobalChangeHandler((model: AnyModel) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.setGlobalChangeHandler((model: string) => {});
qsTestModel.setGlobalChangeHandler((model: TestModel) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// prettier-ignore
qsTestModel.setGlobalChangeHandler((model: { testNumber: number; testBoolean: boolean; testDate: string | Date }) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.setGlobalChangeHandler((model: { foo: string }) => {});

// QuickSettingsPanel.getValue
qsAnyModel.getValue('testString'); // $ExpectType any
qsTestModel.getValue('testString'); // $ExpectType string
qsTestModel.getValue('testNumber'); // $ExpectType number
qsTestModel.getValue('testDate'); // $ExpectType string | Date

// QuickSettingsPanel.setValue
qsAnyModel.setValue('testString', 'foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsAnyModel.setValue('testString', 10); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setValue('testString', 'foo'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.setValue('testString', 10);

// QuickSettingsPanel.getValueAsJSON
qsAnyModel.getValuesAsJSON(true); // $ExpectType string
qsAnyModel.getValuesAsJSON(false); // $ExpectType Record<string, any> || AnyModel
qsAnyModel.getValuesAsJSON(); // $ExpectType Record<string, any> || AnyModel
qsTestModel.getValuesAsJSON(true); // $ExpectType string
qsTestModel.getValuesAsJSON(false); // $ExpectType TestModel
qsTestModel.getValuesAsJSON(); // $ExpectType TestModel

// QuickSettingsPanel.setValuesFromJSON
qsAnyModel.setValuesFromJSON('{ "foo": "bar" }'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsAnyModel.setValuesFromJSON({ foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setValuesFromJSON('{ "foo": "bar" }'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.setValuesFromJSON({ foo: 'bar' });
qsTestModel.setValuesFromJSON(testModelFull); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

/**
 * QuickSettingsPanel – Field modification methods
 * Verifies the typings of methods relating to modifying fields like `enableControl('foo')`,
 * `hideTitle('foo')` or `overrideStyle('foo', 'color', '#fff')`. These methods typically
 * receive the name of a field.
 *
 * The methods are called on `qsAnyModel` with an arbitrary name and on `qsTestModel` with a
 * key from the model and another arbitrary key which should cause an error.
 */

// QuickSettingsPanel.removeControl
qsAnyModel.removeControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.removeControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.removeControl('foo');

// QuickSettingsPanel.enableControl
qsAnyModel.enableControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.enableControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.enableControl('foo');

// QuickSettingsPanel.disableControl
qsAnyModel.disableControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.disableControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.disableControl('foo');

// QuickSettingsPanel.hideControl
qsAnyModel.hideControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.hideControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.hideControl('foo');

// QuickSettingsPanel.showControl
qsAnyModel.showControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.showControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.showControl('foo');

// QuickSettingsPanel.overrideStyle
qsAnyModel.overrideStyle('foo', 'color', '#fff'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.overrideStyle('testString', 'color', '#fff'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.overrideStyle('foo', 'color', '#fff');

// QuickSettingsPanel.hideTitle
qsAnyModel.hideTitle('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.hideTitle('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.hideTitle('foo');

// QuickSettingsPanel.showTitle
qsAnyModel.showTitle('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.showTitle('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.showTitle('foo');

/**
 * QuickSettingsPanel – Field creation methods
 * Verified the typings of methods that add fields with a callback or by calling the
 * corresponding `bind` method to attach a field to an object.
 *
 * These methods are called on `qsAnyModel` and `qsModelTest` with the objectives of verifying that:
 * -  only keys from the model type are accepted whose type corresponds to
 *    the type of the field (e.g., `addText(title)` expects a title which is mapped to a string in the model)
 *    This does not apply to `qsAnyModel` where all keys are expected
 * -  the callbacks passed to `add` methods have the correct argument type for `value`
 * -  the `bind` methods expect an object to bind to which contains a property named after the `title` argument
 *    and has the type of the respective field (e.g. `bindText('foo', 'bar')` is expected to receive an object
 *    extending `{ foo: string; }`)
 */

// QuickSettingsPanel.addBoolean
qsAnyModel.addBoolean('foo', true, (value: boolean) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.addBoolean('foo', 10, (value: number) => {});

qsTestModel.addBoolean('testBoolean', true, (value: boolean) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addBoolean('foo', true, (value: boolean) => {});
// @ts-expect-error
qsTestModel.addBoolean('testNumber', true, (value: boolean) => {});
// @ts-expect-error
qsTestModel.addBoolean('testBoolean', 10, (value: number) => {});

// QuickSettingsPanel.bindBoolean
qsAnyModel.bindBoolean('foo', true, { foo: false }); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.bindBoolean('foo', true, { baz: false });
// @ts-expect-error
qsAnyModel.bindBoolean('foo', 10, { foo: 10 });

qsTestModel.bindBoolean('testBoolean', true, { testBoolean: false }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.bindBoolean('foo', true, { foo: false });
// @ts-expect-error
qsTestModel.bindBoolean('testBoolean', true, { foo: false });
// @ts-expect-error
qsTestModel.bindBoolean('testBoolean', 10, { testBoolean: 10 });

// QuickSettingsPanel.addText
qsAnyModel.addText('foo', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.addText('foo', 10, (value: number) => {});

qsTestModel.addText('testString', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addText('foo', 'bar', (value: string) => {});
// @ts-expect-error
qsTestModel.addText('testNumber', 'bar', (value: string) => {});
// @ts-expect-error
qsTestModel.addText('testString', 10, (value: number) => {});

// QuickSettingsPanel.bindText
qsAnyModel.bindText('foo', 'bar', { foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.bindText('foo', 'bar', { baz: 'bar' });
// @ts-expect-error
qsAnyModel.bindText('foo', 10, { foo: 10 });

qsTestModel.bindText('testString', 'bar', { testString: 'baz' }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.bindText('foo', 'bar', { baz: 'bar' });
// @ts-expect-error
qsTestModel.bindText('testString', 'bar', { foo: 'bar' });
// @ts-expect-error
qsTestModel.bindText('testString', 10, { testString: 10 });

// QuickSettingsPanel.addColor
qsAnyModel.addColor('foo', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.addColor('foo', 10, (value: number) => {});

qsTestModel.addColor('testString', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addColor('foo', 'bar', (value: string) => {});
// @ts-expect-error
qsTestModel.addColor('testNumber', 'bar', (value: string) => {});
// @ts-expect-error
qsTestModel.addColor('testString', 10, (value: number) => {});

// QuickSettingsPanel.bindColor
qsAnyModel.bindColor('foo', 'bar', { foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.bindColor('foo', 'bar', { baz: 'bar' });
// @ts-expect-error
qsAnyModel.bindColor('foo', 10, { foo: 10 });

qsTestModel.bindColor('testString', 'bar', { testString: 'baz' }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.bindColor('foo', 'bar', { baz: 'bar' });
// @ts-expect-error
qsTestModel.bindColor('testString', 'bar', { foo: 'bar' });
// @ts-expect-error
qsTestModel.bindColor('testString', 10, { testString: 10 });

// QuickSettingsPanel.addPassword
qsAnyModel.addPassword('foo', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.addPassword('foo', 10, (value: number) => {});

qsTestModel.addPassword('testString', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addPassword('foo', 'bar', (value: string) => {});
// @ts-expect-error
qsTestModel.addPassword('testNumber', 'bar', (value: string) => {});
// @ts-expect-error
qsTestModel.addPassword('testString', 10, (value: number) => {});

// QuickSettingsPanel.bindPassword
qsAnyModel.bindPassword('foo', 'bar', { foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.bindPassword('foo', 'bar', { baz: 'bar' });
// @ts-expect-error
qsAnyModel.bindPassword('foo', 10, { foo: 10 });

qsTestModel.bindPassword('testString', 'bar', { testString: 'baz' }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.bindPassword('foo', 'bar', { baz: 'bar' });
// @ts-expect-error
qsTestModel.bindPassword('testString', 'bar', { foo: 'bar' });
// @ts-expect-error
qsTestModel.bindPassword('testString', 10, { testString: 10 });

// QuickSettingsPanel.addProgressBar
qsAnyModel.addProgressBar('foo', 100, 10); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsAnyModel.addProgressBar('foo', 100, 10, 'numbers'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>

// QuickSettingsPanel.addTextArea
qsAnyModel.addTextArea('foo', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.addTextArea('foo', 10, (value: number) => {});

qsTestModel.addTextArea('testString', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addTextArea('foo', 'bar', (value: string) => {});
// @ts-expect-error
qsTestModel.addTextArea('testNumber', 'bar', (value: string) => {});
// @ts-expect-error
qsTestModel.addTextArea('testString', 10, (value: number) => {});

// QuickSettingsPanel.bindTextArea
qsAnyModel.bindTextArea('foo', 'bar', { foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.bindTextArea('foo', 'bar', { baz: 'bar' });
// @ts-expect-error
qsAnyModel.bindTextArea('foo', 10, { foo: 10 });

qsTestModel.bindTextArea('testString', 'bar', { testString: 'baz' }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.bindTextArea('foo', 'bar', { baz: 'bar' });
// @ts-expect-error
qsTestModel.bindTextArea('testString', 'bar', { foo: 'bar' });
// @ts-expect-error
qsTestModel.bindTextArea('testString', 10, { testString: 10 });

// QuickSettingsPanel.setTextAreaRows
qsAnyModel.setTextAreaRows('foo', 10); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setTextAreaRows('testString', 10); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.setTextAreaRows('foo', 10);

// QuickSettingsPanel.addNumber
qsAnyModel.addNumber('foo', 0, 100, 10, 1, (value: number) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.addNumber('foo', 0, 100, 'foo', 1, (value: number) => {});

qsTestModel.addNumber('testNumber', 0, 100, 10, 1, (value: number) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addNumber('foo', 0, 100, 10, 1, (value: number) => {});
// @ts-expect-error
qsTestModel.addNumber('testString', 0, 100, 10, 1, (value: number) => {});
// @ts-expect-error
qsTestModel.addNumber('testNumber', 0, 100, '10', 1, (value: number) => {});

// QuickSettingsPanel.bindNumber
qsAnyModel.bindNumber('foo', 0, 100, 10, 1, { foo: 12 }); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.bindNumber('foo', 0, 100, 10, 1, { baz: 12 });
// @ts-expect-error
qsAnyModel.bindNumber('foo', 0, 100, 10, 1, { foo: '12' });

qsTestModel.bindNumber('testNumber', 0, 100, 10, 1, { testNumber: 12 }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.bindNumber('foo', 0, 100, 10, 1, { foo: 12 });
// @ts-expect-error
qsTestModel.bindNumber('testNumber', 0, 100, 10, 1, { foo: 12 });
// @ts-expect-error
qsTestModel.bindNumber('testNumber', 0, 100, 10, 1, { testNumber: '12' });

// QuickSettingsPanel.setNumberParameters
qsAnyModel.setNumberParameters('foo', 0, 100, 1); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setNumberParameters('testNumber', 0, 100, 1); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.setNumberParameters('foo', 0, 100, 1);

// QuickSettingsPanel.addRange
qsAnyModel.addRange('foo', 0, 100, 10, 1, (value: number) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.addRange('foo', 0, 100, 'foo', 1, (value: number) => {});

qsTestModel.addRange('testNumber', 0, 100, 10, 1, (value: number) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addRange('foo', 0, 100, 10, 1, (value: number) => {});
// @ts-expect-error
qsTestModel.addRange('testString', 0, 100, 10, 1, (value: number) => {});
// @ts-expect-error
qsTestModel.addRange('testNumber', 0, 100, '10', 1, (value: number) => {});

// QuickSettingsPanel.bindRange
qsAnyModel.bindRange('foo', 0, 100, 10, 1, { foo: 12 }); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
// @ts-expect-error
qsAnyModel.bindRange('foo', 0, 100, 10, 1, { baz: 12 });
// @ts-expect-error
qsAnyModel.bindRange('foo', 0, 100, 10, 1, { foo: '12' });

qsTestModel.bindRange('testNumber', 0, 100, 10, 1, { testNumber: 12 }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.bindRange('foo', 0, 100, 10, 1, { foo: 12 });
// @ts-expect-error
qsTestModel.bindRange('testNumber', 0, 100, 10, 1, { foo: 12 });
// @ts-expect-error
qsTestModel.bindRange('testNumber', 0, 100, 10, 1, { testNumber: '12' });

// QuickSettingsPanel.setRangeParameters
qsAnyModel.setRangeParameters('foo', 0, 100, 1); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.setRangeParameters('testNumber', 0, 100, 1); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.setRangeParameters('foo', 0, 100, 1);

// QuickSettingsPanel.addDate
{
    qsAnyModel.addDate('myDateProperty', '2019-12-30', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
    qsAnyModel.addDate('myDateProperty', new Date('2019-12-30'), (value: Date) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
    // @ts-expect-error
    qsAnyModel.addDate('myDateProperty', '2019-12-30', (value: Date) => {});
    // @ts-expect-error
    qsAnyModel.addDate('myDateProperty', new Date(), (value: string) => {});

    interface TestModelDate {
        testString: string;
        testDate: Date;
        testDateOrString: Date | string;
    }

    const qsTestModelDate = QuickSettings.create<TestModelDate>();
    qsTestModelDate.addDate('testString', '2019-12-30', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModelDate, string>
    // @ts-expect-error
    qsTestModelDate.addDate('testString', new Date('2019-12-30'), (value: Date) => {});
    // @ts-expect-error
    qsTestModelDate.addDate('testDate', '2019-12-30', (value: string) => {});
    qsTestModelDate.addDate('testDateOrString', '2019-12-30', (value: string) => {});
    qsTestModelDate.addDate('testDateOrString', new Date('2019-12-30'), (value: Date) => {});
    // @ts-expect-error
    qsTestModelDate.addDate('testDateOrString', new Date('2019-12-30'), (value: string) => {});
    // @ts-expect-error
    qsTestModelDate.addDate('testDateOrString', '2019-12-31', (value: Date) => {});
}

// QuickSettingsPanel.bindDate
{
    // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
    qsAnyModel.bindDate('myDateProperty', '2019-12-30', {
        myDateProperty: '2019-12-31',
    });

    // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
    qsAnyModel.bindDate('myDateProperty', new Date('2019-12-30'), {
        myDateProperty: new Date(),
    });

    // @ts-expect-error
    qsAnyModel.bindDate('myDateProperty', '2019-12-30', { myDateProperty: new Date() });

    // @ts-expect-error
    qsAnyModel.bindDate('myDateProperty', new Date(), { myDateProperty: '2019-12-31' });

    // @ts-expect-error
    qsAnyModel.bindDate('myDateProperty', new Date(), { foo: new Date() });

    interface TestModelDate {
        testString: string;
        testDate: Date;
        testDateOrString: Date | string;
    }

    const qsTestModelDate = QuickSettings.create<TestModelDate>();
    qsTestModelDate.bindDate('testString', '2019-12-30', {
        testString: '2019-12-31',
    });

    // @ts-expect-error
    qsTestModelDate.bindDate('testString', new Date('2019-12-30'), { testString: new Date() });

    // @ts-expect-error
    qsTestModelDate.bindDate('testDate', '2019-12-30', { testDate: '2019-12-30' });

    // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.bindDate('testDateOrString', '2019-12-30', { testDateOrString: '2019-12-31' });

    // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.bindDate('testDateOrString', new Date('2019-12-30'), { testDateOrString: new Date() });

    // @ts-expect-error
    qsTestModelDate.bindDate('testDateOrString', new Date('2019-12-30'), { testDateOrString: '2019-12-31' });

    // @ts-expect-error
    qsTestModelDate.bindDate('testDateOrString', '2019-12-31', { testDateOrString: new Date() });
}

// QuickSettingsPanel.addTime
{
    qsAnyModel.addTime('myDateProperty', '01:00:00', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
    qsAnyModel.addTime('myDateProperty', new Date('01:00:00'), (value: Date) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
    // @ts-expect-error
    qsAnyModel.addTime('myDateProperty', '01:00:00', (value: Date) => {});
    // @ts-expect-error
    qsAnyModel.addTime('myDateProperty', new Date(), (value: string) => {});

    interface TestModelDate {
        testString: string;
        testDate: Date;
        testDateOrString: Date | string;
    }

    const qsTestModelDate = QuickSettings.create<TestModelDate>();
    qsTestModelDate.addTime('testString', '01:00:00', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModelDate, string>
    // @ts-expect-error
    qsTestModelDate.addTime('testString', new Date('01:00:00'), (value: Date) => {});
    // @ts-expect-error
    qsTestModelDate.addTime('testDate', '01:00:00', (value: string) => {});
    qsTestModelDate.addTime('testDateOrString', '01:00:00', (value: string) => {});
    qsTestModelDate.addTime('testDateOrString', new Date('01:00:00'), (value: Date) => {});
    // @ts-expect-error
    qsTestModelDate.addTime('testDateOrString', new Date('01:00:00'), (value: string) => {});
    // @ts-expect-error
    qsTestModelDate.addTime('testDateOrString', '02:00:00', (value: Date) => {});
}

// QuickSettingsPanel.bindTime
{
    // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
    qsAnyModel.bindTime('myDateProperty', '01:00:00', {
        myDateProperty: '02:00:00',
    });

    // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
    qsAnyModel.bindTime('myDateProperty', new Date('01:00:00'), {
        myDateProperty: new Date(),
    });

    // @ts-expect-error
    qsAnyModel.bindTime('myDateProperty', '01:00:00', { myDateProperty: new Date() });

    // @ts-expect-error
    qsAnyModel.bindTime('myDateProperty', new Date(), { myDateProperty: '02:00:00' });

    // @ts-expect-error
    qsAnyModel.bindTime('myDateProperty', new Date(), { foo: new Date() });

    interface TestModelDate {
        testString: string;
        testDate: Date;
        testDateOrString: Date | string;
    }

    const qsTestModelDate = QuickSettings.create<TestModelDate>();
    qsTestModelDate.bindTime('testString', '01:00:00', {
        testString: '02:00:00',
    });

    // @ts-expect-error
    qsTestModelDate.bindTime('testString', new Date('01:00:00'), { testString: new Date() });

    // @ts-expect-error
    qsTestModelDate.bindTime('testDate', '01:00:00', { testDate: '01:00:00' });

    // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.bindTime('testDateOrString', '01:00:00', { testDateOrString: '02:00:00' });

    // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.bindTime('testDateOrString', new Date('01:00:00'), { testDateOrString: new Date() });

    // @ts-expect-error
    qsTestModelDate.bindTime('testDateOrString', new Date('01:00:00'), { testDateOrString: '02:00:00' });

    // @ts-expect-error
    qsTestModelDate.bindTime('testDateOrString', '02:00:00', { testDateOrString: new Date() });
}

// QuickSettingsPanel.addDropDown
{
    interface TestModelDropDown {
        testString: string;
        testNumber: number;
        testStringOrNumber: string | number;
        testComplex: {
            foo: string;
        };
    }

    const qsDropDown = QuickSettings.create<TestModelDropDown>();

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.addDropDown('testString', ['one', 'two', 'three'], (value: DropDownSelection<string>) => {});
    qsDropDown.addDropDown(
        'testString',
        [
            { label: 'Opt 1', value: 'one' },
            { label: 'Opt 2', value: 'two' },
            { label: 'Opt 3', value: '3' },
        ],
        (value: DropDownSelection<string>) => {},
    );

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.addDropDown('testNumber', [1, 2, 3], (value: DropDownSelection<number>) => {});

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.addDropDown(
        'testNumber',
        [
            { label: 'Opt 1', value: 1 },
            { label: 'Opt 2', value: 2 },
            { label: 'Opt 3', value: 3 },
        ],
        (value: DropDownSelection<number>) => {},
    );

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.addDropDown('testStringOrNumber', [1, 'two', 3], (value: DropDownSelection<string | number>) => {});

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.addDropDown(
        'testStringOrNumber',
        [
            { label: 'Opt 1', value: 1 },
            { label: 'Opt 2', value: 'two' },
            { label: 'Opt 3', value: 3 },
        ],
        (value: DropDownSelection<string | number>) => {},
    );

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.addDropDown(
        'testComplex',
        [
            { label: 'Opt 1', value: { foo: 'one' } },
            { label: 'Opt 2', value: { foo: 'two' } },
            { label: 'Opt 3', value: { foo: 'three' } },
        ],
        (value: DropDownSelection<{ foo: string }>) => {},
    );

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.addDropDown(
        'testString',
        ['one', { label: 'Opt 2', value: 'two' }, 'three'],
        (value: DropDownSelection<string>) => {},
    );

    // @ts-expect-error
    qsDropDown.addDropDown('testString', [1, 2, 3], (value: DropDownSelection<number>) => {});
    // @ts-expect-error
    qsDropDown.addDropDown('testNumber', ['one', 'two', 'three'], (value: DropDownSelection<string>) => {});
    // @ts-expect-error
    qsDropDown.addDropDown('testString', [1, 'two', 3], (value: DropDownSelection<string | number>) => {});
    // prettier-ignore
    // @ts-expect-error
    qsDropDown.addDropDown('testComplex', [{ foo: 'one' }, { foo: 'two' }, { foo: 'three' }], (value: DropDownSelection<{ foo: string }>) => {});
    // prettier-ignore
    // @ts-expect-error
    qsDropDown.addDropDown('testString', ['one', { label: 'Opt 2', value: 2 }, 'three'], (value: DropDownSelection<string>) => {});
}

// QuickSettingsPanel.bindDropDown
{
    interface TestModelDropDown {
        testString: string;
        testNumber: number;
        testStringOrNumber: string | number;
        testComplex: {
            foo: string;
        };
    }

    const qsDropDown = QuickSettings.create<TestModelDropDown>();

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.bindDropDown('testString', ['one', 'two', 'three'], { testString: 'one' });
    qsDropDown.bindDropDown(
        'testString',
        [
            { label: 'Opt 1', value: 'one' },
            { label: 'Opt 2', value: 'two' },
            { label: 'Opt 3', value: '3' },
        ],
        {
            testString: 'one',
        },
    );

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.bindDropDown('testNumber', [1, 2, 3], { testNumber: 10 });

    // @ts-expect-error
    qsDropDown.bindDropDown('testNumber', [1, 2, 3], { testNumber: 'foo' });

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.bindDropDown(
        'testNumber',
        [
            { label: 'Opt 1', value: 1 },
            { label: 'Opt 2', value: 2 },
            { label: 'Opt 3', value: 3 },
        ],
        {
            testNumber: 10,
        },
    );

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.bindDropDown('testStringOrNumber', [1, 'two', 3], { testStringOrNumber: 1 });

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.bindDropDown('testStringOrNumber', [1, 'two', 3], { testStringOrNumber: 'two' });

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.bindDropDown(
        'testStringOrNumber',
        [
            { label: 'Opt 1', value: 1 },
            { label: 'Opt 2', value: 'two' },
            { label: 'Opt 3', value: 3 },
        ],
        { testStringOrNumber: 1 },
    );

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.bindDropDown(
        'testComplex',
        [
            { label: 'Opt 1', value: { foo: 'one' } },
            { label: 'Opt 2', value: { foo: 'two' } },
            { label: 'Opt 3', value: { foo: 'three' } },
        ],
        { testComplex: { foo: 'bar' } },
    );

    // $ExpectType QuickSettingsPanel<TestModelDropDown, string>
    qsDropDown.bindDropDown('testString', ['one', { label: 'Opt 2', value: 'two' }, 'three'], { testString: 'foo' });

    // @ts-expect-error
    qsDropDown.bindDropDown('testString', [1, 2, 3], { testString: 'foo' });
    // @ts-expect-error
    qsDropDown.bindDropDown('testNumber', ['one', 'two', 'three'], { testNumber: 10 });
    // @ts-expect-error
    qsDropDown.bindDropDown('testString', [1, 'two', 3], { testString: 'foo' });
    // @ts-expect-error
    qsDropDown.bindDropDown('testComplex', [{ foo: 'one' }, { foo: 'two' }, { foo: 'three' }], {
        testComplex: { foo: 'bar' },
    });
    // @ts-expect-error
    qsDropDown.bindDropDown('testString', ['one', { label: 'Opt 2', value: 2 }, 'three'], { testString: 'foo' });
}

// QuickSettingsPanel.addHTML
qsAnyModel.addHTML('foo', '<div></div>'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.addHTML('testString', '<div></div>'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addHTML('foo', '<div></div>');
// @ts-expect-error
qsTestModel.addHTML('testNumber', '<div></div>');

// QuickSettingsPanel.addImage
qsAnyModel.addImage('foo', 'https://static.com/my-image.png', (url: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addImage('foo', 'https://static.com/my-image.png'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.addImage('testString', 'https://static.com/my-image.png', (url: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addImage('testString', 'https://static.com/my-image.png'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// @ts-expect-error
qsTestModel.addImage('foo', 'https://static.com/my-image.png', (url: string) => {});

// @ts-expect-error
qsTestModel.addImage('testNumber', 'https://static.com/my-image.png', (url: string) => {});

// QuickSettingsPanel.addFileChooser
qsAnyModel.addFileChooser('foo', 'Upload', 'image/*', (value: File) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsAnyModel.addFileChooser('foo', 'Upload', 'image/*'); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.addFileChooser('testFile', 'Upload', 'image/*', (value: File) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addFileChooser('testFile', 'Upload', 'image/*'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addFileChooser('testString', 'Upload', 'image/*');
// @ts-expect-error
qsTestModel.addFileChooser('foo', 'Upload', 'image/*');

/**
 * QuickSettingsPanel – Static field creation methods
 * Verifies the typings of methods adding static fields, i.e., fields whose values
 * will not be added to the model object.
 *
 * The methods are called on `qsAnyModel` and `qsTestModel` and verify that `qsAnyModel` accepts
 * and arbitrary string but `qsTestModel` requires the title to be included in the generic `S` template.
 */

// QuickSettingsPanel.addButton
qsAnyModel.addButton('foo', () => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.addButton('testStatic', () => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addButton('foo', () => {});
// @ts-expect-error
qsTestModel.addButton('testString', () => {});

// QuickSettingsPanel.addElement
qsAnyModel.addElement('foo', document.createElement('div')); // $ExpectType QuickSettingsPanel<Record<string, any>, string> || QuickSettingsPanel<AnyModel, string>
qsTestModel.addElement('testStatic', document.createElement('div')); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// @ts-expect-error
qsTestModel.addElement('foo', document.createElement('div'));
// @ts-expect-error
qsTestModel.addElement('testString', document.createElement('div'));
