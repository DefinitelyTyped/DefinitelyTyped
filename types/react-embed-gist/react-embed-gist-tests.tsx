import * as React from 'react';

import ReactEmbedGist from 'react-embed-gist';

<ReactEmbedGist gist="username/gist-id" />;

<ReactEmbedGist
    gist="username/gist-id"
    wrapperClass="some-class"
    loadingClass="some-class"
    titleClass="some-class"
    contentClass="some-class"
    errorClass="some-class"
    file="some-file.txt"
/>;

<ReactEmbedGist
    gist="username/gist-id"
    // @ts-expect-error
    wrapperClass={1}
/>;

// @ts-expect-error
<ReactEmbedGist gist="error" />;
