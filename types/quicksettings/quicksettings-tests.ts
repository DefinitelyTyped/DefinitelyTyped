import QuickSettings, { AnyModel, DropDownSelection } from 'quicksettings';

/**
 * QuickSettings module tests
 * Verify validity of typings for the exported module
 */

// QuickSettings.create
QuickSettings.create(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
QuickSettings.create(100); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
QuickSettings.create(100, 200); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
QuickSettings.create(100, 200, 'Test Panel', document.createElement('div')); // $ExpectType QuickSettingsPanel<Record<string, any>, string>

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
qsAnyModel.saveInLocalStorage('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.saveInLocalStorage('foo'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.saveInLocalStorage
qsAnyModel.clearLocalStorage('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.clearLocalStorage('foo'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setPosition
qsAnyModel.setPosition(100, 100); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setPosition(100, 100); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setSize
qsAnyModel.setSize(100, 100); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setSize(100, 100); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setWidth
qsAnyModel.setWidth(100); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setWidth(100); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setHeight
qsAnyModel.setHeight(100); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setHeight(100); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setDraggable
qsAnyModel.setDraggable(true); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setDraggable(true); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.show
qsAnyModel.show(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.show(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.hide
qsAnyModel.hide(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.hide(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.toggleVisibility
qsAnyModel.toggleVisibility(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.toggleVisibility(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setCollapsible
qsAnyModel.setCollapsible(true); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setCollapsible(true); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.collapse
qsAnyModel.collapse(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.collapse(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.expand
qsAnyModel.expand(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.expand(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.toggleCollapsed
qsAnyModel.toggleCollapsed(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.toggleCollapsed(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.setKey
qsAnyModel.setKey('h'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setKey('h'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.showAllTitle
qsAnyModel.showAllTitles(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.showAllTitles(); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// QuickSettingsPanel.showAllTitled
qsAnyModel.hideAllTitles(); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
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
qsAnyModel.setGlobalChangeHandler((model: AnyModel) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.setGlobalChangeHandler((model: string) => {}); // $ExpectError
qsTestModel.setGlobalChangeHandler((model: TestModel) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
// prettier-ignore
qsTestModel.setGlobalChangeHandler((model: { testNumber: number; testBoolean: boolean; testDate: string | Date }) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.setGlobalChangeHandler((model: { foo: string }) => {}); // $ExpectError

// QuickSettingsPanel.getValue
qsAnyModel.getValue('testString'); // $ExpectType any
qsTestModel.getValue('testString'); // $ExpectType string
qsTestModel.getValue('testNumber'); // $ExpectType number
qsTestModel.getValue('testDate'); // $ExpectType string | Date

// QuickSettingsPanel.setValue
qsAnyModel.setValue('testString', 'foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.setValue('testString', 10); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setValue('testString', 'foo'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.setValue('testString', 10); // $ExpectError

// QuickSettingsPanel.getValueAsJSON
qsAnyModel.getValuesAsJSON(true); // $ExpectType string
qsAnyModel.getValuesAsJSON(false); // $ExpectType Record<string, any>
qsAnyModel.getValuesAsJSON(); // $ExpectType Record<string, any>
qsTestModel.getValuesAsJSON(true); // $ExpectType string
qsTestModel.getValuesAsJSON(false); // $ExpectType TestModel
qsTestModel.getValuesAsJSON(); // $ExpectType TestModel

// QuickSettingsPanel.setValuesFromJSON
qsAnyModel.setValuesFromJSON('{ "foo": "bar" }'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.setValuesFromJSON({ foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setValuesFromJSON('{ "foo": "bar" }'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.setValuesFromJSON({ foo: 'bar' }); // $ExpectError
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
qsAnyModel.removeControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.removeControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.removeControl('foo'); // $ExpectError

// QuickSettingsPanel.enableControl
qsAnyModel.enableControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.enableControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.enableControl('foo'); // $ExpectError

// QuickSettingsPanel.disableControl
qsAnyModel.disableControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.disableControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.disableControl('foo'); // $ExpectError

// QuickSettingsPanel.hideControl
qsAnyModel.hideControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.hideControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.hideControl('foo'); // $ExpectError

// QuickSettingsPanel.showControl
qsAnyModel.showControl('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.showControl('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.showControl('foo'); // $ExpectError

// QuickSettingsPanel.overrideStyle
qsAnyModel.overrideStyle('foo', 'color', '#fff'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.overrideStyle('testString', 'color', '#fff'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.overrideStyle('foo', 'color', '#fff'); // $ExpectError

// QuickSettingsPanel.hideTitle
qsAnyModel.hideTitle('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.hideTitle('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.hideTitle('foo'); // $ExpectError

// QuickSettingsPanel.showTitle
qsAnyModel.showTitle('foo'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.showTitle('testString'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.showTitle('foo'); // $ExpectError

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
qsAnyModel.addBoolean('foo', true, (value: boolean) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addBoolean('foo', 10, (value: number) => {}); // $ExpectError

qsTestModel.addBoolean('testBoolean', true, (value: boolean) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addBoolean('foo', true, (value: boolean) => {}); // $ExpectError
qsTestModel.addBoolean('testNumber', true, (value: boolean) => {}); // $ExpectError
qsTestModel.addBoolean('testBoolean', 10, (value: number) => {}); // $ExpectError

// QuickSettingsPanel.bindBoolean
qsAnyModel.bindBoolean('foo', true, { foo: false }); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.bindBoolean('foo', true, { baz: false }); // $ExpectError
qsAnyModel.bindBoolean('foo', 10, { foo: 10 }); // $ExpectError

qsTestModel.bindBoolean('testBoolean', true, { testBoolean: false }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.bindBoolean('foo', true, { foo: false }); // $ExpectError
qsTestModel.bindBoolean('testBoolean', true, { foo: false }); // $ExpectError
qsTestModel.bindBoolean('testBoolean', 10, { testBoolean: 10 }); // $ExpectError

// QuickSettingsPanel.addText
qsAnyModel.addText('foo', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addText('foo', 10, (value: number) => {}); // $ExpectError

qsTestModel.addText('testString', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addText('foo', 'bar', (value: string) => {}); // $ExpectError
qsTestModel.addText('testNumber', 'bar', (value: string) => {}); // $ExpectError
qsTestModel.addText('testString', 10, (value: number) => {}); // $ExpectError

// QuickSettingsPanel.bindText
qsAnyModel.bindText('foo', 'bar', { foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.bindText('foo', 'bar', { baz: 'bar' }); // $ExpectError
qsAnyModel.bindText('foo', 10, { foo: 10 }); // $ExpectError

qsTestModel.bindText('testString', 'bar', { testString: 'baz' }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.bindText('foo', 'bar', { baz: 'bar' }); // $ExpectError
qsTestModel.bindText('testString', 'bar', { foo: 'bar' }); // $ExpectError
qsTestModel.bindText('testString', 10, { testString: 10 }); // $ExpectError

// QuickSettingsPanel.addColor
qsAnyModel.addColor('foo', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addColor('foo', 10, (value: number) => {}); // $ExpectError

qsTestModel.addColor('testString', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addColor('foo', 'bar', (value: string) => {}); // $ExpectError
qsTestModel.addColor('testNumber', 'bar', (value: string) => {}); // $ExpectError
qsTestModel.addColor('testString', 10, (value: number) => {}); // $ExpectError

// QuickSettingsPanel.bindColor
qsAnyModel.bindColor('foo', 'bar', { foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.bindColor('foo', 'bar', { baz: 'bar' }); // $ExpectError
qsAnyModel.bindColor('foo', 10, { foo: 10 }); // $ExpectError

qsTestModel.bindColor('testString', 'bar', { testString: 'baz' }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.bindColor('foo', 'bar', { baz: 'bar' }); // $ExpectError
qsTestModel.bindColor('testString', 'bar', { foo: 'bar' }); // $ExpectError
qsTestModel.bindColor('testString', 10, { testString: 10 }); // $ExpectError

// QuickSettingsPanel.addPassword
qsAnyModel.addPassword('foo', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addPassword('foo', 10, (value: number) => {}); // $ExpectError

qsTestModel.addPassword('testString', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addPassword('foo', 'bar', (value: string) => {}); // $ExpectError
qsTestModel.addPassword('testNumber', 'bar', (value: string) => {}); // $ExpectError
qsTestModel.addPassword('testString', 10, (value: number) => {}); // $ExpectError

// QuickSettingsPanel.bindPassword
qsAnyModel.bindPassword('foo', 'bar', { foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.bindPassword('foo', 'bar', { baz: 'bar' }); // $ExpectError
qsAnyModel.bindPassword('foo', 10, { foo: 10 }); // $ExpectError

qsTestModel.bindPassword('testString', 'bar', { testString: 'baz' }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.bindPassword('foo', 'bar', { baz: 'bar' }); // $ExpectError
qsTestModel.bindPassword('testString', 'bar', { foo: 'bar' }); // $ExpectError
qsTestModel.bindPassword('testString', 10, { testString: 10 }); // $ExpectError

// QuickSettingsPanel.addProgressBar
qsAnyModel.addProgressBar('foo', 100, 10); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addProgressBar('foo', 100, 10, 'numbers'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>

// QuickSettingsPanel.addTextArea
qsAnyModel.addTextArea('foo', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addTextArea('foo', 10, (value: number) => {}); // $ExpectError

qsTestModel.addTextArea('testString', 'bar', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addTextArea('foo', 'bar', (value: string) => {}); // $ExpectError
qsTestModel.addTextArea('testNumber', 'bar', (value: string) => {}); // $ExpectError
qsTestModel.addTextArea('testString', 10, (value: number) => {}); // $ExpectError

// QuickSettingsPanel.bindTextArea
qsAnyModel.bindTextArea('foo', 'bar', { foo: 'bar' }); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.bindTextArea('foo', 'bar', { baz: 'bar' }); // $ExpectError
qsAnyModel.bindTextArea('foo', 10, { foo: 10 }); // $ExpectError

qsTestModel.bindTextArea('testString', 'bar', { testString: 'baz' }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.bindTextArea('foo', 'bar', { baz: 'bar' }); // $ExpectError
qsTestModel.bindTextArea('testString', 'bar', { foo: 'bar' }); // $ExpectError
qsTestModel.bindTextArea('testString', 10, { testString: 10 }); // $ExpectError

// QuickSettingsPanel.setTextAreaRows
qsAnyModel.setTextAreaRows('foo', 10); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setTextAreaRows('testString', 10); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.setTextAreaRows('foo', 10); // $ExpectError

// QuickSettingsPanel.addNumber
qsAnyModel.addNumber('foo', 0, 100, 10, 1, (value: number) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addNumber('foo', 0, 100, 'foo', 1, (value: number) => {}); // $ExpectError

qsTestModel.addNumber('testNumber', 0, 100, 10, 1, (value: number) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addNumber('foo', 0, 100, 10, 1, (value: number) => {}); // $ExpectError
qsTestModel.addNumber('testString', 0, 100, 10, 1, (value: number) => {}); // $ExpectError
qsTestModel.addNumber('testNumber', 0, 100, '10', 1, (value: number) => {}); // $ExpectError

// QuickSettingsPanel.bindNumber
qsAnyModel.bindNumber('foo', 0, 100, 10, 1, { foo: 12 }); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.bindNumber('foo', 0, 100, 10, 1, { baz: 12 }); // $ExpectError
qsAnyModel.bindNumber('foo', 0, 100, 10, 1, { foo: '12' }); // $ExpectError

qsTestModel.bindNumber('testNumber', 0, 100, 10, 1, { testNumber: 12 }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.bindNumber('foo', 0, 100, 10, 1, { foo: 12 }); // $ExpectError
qsTestModel.bindNumber('testNumber', 0, 100, 10, 1, { foo: 12 }); // $ExpectError
qsTestModel.bindNumber('testNumber', 0, 100, 10, 1, { testNumber: '12' }); // $ExpectError

// QuickSettingsPanel.setNumberParameters
qsAnyModel.setNumberParameters('foo', 0, 100, 1); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setNumberParameters('testNumber', 0, 100, 1); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.setNumberParameters('foo', 0, 100, 1); // $ExpectError

// QuickSettingsPanel.addRange
qsAnyModel.addRange('foo', 0, 100, 10, 1, (value: number) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addRange('foo', 0, 100, 'foo', 1, (value: number) => {}); // $ExpectError

qsTestModel.addRange('testNumber', 0, 100, 10, 1, (value: number) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addRange('foo', 0, 100, 10, 1, (value: number) => {}); // $ExpectError
qsTestModel.addRange('testString', 0, 100, 10, 1, (value: number) => {}); // $ExpectError
qsTestModel.addRange('testNumber', 0, 100, '10', 1, (value: number) => {}); // $ExpectError

// QuickSettingsPanel.bindRange
qsAnyModel.bindRange('foo', 0, 100, 10, 1, { foo: 12 }); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.bindRange('foo', 0, 100, 10, 1, { baz: 12 }); // $ExpectError
qsAnyModel.bindRange('foo', 0, 100, 10, 1, { foo: '12' }); // $ExpectError

qsTestModel.bindRange('testNumber', 0, 100, 10, 1, { testNumber: 12 }); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.bindRange('foo', 0, 100, 10, 1, { foo: 12 }); // $ExpectError
qsTestModel.bindRange('testNumber', 0, 100, 10, 1, { foo: 12 }); // $ExpectError
qsTestModel.bindRange('testNumber', 0, 100, 10, 1, { testNumber: '12' }); // $ExpectError

// QuickSettingsPanel.setRangeParameters
qsAnyModel.setRangeParameters('foo', 0, 100, 1); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.setRangeParameters('testNumber', 0, 100, 1); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.setRangeParameters('foo', 0, 100, 1); // $ExpectError

// QuickSettingsPanel.addDate
{
    qsAnyModel.addDate('myDateProperty', '2019-12-30', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
    qsAnyModel.addDate('myDateProperty', new Date('2019-12-30'), (value: Date) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
    qsAnyModel.addDate('myDateProperty', '2019-12-30', (value: Date) => {}); // $ExpectError
    qsAnyModel.addDate('myDateProperty', new Date(), (value: string) => {}); // $ExpectError

    interface TestModelDate {
        testString: string;
        testDate: Date;
        testDateOrString: Date | string;
    }

    const qsTestModelDate = QuickSettings.create<TestModelDate>();
    qsTestModelDate.addDate('testString', '2019-12-30', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.addDate('testString', new Date('2019-12-30'), (value: Date) => {}); // $ExpectError
    qsTestModelDate.addDate('testDate', '2019-12-30', (value: string) => {}); // $ExpectError
    qsTestModelDate.addDate('testDateOrString', '2019-12-30', (value: string) => {});
    qsTestModelDate.addDate('testDateOrString', new Date('2019-12-30'), (value: Date) => {});
    qsTestModelDate.addDate('testDateOrString', new Date('2019-12-30'), (value: string) => {}); // $ExpectError
    qsTestModelDate.addDate('testDateOrString', '2019-12-31', (value: Date) => {}); // $ExpectError
}

// QuickSettingsPanel.bindDate
{
    // $ExpectType QuickSettingsPanel<Record<string, any>, string>
    qsAnyModel.bindDate('myDateProperty', '2019-12-30', {
        myDateProperty: '2019-12-31',
    });

    // $ExpectType QuickSettingsPanel<Record<string, any>, string>
    qsAnyModel.bindDate('myDateProperty', new Date('2019-12-30'), {
        myDateProperty: new Date(),
    });

    // $ExpectError
    qsAnyModel.bindDate('myDateProperty', '2019-12-30', { myDateProperty: new Date() });

    // $ExpectError
    qsAnyModel.bindDate('myDateProperty', new Date(), { myDateProperty: '2019-12-31' });

    // $ExpectError
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

    // $ExpectError
    qsTestModelDate.bindDate('testString', new Date('2019-12-30'), { testString: new Date() });

    // $ExpectError
    qsTestModelDate.bindDate('testDate', '2019-12-30', { testDate: '2019-12-30' });

    // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.bindDate('testDateOrString', '2019-12-30', { testDateOrString: '2019-12-31' });

    // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.bindDate('testDateOrString', new Date('2019-12-30'), { testDateOrString: new Date() });

    // $ExpectError
    qsTestModelDate.bindDate('testDateOrString', new Date('2019-12-30'), { testDateOrString: '2019-12-31' });

    // $ExpectError
    qsTestModelDate.bindDate('testDateOrString', '2019-12-31', { testDateOrString: new Date() });
}

// QuickSettingsPanel.addTime
{
    qsAnyModel.addTime('myDateProperty', '01:00:00', (value: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
    qsAnyModel.addTime('myDateProperty', new Date('01:00:00'), (value: Date) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
    qsAnyModel.addTime('myDateProperty', '01:00:00', (value: Date) => {}); // $ExpectError
    qsAnyModel.addTime('myDateProperty', new Date(), (value: string) => {}); // $ExpectError

    interface TestModelDate {
        testString: string;
        testDate: Date;
        testDateOrString: Date | string;
    }

    const qsTestModelDate = QuickSettings.create<TestModelDate>();
    qsTestModelDate.addTime('testString', '01:00:00', (value: string) => {}); // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.addTime('testString', new Date('01:00:00'), (value: Date) => {}); // $ExpectError
    qsTestModelDate.addTime('testDate', '01:00:00', (value: string) => {}); // $ExpectError
    qsTestModelDate.addTime('testDateOrString', '01:00:00', (value: string) => {});
    qsTestModelDate.addTime('testDateOrString', new Date('01:00:00'), (value: Date) => {});
    qsTestModelDate.addTime('testDateOrString', new Date('01:00:00'), (value: string) => {}); // $ExpectError
    qsTestModelDate.addTime('testDateOrString', '02:00:00', (value: Date) => {}); // $ExpectError
}

// QuickSettingsPanel.bindTime
{
    // $ExpectType QuickSettingsPanel<Record<string, any>, string>
    qsAnyModel.bindTime('myDateProperty', '01:00:00', {
        myDateProperty: '02:00:00',
    });

    // $ExpectType QuickSettingsPanel<Record<string, any>, string>
    qsAnyModel.bindTime('myDateProperty', new Date('01:00:00'), {
        myDateProperty: new Date(),
    });

    // $ExpectError
    qsAnyModel.bindTime('myDateProperty', '01:00:00', { myDateProperty: new Date() });

    // $ExpectError
    qsAnyModel.bindTime('myDateProperty', new Date(), { myDateProperty: '02:00:00' });

    // $ExpectError
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

    // $ExpectError
    qsTestModelDate.bindTime('testString', new Date('01:00:00'), { testString: new Date() });

    // $ExpectError
    qsTestModelDate.bindTime('testDate', '01:00:00', { testDate: '01:00:00' });

    // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.bindTime('testDateOrString', '01:00:00', { testDateOrString: '02:00:00' });

    // $ExpectType QuickSettingsPanel<TestModelDate, string>
    qsTestModelDate.bindTime('testDateOrString', new Date('01:00:00'), { testDateOrString: new Date() });

    // $ExpectError
    qsTestModelDate.bindTime('testDateOrString', new Date('01:00:00'), { testDateOrString: '02:00:00' });

    // $ExpectError
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

    // $ExpectError
    qsDropDown.addDropDown('testString', [1, 2, 3], (value: DropDownSelection<number>) => {});
    // $ExpectError
    qsDropDown.addDropDown('testNumber', ['one', 'two', 'three'], (value: DropDownSelection<string>) => {});
    // $ExpectError
    qsDropDown.addDropDown('testString', [1, 'two', 3], (value: DropDownSelection<string | number>) => {});
    // prettier-ignore
    qsDropDown.addDropDown('testComplex', [{ foo: 'one' }, { foo: 'two' }, { foo: 'three' }], (value: DropDownSelection<{ foo: string }>) => {}); // $ExpectError
    // prettier-ignore
    qsDropDown.addDropDown('testString', ['one', { label: 'Opt 2', value: 2 }, 'three'], (value: DropDownSelection<string>) => {}); // $ExpectError
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

    // $ExpectError
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

    // $ExpectError
    qsDropDown.bindDropDown('testString', [1, 2, 3], { testString: 'foo' });
    // $ExpectError
    qsDropDown.bindDropDown('testNumber', ['one', 'two', 'three'], { testNumber: 10 });
    // $ExpectError
    qsDropDown.bindDropDown('testString', [1, 'two', 3], { testString: 'foo' });
    // $ExpectError
    qsDropDown.bindDropDown('testComplex', [{ foo: 'one' }, { foo: 'two' }, { foo: 'three' }], {
        testComplex: { foo: 'bar' },
    });
    // $ExpectError
    qsDropDown.bindDropDown('testString', ['one', { label: 'Opt 2', value: 2 }, 'three'], { testString: 'foo' });
}

// QuickSettingsPanel.addHTML
qsAnyModel.addHTML('foo', '<div></div>'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.addHTML('testString', '<div></div>'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addHTML('foo', '<div></div>'); // $ExpectError
qsTestModel.addHTML('testNumber', '<div></div>'); // $ExpectError

// QuickSettingsPanel.addImage
qsAnyModel.addImage('foo', 'https://static.com/my-image.png', (url: string) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addImage('foo', 'https://static.com/my-image.png'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.addImage('testString', 'https://static.com/my-image.png', (url: string) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addImage('testString', 'https://static.com/my-image.png'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">

// $ExpectError
qsTestModel.addImage('foo', 'https://static.com/my-image.png', (url: string) => {});

// $ExpectError
qsTestModel.addImage('testNumber', 'https://static.com/my-image.png', (url: string) => {});

// QuickSettingsPanel.addFileChooser
qsAnyModel.addFileChooser('foo', 'Upload', 'image/*', (value: File) => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsAnyModel.addFileChooser('foo', 'Upload', 'image/*'); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.addFileChooser('testFile', 'Upload', 'image/*', (value: File) => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addFileChooser('testFile', 'Upload', 'image/*'); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addFileChooser('testString', 'Upload', 'image/*'); // $ExpectError
qsTestModel.addFileChooser('foo', 'Upload', 'image/*'); // $ExpectError

/**
 * QuickSettingsPanel – Static field creation methods
 * Verifies the typings of methods adding static fields, i.e., fields whose values
 * will not be added to the model object.
 *
 * The methods are called on `qsAnyModel` and `qsTestModel` and verify that `qsAnyModel` accepts
 * and arbitrary string but `qsTestModel` requires the title to be included in the generic `S` template.
 */

// QuickSettingsPanel.addButton
qsAnyModel.addButton('foo', () => {}); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.addButton('testStatic', () => {}); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addButton('foo', () => {}); // $ExpectError
qsTestModel.addButton('testString', () => {}); // $ExpectError

// QuickSettingsPanel.addElement
qsAnyModel.addElement('foo', document.createElement('div')); // $ExpectType QuickSettingsPanel<Record<string, any>, string>
qsTestModel.addElement('testStatic', document.createElement('div')); // $ExpectType QuickSettingsPanel<TestModel, "testStatic">
qsTestModel.addElement('foo', document.createElement('div')); // $ExpectError
qsTestModel.addElement('testString', document.createElement('div')); // $ExpectError
