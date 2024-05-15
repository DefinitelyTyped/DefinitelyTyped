declare namespace Saturn {
    interface SaturnSettings {
        integrationId: string;
    }

    interface SaturnInitializer {
        run: (options: SaturnSettings) => void;
    }

    interface SaturnInterface {
        integrationId: string;
        isOpen: boolean;
        isLoaded: boolean;
        isUserLoaded: boolean;
        setUser: (
            identifier: string,
            user: {
                email: string;
                name?: string | undefined;
                identifierHash?: string | undefined;
            },
        ) => void;
        trackEvent: (eventName: string, eventData: Record<string, string>) => void;
        trackAttr: (name: string, value: string) => void;
        reset: () => void;
        open: () => void;
        close: () => void;
        toggle: () => void;
        hide: () => void;
        show: () => void;
    }
}

interface Window {
    saturnSDK: Saturn.SaturnInitializer;
    $saturn: Saturn.SaturnInterface;
}
