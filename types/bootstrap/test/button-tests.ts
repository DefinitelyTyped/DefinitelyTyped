import { Button } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Button
new Button(element);

// $ExpectType void
$('.alert').button();

// $ExpectType void
$('.alert').button('toggle');
