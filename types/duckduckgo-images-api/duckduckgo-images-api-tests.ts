import * as duckDuckGoImagesApi from 'duckduckgo-images-api';

duckDuckGoImagesApi.image_search({query: 'John Duck', moderate: true, retries: 1, iterations: 1 }); // $ExpectType Promise<Array<{ image: string, title: string, height: number, thumbnail: string, width: number, url: string, source: string }>>
duckDuckGoImagesApi.image_search_generator({query: 'John Duck', moderate: true, retries: 1, iterations: 1 }); // $ExpectType Promise<Array<{ image: string, title: string, height: number, thumbnail: string, width: number, url: string, source: string }>>
