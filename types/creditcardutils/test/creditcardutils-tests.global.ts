creditcardutils.formatCardNumber('4242424242424242'); // $ExpectType string

creditcardutils.validateCardNumber('4242424242424242'); // $ExpectType boolean

creditcardutils.parseCardType('4242424242424242'); // $ExpectType string
creditcardutils.parseCardType('378282246310005'); // $ExpectType string

creditcardutils.formatCardExpiry('4/21'); // $ExpectType string

creditcardutils.parseCardExpiry('4/21'); // $ExpectType object

creditcardutils.validateCardCVC('123'); // $ExpectType boolean
creditcardutils.validateCardCVC('1234', 'amex'); // $ExpectType boolean

creditcardutils.validateCardExpiry('4', '21'); // $ExpectType boolean
