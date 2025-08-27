interface DomReady {
    (callback: () => any): DomReady;
    version: string;
}

declare var domReady: DomReady;

export = domReady;
