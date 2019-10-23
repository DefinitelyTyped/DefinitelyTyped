import vCard from 'vcf';

import * as fs from 'fs';
import * as path from 'path';

const card = new vCard().parse(
	fs.readFileSync(path.join(__dirname + '/types/vcf/data/john-doe-1_basic.vcf'))
);

const json = card.toJSON();

card.get('n');

card.get('tel');

const secondCard = vCard.fromJSON(json);
