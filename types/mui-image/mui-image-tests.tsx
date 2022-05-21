import * as React from 'react';
import Image from 'mui-image';

function Test() {
    function onLoad() {
        return console.log('loaded!');
    }

    return <Image src="https://picsum.photos/id/674/2000" width="50vw" onLoad={onLoad} />;
}

<Test />;
