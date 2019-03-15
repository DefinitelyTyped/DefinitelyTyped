import * as ProxyLists from "proxy-lists";
import { EventEmitter } from "events";

const options: ProxyLists.Options = {
    filterMode: 'strict',
    countries: ['us', 'ca'],
    countriesBlackList: ['de', 'gb'],
    protocols: ['http', 'https'],
    anonymityLevels: ['anonymous', 'elite'],
    sourcesWhiteList: ['freeproxylists'],
    sourcesBlackList: ['freeproxylists'],
    series: false,
    ipTypes: ['ipv4'],
    defaultRequestOptions: {
		method: "GET"
	}
};

// `gettingProxies` is an event emitter object.
let gettingProxies: ProxyLists.GetProxiesEventEmitter = ProxyLists.getProxies(options);

gettingProxies.on('data', proxies => {
    // Received some proxies.
});

gettingProxies.on('error', error => {
    // Some error has occurred.
    console.error(error);
});

gettingProxies.once('end', () => {
    // Done getting proxies.
});

gettingProxies = ProxyLists.getProxiesFromSource('freeproxylists', options);

gettingProxies.on('data', proxies => {
    // Received some proxies.
});

const source: ProxyLists.AddSource = {
	homeUrl: 'www.example.com',
	getProxies: (options: ProxyLists.InternalOptions) => {
		return new EventEmitter();
	}
};

ProxyLists.addSource('testSource', source);

const listSourcesOptions: ProxyLists.ListSourcesOptions = {
	sourcesWhiteList: ['freeproxylists'],
    sourcesBlackList: ['freeproxylists']
};

ProxyLists.listSources(listSourcesOptions).forEach(source => console.log(source.name, source.homeUrl));
