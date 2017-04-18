declare var zip: {
	unzip: (sourceZip: string, destiniationDir: string, callback: () => void, progressCallback?: (progressEvent: {total: number, loaded: number}) => void) => void
}
