import creditCardType, { addCard, getTypeInfo, types as CardType } from 'credit-card-type';

creditCardType.addCard === addCard;
creditCardType.types === CardType;

const visaCards = creditCardType('4111');

visaCards[0].type === CardType.VISA;

addCard({
    type: 'uber-visa',
    niceType: 'Uber Visa',
    exactPattern: /^$/,
    prefixPattern: /^$/
});

const uberVisa = getTypeInfo('uber-visa');

uberVisa.type === 'uber-visa';
