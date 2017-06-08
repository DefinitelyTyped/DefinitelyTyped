interface JQueryStatic {
    site: SemanticUI.Site;
}

interface JQuery {
    site: SemanticUI.Site;
}

declare namespace SemanticUI {
    interface Site {
        settings: SiteSettings;

        (behavior: 'destroy'): JQuery;
        <K extends keyof SiteSettings>(behavior: 'setting', name: K, value?: undefined): SiteSettings[K];
        <K extends keyof SiteSettings>(behavior: 'setting', name: K, value: SiteSettings[K]): JQuery;
        (behavior: 'setting', value: SiteSettings.Param): JQuery;
        (settings?: SiteSettings.Param): JQuery;
    }

    interface SiteSettings extends Pick<SiteSettings._Impl, keyof SiteSettings._Impl> { }

    namespace SiteSettings {
        type Param = SiteSettings | object;

        interface _Impl {
            modules: string[];
            siteNamespace: string;
            namespaceStub: Site.NamespaceStubSettings;

            // region Component Settings

            // region DOM Settings

            /**
             * Event namespace. Makes sure module teardown does not effect other events attached to an element.
             */
            namespace: string;

            // endregion

            // region Debug Settings

            /**
             * Name used in log statements
             */
            name: string;
            /**
             * Silences all console output including error messages, regardless of other debug settings.
             */
            silent: boolean;
            /**
             * Debug output to console
             */
            debug: boolean;
            /**
             * Show console.table output with performance metrics
             */
            performance: boolean;
            /**
             * Debug output includes all internal behaviors
             */
            verbose: boolean;

            // endregion

            // endregion
        }
    }

    namespace Site {
        interface NamespaceStubSettings extends Pick<NamespaceStubSettings._Impl, keyof NamespaceStubSettings._Impl> { }

        namespace NamespaceStubSettings {
            type Param = NamespaceStubSettings | object;

            interface _Impl {
                cache: any;
                config: any;
                sections: any;
                section: any;
                utilities: any;
            }
        }
    }
}
