import { extract, hasProvider, OembedData } from "oembed-parser";

const url = "https://www.youtube.com/watch?v=8jPQjjsBbIc";

extract(url).then(data => {
    const parsedData: OembedData = data;
});

const providerExists: boolean = hasProvider(url);
