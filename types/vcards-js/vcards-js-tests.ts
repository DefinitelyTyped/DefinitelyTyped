import vCardsJS from 'vcards-js';

const vCard = vCardsJS();

vCard.firstName = 'Eric';
vCard.middleName = 'J';
vCard.lastName = 'Nesser';
vCard.workPhone = '312-555-1212';

vCard.getFormattedString().length > 0;
