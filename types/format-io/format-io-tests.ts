import * as format from 'format-io';

format.addSlashToEnd('a/s/d'); // $ExpectType string
format.size(1024 * 1024); // $ExpectType string
format.permissions.symbolic('00777'); // $ExpectType string
format.permissions.numeric('rwx rwx rwx'); // $ExpectType string
