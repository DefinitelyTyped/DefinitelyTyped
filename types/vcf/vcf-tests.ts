import * as vCard from 'vcf';

const card = new vCard();

const json = card.toJSON();

card.get('n');

card.get('tel');

const secondCard = vCard.fromJSON(json);
