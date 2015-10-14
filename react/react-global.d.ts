// Type definitions for React v0.14 (namespace)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="react.d.ts" />
/// <reference path="react-addons-create-fragment.d.ts" />
/// <reference path="react-addons-css-transition-group.d.ts" />
/// <reference path="react-addons-linked-state-mixin.d.ts" />
/// <reference path="react-addons-perf.d.ts" />
/// <reference path="react-addons-pure-render-mixin.d.ts" />
/// <reference path="react-addons-test-utils.d.ts" />
/// <reference path="react-addons-transition-group.d.ts" />
/// <reference path="react-addons-update.d.ts" />
/// <reference path="react-dom.d.ts" />

import React = __React;
import ReactDOM = __React.__DOM;

declare namespace __React {
    namespace addons {
        export var TransitionGroup: __React.__Addons.TransitionGroup;
        export var CSSTransitionGroup: __React.__Addons.CSSTransitionGroup;
        
        export var LinkedStateMixin: __React.__Addons.LinkedStateMixin;
        export var PureRenderMixin: __React.__Addons.PureRenderMixin;
        
        export import createFragment = __React.__Addons.createFragment;
        export import update = __React.__Addons.update;
        
        export import Perf = __React.__Addons.Perf;
        export import TestUtils = __React.__Addons.TestUtils;
    }

    // TransitionGroup types
    export import TransitionGroupProps = __React.__Addons.TransitionGroupProps;
    export import TransitionGroup = __React.__Addons.TransitionGroup;    
    export import CSSTransitionGroupProps = __React.__Addons.CSSTransitionGroupProps;
    export import CSSTransitionGroup = __React.__Addons.CSSTransitionGroup;
    
    // LinkedStateMixin types
    export import ReactLink = __React.__Addons.ReactLink;
    export import LinkedStateMixin = __React.__Addons.LinkedStateMixin;
    
    // PureRenderMixin types
    export import PureRenderMixin = __React.__Addons.PureRenderMixin;
    
    // update types
    export import UpdateSpecCommand = __React.__Addons.UpdateSpecCommand;
    export import UpdateSpecPath = __React.__Addons.UpdateSpecPath;    
    export import UpdateSpec = __React.__Addons.UpdateSpec;
    export import UpdateArraySpec = __React.__Addons.UpdateArraySpec;

    // Perf types
    export import ComponentPerfContext = __React.__Addons.ComponentPerfContext;
    export import NumericPerfContext = __React.__Addons.NumericPerfContext;    
    export import Measurements = __React.__Addons.Measurements;
        
    // TestUtil types
    export import SyntheticEventData = __React.__Addons.SyntheticEventData;
    export import EventSimulator = __React.__Addons.EventSimulator;    
    export import MockedComponentClass = __React.__Addons.MockedComponentClass;
    export import ShallowRenderer = __React.__Addons.ShallowRenderer;
}
