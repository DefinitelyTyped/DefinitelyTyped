import { Button } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Button
new Button(element);

// $ExpectType Button | null
Button.getInstance(element);
// $ExpectType Button
Button.getOrCreateInstance(element);

// $ExpectType JQuery<HTMLElement>
$('.alert').button();

// $ExpectType JQuery<HTMLElement>
$('.alert').button('toggle');
