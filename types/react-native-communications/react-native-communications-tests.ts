import { phonecall, email, text, textWithoutEncoding, web } from 'react-native-communications';

phonecall('123456789', true);

email('a@example.com', 'a@example.com', 'a@example.com', 'subject', 'body');

text();
text('123456789');
text('123456789', 'body');

textWithoutEncoding();
textWithoutEncoding('123456789');
textWithoutEncoding('123456789', 'body');

web();
web('https://example.com');
