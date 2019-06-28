import { setup, speak } from '@wordpress/a11y';

setup();

// For polite messages that shouldn't interrupt what screen readers are currently announcing.
speak('The message you want to send to the ARIA live region');

// For assertive messages that should interrupt what screen readers are currently announcing.
speak('The message you want to send to the ARIA live region', 'assertive');
