import { Tooltip } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Tooltip
new Tooltip(element, { delay: 0.5, title: () => 'foo', customClass: () => 'custom-class' });

// $ExpectType Tooltip
Tooltip.getInstance(element);

// $ExpectType string
Tooltip.VERSION;

// $ExpectType Options
Tooltip.Default;

element.addEventListener(Tooltip.Events.hidden, event => {
    // do something…
});

element.addEventListener(Tooltip.Events.hide, event => {
    // do something…
});

element.addEventListener(Tooltip.Events.show, event => {
    // do something…
});

element.addEventListener(Tooltip.Events.shown, event => {
    // do something…
});

// $ExpectType void
$('.alert').tooltip();

// $ExpectType void
$('.alert').tooltip({ delay: 0.5, title: () => 'foo', customClass: () => 'custom-class' });

$('.alert').tooltip('hide'); // $ExpectType void
$('.alert').tooltip('show'); // $ExpectType void
$('.alert').tooltip('toggle'); // $ExpectType void
$('.alert').tooltip('enable'); // $ExpectType void
$('.alert').tooltip('disable'); // $ExpectType void
$('.alert').tooltip('toggleEnabled'); // $ExpectType void
$('.alert').tooltip('update'); // $ExpectType void
