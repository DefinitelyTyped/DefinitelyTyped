import { BlipSdk } from 'blip-sdk';

const _client = {
	sendCommand: (command: any): Promise<any> => {
		return new Promise<any>(resolve => resolve([]));
	}
};

const extension: BlipSdk.Extensions.ArtificialIntelligence = {

	getAnalysis: (skip?: number, take?: number, ascending?: boolean, filter?: string): Promise<object[]> => {
		return new Promise<any>(resolve => resolve([]));
	}

};
