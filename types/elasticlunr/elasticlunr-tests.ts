import * as elasticlunr from 'elasticlunr';

interface Model  {
  id: number;
  name: string;
  location: {
    street: string;
    number: number;
  };
}

const keys = ['name', 'location'];

const index = elasticlunr<Model>(function()  {
  this.setRef('id');
  keys.forEach(key => {
    this.addField(key);
  });

  elasticlunr.stopWordFilter.stopWords = {
    ...elasticlunr.stopWordFilter.stopWords,
    at: false, // atlanta
    in: false, // indianapolis
    no: false, // new orleans
    or: false, // north west non-metro
    on: false, // ohio non-metro
  };
});

const tokens = elasticlunr.tokenizer('asdsda asdas');

const config = new elasticlunr.Configuration(JSON.stringify({}), index.getFields()).get();

index.fieldSearch(['queryTokens'], 'field', { ['field']: (config as any)['field']  });
const queryTokens = index.pipeline.run(['fieldvalue']);

// $ExpectType Model
index.documentStore.docs['id'];

index.documentStore.docs['id'].location.street;
