
import * as nanoajax from 'nanoajax';

nanoajax.ajax({
    url: '/some-get-url'
}, function (code, responseText) {})

nanoajax.ajax({
    url: '/some-post-url',
    method: 'POST',
    body: 'post=content&args=yaknow'
}, function (code, responseText, request) {})
