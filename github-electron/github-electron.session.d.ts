// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Electron {

	class Session {
		static fromPartition(partition: string): Session;
		static defaultSession: Session;

		cookies: any;
		clearCache(callback: Function): void;
		clearStorageData(callback: Function): void;
		clearStorageData(options: ClearStorageDataOptions, callback: Function): void;
		flushStorageData(): void;
		setProxy(config: string, callback: Function): void;
		resolveProxy(url: URL, callback: (proxy: any) => any): void;
		setDownloadPath(path: string): void;
		enableNetworkEmulation(options: NetworkEmulationOptions): void;
		disableNetworkEmulation(): void;
		setCertificateVerifyProc(proc: CertificateVerifyProc): void;
		webRequest: any;
	}

	interface ClearStorageDataOptions {
		origin?: string;
		storages?: string[];
		quotas?: string[];
	}

	interface NetworkEmulationOptions {
		offline?: boolean;
		latency?: number;
		downloadThroughput?: number;
		uploadThroughput?: number;
	}

	interface CertificateVerifyProc {
		(hostname: string, cert: any, callback: (accepted: boolean) => any): any;
	}
}
