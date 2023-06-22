import { Tab } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Tab
new Tab(element);

// $ExpectType Tab | null
Tab.getInstance(element);
// $ExpectType Tab
Tab.getOrCreateInstance(element);

element.addEventListener(Tab.Events.hidden, event => {
    // do something…
});

element.addEventListener(Tab.Events.hide, event => {
    // do something…
});

element.addEventListener(Tab.Events.show, event => {
    // do something…
});

element.addEventListener(Tab.Events.shown, event => {
    // do something…
});

// $ExpectType JQuery<HTMLElement>
$('.alert').tab();

$('.alert').tab('show'); // $ExpectType JQuery<HTMLElement>
