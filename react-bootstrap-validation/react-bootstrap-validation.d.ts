///<reference path="../typings/react-bootstrap/react-bootstrap.d.ts"/>

declare module  ReactBootstrapValidation{
    
    export interface Form {
         model;
         validateOne: any;
         validateAll: any;
         errorHelp: string | any;
         validationEvent: string;
         onValidSubmit: any;

     }
    export interface ValidatedInput 
     {

         name: string;
         validationEvent: string;
         validate: any;

         type: any;
         label: any;
         errorHelp: any;
     }

    export interface Radio extends ValidatedInput {

     }


    export interface RadioGroup extends  ValidatedInput {
         validationEvent: any;
     }

    export interface Validator {

         required(val: String);
         //Returns true if the value is not null.Can be used as an alias to !isNull validation rule.
         isChecked(val: String);

     }

    export interface FileValidator extends Validator {
         ref: any;
         name: any;
         type :any;
         label:any;
         multiple: any;
         validate: any;

         isEmpty(files: FileList);

         /// Returns true if there are no files in file list.
         isSingle(files: FileList);

         // Returns true if files count equals to 1.
         isMultiple(files: FileList);

         //Returns true if files count is more than 1.
         isFilesCount(files: FileList, min: Number, max:Array<Number> );

         //Returns true if files count is within allowed range.If max is not supplied, checks if files count equals min.
         isTotalSize(files: FileList, min: Number, max: Array<Number>);

         //Returns true if total size of all files is within allowed range.
         isEachFileSize(files: FileList, min: Number, max: Array<Number>);

         //Returns true if each file's size is within allowed range.
         isExtension(files: FileList, extensions: Array<any>);

         //Returns true if each file's extension is in the extensions array.
         isType(files: FileList, types: Array<any>);
     }

    export interface InputContainer {

     }
 }


declare module 'react-bootstrap-validation' {
    export = ReactBootstrapValidation;
}