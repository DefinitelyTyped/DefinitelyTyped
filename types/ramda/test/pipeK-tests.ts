import * as R from 'ramda';

() => {
  const parseJson = (input: string): any[] => {
    try {
      return [JSON.parse(input)];
    } catch (e) {
      return [];
    }
  };
  const get = (prop: string) => (obj: any): any[] => {
    const propVal = obj[prop];
    if (propVal) {
      return [propVal];
    } else {
      return [];
    }
  };

  const getStateCode: (input: string) => string[] = R.pipeK(
    parseJson,
    get('user'),
    get('address'),
    get('state'),
    R.compose(
      val => [val],
      R.toUpper,
    ),
  );

  getStateCode('{"user":{"address":{"state":"ny"}}}');
  // => Just('NY')
  getStateCode('[Invalid JSON]');
  // => Nothing()
};
