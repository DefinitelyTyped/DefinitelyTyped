declare var zip: {
	unzip: (sourceZip: string, destiniationDir: string, callback: () => void, progressCallback?: (progress: number) => void) => void
}
