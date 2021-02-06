import * as Gitana from 'gitana';

Gitana.connect('', e => {}); // $ExpectType AppHelper

Gitana.connect({ password: '', clientSecret: '', username: '', clientKey: '', }, e => {}); // $ExpectType AppHelper
