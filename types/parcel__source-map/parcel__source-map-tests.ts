import SourceMap from '@parcel/source-map';

const sm = new SourceMap();

sm.addRawMappings(
    {
        version: 3,
        file: 'helloworld.js',
        sources: ['helloworld.coffee'],
        names: [],
        mappings: 'AAAA;AAAA,EAAA,OAAO,CAAC,GAAR,CAAY,aAAZ,CAAA,CAAA;AAAA',
    },
    0,
    0,
);

// $ExpectType Buffer
sm.toBuffer();
