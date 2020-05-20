import * as Countries from 'country-list';

Countries.getCode('Barbados'); // BB

Countries.getCodes();

Countries.getCodeList();

Countries.getData();

Countries.getName('BB'); // Barbados

Countries.getNameList();

Countries.getNames();

Countries.overwrite([{ code: 'TW', name: 'Taiwan' }]);
