import filterInvalidDomProps from 'filter-invalid-dom-props';

// $ExpectType Partial<{ notADomProp: boolean; }>
filterInvalidDomProps({ notADomProp: true });
