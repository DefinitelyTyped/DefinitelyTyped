// Type definitions for react-bootstrap-validation 0.1.11
// Project: https://github.com/heilhead/react-bootstrap-validation
// Definitions by: Jason Turner <https://github.com/brewsoftware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>
declare module 'react-bootstrap-validation' {
    import React = require("react");

    // Form component
    var Form: FormClass;
    interface Form extends React.ReactElement<FormProps> { }
    interface FormClass extends React.ComponentClass<FormProps> { }
    interface FormProps extends React.Props<FormClass> {

        validateOne?: any;
        validateAll?: any;
        errorHelp?: string | any;
        validationEvent?: string; //Input event that triggers field validation. Can be one of onChange, onBlur or onFocus. Default value is onChange.
        onValidSubmit: any;
        model?:any;
        id?: string | any;
    }

    // Validated Input
    var ValidatedInput: ValidatedInputClass;
    interface ValidatedInput extends React.ReactElement<ValidatedInputProps> { }
    interface ValidatedInputClass extends React.ComponentClass<ValidatedInputProps> { }
    interface ValidatedInputProps extends React.Props<ValidatedInputClass> {
        name: string;
        validationEvent?: string;
        validate: any;
        type: any;
        label: any;
        errorHelp?: any;
        maxLength?: string;
        id?: string | number;
        placeholder?: string;
    }

    // Radio ComponentA
    var Radio: RadioClass;
    interface Radio extends React.ReactElement<RadioProps> { }
    interface RadioClass extends React.ComponentClass<RadioProps> { }
    interface RadioProps extends RadioClass {
        name?: string;
        type?: string;
        value: string;
        label: string;
        className?: string;
    }

    // Radio Group Component
    var RadioGroup: RadioGroupClass;
    interface RadioGroup extends React.ReactElement<RadioGroupProps> { }
    interface RadioGroupClass extends React.ComponentClass<RadioGroupProps> { }
    interface RadioGroupProps extends React.Props<RadioGroupClass> {
        name?: string;
        value?: any;
        label?: any;
        validate?: string;
        errorHelp?: string;

        labelClassName?: string;
        wrapperClassName?: string;
    }


    // Validator Component
    var Validator: ValidatorClass;
    interface Validator extends React.ReactElement<ValidatorProps> { }
    interface ValidatorClass extends React.ComponentClass<ValidatorProps> { }
    interface ValidatorProps extends React.Props<ValidatorClass>  {
        validationEvent: any;
    }


// TODO: Map out the following items below
    //var FileValidator: FileValidatorClass;
    //interface FileValidatorClass extends ValidatedInputClass {
    //     ref: any;
    //     name: any;
    //     type :any;
    //     label:any;
    //     multiple: any;
    //     validate: any;

    //     isEmpty(files: FileList);

    //     /// Returns true if there are no files in file list.
    //     isSingle(files: FileList);

    //     // Returns true if files count equals to 1.
    //     isMultiple(files: FileList);

    //     //Returns true if files count is more than 1.
    //     isFilesCount(files: FileList, min: Number, max:Array<Number> );

    //     //Returns true if files count is within allowed range.If max is not supplied, checks if files count equals min.
    //     isTotalSize(files: FileList, min: Number, max: Array<Number>);

    //     //Returns true if total size of all files is within allowed range.
    //     isEachFileSize(files: FileList, min: Number, max: Array<Number>);

    //     //Returns true if each file's size is within allowed range.
    //     isExtension(files: FileList, extensions: Array<any>);

    //     //Returns true if each file's extension is in the extensions array.
    //     isType(files: FileList, types: Array<any>);
    // }

    //var InputContainer: InputContainerClass;
    //interface InputContainerClass extends ValidatedInputClass{

    // }
 }
