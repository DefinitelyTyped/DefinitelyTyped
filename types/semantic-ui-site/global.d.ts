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
        <K extends keyof SiteSettings>(behavior: 'setting', name: K, value?: undefined): SiteSettings._Impl[K];
        <K extends keyof SiteSettings>(behavior: 'setting', name: K, value: SiteSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: SiteSettings): JQuery;
        (settings?: SiteSettings): JQuery;
    }

    type SiteSettings = SiteSettings.Param;

    namespace SiteSettings {
        type Param = (Pick<_Impl, 'modules'> |
            Pick<_Impl, 'siteNamespace'> |
            Pick<_Impl, 'namespaceStub'> |
            Pick<_Impl, 'namespace'> |
            Pick<_Impl, 'name'> |
            Pick<_Impl, 'silent'> |
            Pick<_Impl, 'debug'> |
            Pick<_Impl, 'performance'> |
            Pick<_Impl, 'verbose'>) &
            Partial<Pick<_Impl, keyof _Impl>>;

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
        type NamespaceStubSettings = NamespaceStubSettings.Param;

        namespace NamespaceStubSettings {
            type Param = (Pick<_Impl, 'cache'> |
                Pick<_Impl, 'config'> |
                Pick<_Impl, 'sections'> |
                Pick<_Impl, 'section'> |
                Pick<_Impl, 'utilities'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

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
