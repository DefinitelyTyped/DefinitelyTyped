/**
 * PageSpeed Insights with reporting
 */
declare function psi(url: string, options?: psi.Options): Promise<psi.ResponseData>;

declare namespace psi {
    /**
     * Output the formatted report to the terminal.
     */
    function output(url: string, options?: Options): Promise<ResponseData>;

    interface Options {
        /**
         * When using this module for a production-level build process,
         * registering for an API key from the Google Developer Console is recommended.
         */
        key?: string | undefined;
        nokey?: string | undefined;
        /**
         * Strategy to use when analyzing the page.
         * @default 'mobile'
         */
        strategy?: "mobile" | "desktop" | undefined;
        /**
         * Locale results should be generated in.
         * @default 'en_US'
         */
        locale?: string | undefined;
        /**
         * Threshold score to pass the PageSpeed test. Useful for setting a performance budget.
         * @default 70
         */
        threshold?: number | undefined;
        /**
         * If passed adds links with more info about opportunities.
         * Useful for checking documentation about opportunities.
         * @default false
         */
        links?: boolean | undefined;
    }

    interface Experience {
        id: string;
        metrics: {
            [key: string]: {
                percentile: number;
                distributions: Array<{
                    min: number;
                    max: number;
                    proportion: number;
                }>;
                category: string;
            };
        };
        overall_category: string;
        initial_url: string;
    }

    interface Environment {
        networkUserAgent: string;
        hostUserAgent: string;
        benchmarkIndex: number;
    }

    interface ConfigSettings {
        emulatedFormFactor: string;
        locale: string;
        onlyCategories: object;
    }

    interface Audit {
        id: string;
        title: string;
        description: string;
        score: object;
        displayValue: string;
        scoreDisplayMode: string;
        explanation: string;
        errorMessage: string;
        warnings: object;
        details: {
            [key: string]: object;
        };
    }

    interface AuditRef {
        id: string;
        weight: number;
        group: string;
    }

    interface Category {
        id: string;
        title: string;
        description: string;
        score: object;
        manualDescription: string;
        auditRefs: AuditRef[];
    }

    interface CategoryGroup {
        title: string;
        description: string;
    }

    interface RuntimeError {
        code: string;
        message: string;
    }

    interface Timing {
        total: number;
    }

    interface RendererFormattedStrings {
        varianceDisclaimer: string;
        opportunityResourceColumnLabel: string;
        opportunitySavingsColumnLabel: string;
        errorMissingAuditInfo: string;
        errorLabel: string;
        warningHeader: string;
        auditGroupExpandTooltip: string;
        passedAuditsGroupTitle: string;
        notApplicableAuditsGroupTitle: string;
        manualAuditsGroupTitle: string;
        toplevelWarningsMessage: string;
        scorescaleLabel: string;
        crcLongestDurationLabel: string;
        crcInitialNavigation: string;
        lsPerformanceCategoryDescription: string;
        labDataTitle: string;
    }

    // tslint:disable-next-line:interface-name I18N is established convention
    interface I18N {
        rendererFormattedStrings: RendererFormattedStrings;
    }

    interface Version {
        major: number;
        minor: number;
    }

    interface ResponseData {
        data: Result;
    }

    interface LighthouseResult {
        requestedUrl: string;
        finalUrl: string;
        lighthouseVersion: string;
        userAgent: string;
        fetchTime: string;
        environment: Environment;
        runWarnings: string[];
        configSettings: ConfigSettings;
        audits: {
            [key: string]: Audit;
        };
        categories: {
            [key: string]: Category;
        };
        categoryGroups: {
            [key: string]: CategoryGroup;
        };
        runtimeError: RuntimeError;
        timing: Timing;
        i18n: I18N;
    }
    interface Result {
        captchaResult: string;
        kind: string;
        id: string;
        loadingExperience: Experience;
        originLoadingExperience: Experience;
        lighthouseResult: LighthouseResult;
        analysisUTCTimestamp: string;
        version: Version;
    }
}

export = psi;
