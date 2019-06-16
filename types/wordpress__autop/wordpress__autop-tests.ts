import { autop, removep } from '@wordpress/autop';

autop('my text'); // "<p>my text</p>"

removep('<p>my text</p>'); // "my text"
