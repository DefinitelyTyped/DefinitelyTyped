import * as ASCIIFolder from 'fold-to-ascii';

ASCIIFolder.foldReplacing('Lörem 🤧 ëripuît'); // $ExpectType string
ASCIIFolder.foldReplacing('Lörem 🤧 ëripuît', 'X'); // $ExpectType string
ASCIIFolder.foldMaintaining('Lörem 🤧 ëripuît'); // $ExpectType string
