// Type definitions for react-select v0.9.10
// Project: https://github.com/JedWatson/react-select
// Definitions by: ESQUIBET Hugo <https://github.com/Hesquibet/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>

// Typings for https://github.com/JedWatson/react-select
//***Usage***   
// import ReactSelect = require('react-select');   
//  <ReactSelect options={this.options} name="form-field-name" onChange={this._onSelect} value={this.state.Type} /> 
 
declare module "react-select" {
    // Import React 
    import React = require("react");
    
    interface Option{
        label : string;
        value : any;
    }
    
    interface ReactSelectProps extends React.Props<ReactSelectClass>{
        addLabelText? : string;
        allowCreate? : boolean;
        asyncOptions? : ()=>any;
        autoload? : boolean;
        backspaceRemoves? : boolean;
        cacheAsyncResults? : boolean;
        className? : string;
        clearable? : boolean;
        clearAllText? : string;
        clearValueText? : string;
        delimiter? : string;
        disabled? : boolean;
        filterOption? : (option,filterString : string)=>any;
        filterOptions? : (options:Array<any>,filterString : string,values : Array<any>)=>any;
        ignoreCase? : boolean; // default true	whether to perform case-insensitive filtering
        inputProps? : any;
        isLoading? : boolean;
        labelKey? : string;
        matchPos? : string;
        matchProp? : string;
        multi? : boolean;
        name? : string;
        newOptionCreator? : ()=>any;
        noResultsText? : string;
        onBlur? : (event)=>void;
        onChange? : (newValue)=>void;
        onFocus? : (event)=>void;
        onInputChange? : (inputValue)=>void;
        onOptionLabelClick? : (value, event)=>void;
        optionRenderer? : ()=>void;
        options? : Array<Option>;
        placeholder? : string;
        searchable? : boolean;
        searchingText? : string;
        searchPromptText? : string;
        value? : Option;
        valueKey? : string;
        valueRenderer? : ()=>void;
    }
    
    interface ReactSelect extends  React.ReactElement<ReactSelectProps> { }
    interface ReactSelectClass extends React.ComponentClass<ReactSelectProps>{}
    var ReactSelect: ReactSelectClass;
    export = ReactSelect;
    
}