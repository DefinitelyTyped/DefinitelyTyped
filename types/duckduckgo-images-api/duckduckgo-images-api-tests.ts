import * as duckDuckGoImagesApi from 'duckduckgo-images-api';
duckDuckGoImagesApi.image_search({query: 'John Duck', moderate: true, retries: 1, iterations: 1 });
duckDuckGoImagesApi.image_search_generator({query: 'John Duck', moderate: true, retries: 1, iterations: 1 });
