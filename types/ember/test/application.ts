import Ember from 'ember';
import { assertType } from "./lib/assert";

let App = Ember.Application.create({
    customEvents: {
        paste: 'paste'
    }
});

let App2 = Ember.Application.create({
    customEvents: {
        mouseenter: null,
        mouseleave: null
    }
});
