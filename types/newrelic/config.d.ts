export {};

declare module "./config" {
    /**
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration
     */
    interface NewRelicConfig {
        /**
         * @name NEW_RELIC_APP_NAME
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#app_name
         */
        app_name: string | string[];

        /**
         * @name NEW_RELIC_LICENSE_KEY
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#license
         */
        license_key: string;

        /**
         * @name NEW_RELIC_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#agent-enabled
         */
        agent_enabled?: boolean;

        /**
         * @name NEW_RELIC_ALLOW_ALL_HEADERS
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#allow_all_headers
         */
        allow_all_headers?: boolean;

        /**
         * @name NEW_RELIC_COMPRESSED_CONTENT_ENCODING
         * @default "gzip"
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#compressed_content_encoding
         */
        compressed_content_encoding?: string;

        /**
         * @deprecated
         * @name NEW_RELIC_APDEX_T
         * @default 0.100
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#apdex
         */
        apdex_t?: number;

        /**
         * @name NEW_RELIC_CERTIFICATES
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#certificates
         */
        certificates?: string[];

        /**
         * @name NEW_RELIC_HIGH_SECURITY
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#high_security
         */
        high_security?: boolean;

        /**
         * @name NEW_RELIC_HOST
         * @default "collector.newrelic.com"
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#host
         */
        host?: string;

        /**
         * @name NEW_RELIC_LABELS
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#labels
         */
        labels?: Record<string, string>;

        /**
         * @name NEW_RELIC_PORT
         * @default 443
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#port
         */
        port?: number;

        /**
         * @name NEW_RELIC_PROXY_URL
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy
         */
        proxy?: string;

        /**
         * @name NEW_RELIC_PROXY_HOST
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy_host
         */
        proxy_host?: string;

        /**
         * @name NEW_RELIC_PROXY_PASS
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy_pass
         */
        proxy_pass?: string;

        /**
         * @name NEW_RELIC_PROXY_PORT
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy_port
         */
        proxy_port?: string;

        /**
         * @name NEW_RELIC_PROXY_USER
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy_user
         */
        proxy_user?: string;

        logging?: {
            /**
             * @name NEW_RELIC_LOG_ENABLED
             * @default true // (false in serverless_mode)
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_LOG_LEVEL
             * @default "info"
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log_level
             */
            level?: "fatal" | "error" | "warn" | "info" | "debug" | "trace";

            /**
             * @name NEW_RELIC_LOG
             * @default process.cwd() + "newrelic_agent.log"
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log
             */
            filepath?: string;
        };

        ai_monitoring?: {
            /**
             * @name NEW_RELIC_AI_MONITORING_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#ai-monitoring-enabled
             */
            enabled?: boolean;

            streaming?: {
                /**
                 * @name NEW_RELIC_AI_MONITORING_STREAMING_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#ai-monitoring-streaming
                 */
                enabled?: boolean;
            };

            record_content?: {
                /**
                 * @name NEW_RELIC_AI_MONITORING_RECORD_CONTENT_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#ai-monitoring-record-content
                 */
                enabled?: boolean;
            };
        };

        cloud?: {
            aws?: {
                /**
                 * @name NEW_RELIC_CLOUD_AWS_ACCOUNT_ID
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#cloud-variables
                 */
                account_id?: number;
            };
        };

        audit_log?: {
            /**
             * @name NEW_RELIC_AUDIT_LOG_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#audit_log-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_AUDIT_LOG_ENDPOINTS
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#endpoints
             */
            endpoints?: (
                | "agent_settings"
                | "analytic_event_data"
                | "connect"
                | "custom_event_data"
                | "error_data"
                | "error_event_data"
                | "metric_data"
                | "preconnect"
                | "shutdown"
                | "span_event_data"
                | "sql_trace_data"
                | "transaction_sample_data"
            )[];
        };

        api?: {
            /**
             * @name NEW_RELIC_API_CUSTOM_ATTRIBUTES
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-attributes
             */
            custom_attributes_enabled?: boolean;

            /**
             * @name NEW_RELIC_API_CUSTOM_EVENTS
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-events
             */
            custom_events_enabled?: boolean;

            /**
             * @name NEW_RELIC_API_NOTICE_ERROR
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#notice-error
             */
            notice_error_enabled?: boolean;
        };

        attributes?: {
            /**
             * @name NEW_RELIC_ATTRIBUTES_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#attributes_enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_ATTRIBUTES_EXCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#attributes_exclude
             */
            exclude?: string[];

            /**
             * @name NEW_RELIC_ATTRIBUTES_INCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#attributes_include
             */
            include?: string[];

            /**
             * @name NEW_RELIC_ATTRIBUTES_INCLUDE_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#attributes_include_enabled
             */
            include_enabled?: boolean;
        };

        error_collector?: {
            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_collector
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES
             * @default [404]
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_ignore
             */
            ignore_status_codes?: number[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERRORS
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_ignore_classes
             */
            ignore_classes?: string[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_MESSAGES
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_ignore_messages
             */
            ignore_messages?: Record<string, string[]>;

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERROR_CODES
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#expected_status_codes
             */
            expected_status_codes?: number[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERRORS
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#expected_classes
             */
            expected_classes?: string[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_MESSAGES
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#expected_messages
             */
            expected_messages?: Record<string, string[]>;

            attributes?: {
                /**
                 * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_attributes_enabled
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_EXCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_attributes_exclude
                 */
                exclude?: string[];

                /**
                 * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_INCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_attributes_include
                 */
                include?: string[];
            };

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_MAX_EVENT_SAMPLES_STORED
             * @default 100
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_max_event_samples_stored
             */
            max_event_samples_stored?: number;
        };

        transaction_tracer?: {
            /**
             * @name NEW_RELIC_TRACER_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tracer_enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_EXPLAIN_THRESHOLD
             * @default 500
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#explain_threshold
             */
            explain_threshold?: number;

            /**
             * @name NEW_RELIC_RECORD_SQL
             * @default "obfuscated"
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#record-sql
             */
            record_sql?: "obfuscated" | "off" | "raw";

            /**
             * @name NEW_RELIC_TRACER_TOP_N
             * @default 20
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tracer_top
             */
            top_n?: number;

            /**
             * @name NEW_RELIC_TRACER_THRESHOLD
             * @default "apdex_f"
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tracer_threshold
             */
            transaction_threshold?: number | "apdex_f";

            attributes?: {
                /**
                 * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#hide-attributes-enabled
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_EXCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#hide-attributes-exclude
                 */
                exclude?: string[];

                /**
                 * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_INCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#hide-attributes-include
                 */
                include?: string[];
            };
        };

        rules?: {
            /**
             * @name NEW_RELIC_NAMING_RULES
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#rules_names
             */
            name?: Array<{ pattern?: string | RegExp; name?: string }>;

            /**
             * @name NEW_RELIC_IGNORING_RULES
             * @default ['^/socket.io/.*\/xhr-polling/']
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#rules_ignore
             */
            ignore?: (string | RegExp)[];

            /**
             * @name NEW_RELIC_ENFORCE_BACKSTOP
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#enforce_backstop
             */
            enforce_backstop?: boolean;
        };

        transaction_events?: {
            /**
             * @name NEW_RELIC_TRANSACTION_EVENTS_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx_events_enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_TRANSACTION_EVENTS_MAX_SAMPLES_STORED
             * @default 10000 // 20000 for v5.x or lower
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx_events_max_samples_stored
             */
            max_samples_stored?: number;

            /**
             * @name NEW_RELIC_TRANSACTION_EVENTS_MAX_SAMPLES_PER_MINUTE
             * @default 20000
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx_events_max_samples_per_minute
             */
            max_samples_per_minute?: number;

            attributes?: {
                /**
                 * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx-attributes-enabled
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_EXCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx-attributes-exclude
                 */
                exclude?: string[];

                /**
                 * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_INCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx-attributes-include
                 */
                include?: string[];
            };
        };

        browser_monitoring?: {
            /**
             * @name NEW_RELIC_BROWSER_MONITOR_ENABLE
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser
             */
            enable?: boolean;

            /**
             * @name NEW_RELIC_BROWSER_MONITOR_DEBUG
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser-debug
             */
            debug?: boolean;

            attributes?: {
                /**
                 * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_ENABLED
                 * @default false
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser-debug-enabled
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_EXCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser-debug-exclude
                 */
                exclude?: string[];

                /**
                 * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_INCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser-debug-include
                 */
                include?: string[];
            };
        };

        custom_insights_events?: {
            /**
             * @name NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom_events_enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_MAX_SAMPLES_STORED
             * @default 3000
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom_events_max_samples_stored
             */
            max_samples_stored?: number;
        };

        slow_sql?: {
            /**
             * @name NEW_RELIC_SLOW_SQL_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#slow-sql-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_MAX_SQL_SAMPLES
             * @default 10
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#slow-sql-max-samples
             */
            max_samples?: number;
        };

        process_host?: {
            /**
             * @name NEW_RELIC_PROCESS_HOST_DISPLAY_NAME
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-hostnames-display
             */
            display_name?: string;

            /**
             * @name NEW_RELIC_IPV_PREFERENCE
             * @default 4
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-hostnames-ipv
             */
            ipv_preference?: "4" | "6";
        };

        datastore_tracer?: {
            instance_reporting?: {
                /**
                 * @name NEW_RELIC_DATASTORE_INSTANCE_REPORTING_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#datastore-instance-enabled
                 */
                enabled?: boolean;
            };

            database_name_reporting?: {
                /**
                 * @name NEW_RELIC_DATASTORE_DATABASE_NAME_REPORTING_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#datastore-name-enabled
                 */
                enabled?: boolean;
            };
        };

        /**
         * @deprecated
         */
        cross_application_tracer?: {
            /**
             * @name NEW_RELIC_CROSS_APPLICATION_TRACER_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#cat-enabled
             */
            enabled?: boolean;
        };

        strip_exception_messages?: {
            /**
             * @name NEW_RELIC_STRIP_EXCEPTION_MESSAGES_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#allow-raw-enabled
             */
            enabled?: boolean;
        };

        distributed_tracing?: {
            /**
             * @name NEW_RELIC_DISTRIBUTED_TRACING_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#dt-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_DISTRIBUTED_TRACING_EXCLUDE_NEWRELIC_HEADER
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#dt-exclude-newrelic-header
             */
            exclude_newrelic_header?: boolean;
        };

        grpc?: {
            /**
             * @name NEW_RELIC_GRPC_RECORD_ERRORS
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#record_errors
             */
            record_errors?: boolean;

            /**
             * @name NEW_RELIC_GRPC_IGNORE_STATUS_CODES
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#grpc_error_ignore
             */
            ignore_status_codes?: number[];
        };

        span_events?: {
            /**
             * @name NEW_RELIC_SPAN_EVENTS_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-enabled
             */
            enabled?: boolean;

            attributes?: {
                /**
                 * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-attributes-enabled
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_INCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-attributes-include
                 */
                include?: string[];

                /**
                 * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_EXCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-attributes-exclude
                 */
                exclude?: string[];
            };

            /**
             * @name NEW_RELIC_SPAN_EVENTS_MAX_SAMPLES_STORED
             * @default 2000
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-max-samples-stored
             */
            max_samples_stored?: number;
        };

        infinite_tracing?: {
            trace_observer?: {
                /**
                 * @name NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_HOST
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#infinite-tracing-host
                 */
                host?: string;
            };

            span_events?: {
                /**
                 * @name NEW_RELIC_INFINITE_TRACING_SPAN_EVENTS_QUEUE_SIZE
                 * @default 10000
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#infinite-tracing-queue-size
                 */
                queue_size?: number;
            };
        };

        application_logging?: {
            /**
             * @name NEW_RELIC_APPLICATION_LOGGING_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-enabled
             */
            enabled?: boolean;

            metrics?: {
                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_METRICS_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-metrics-enabled
                 */
                enabled?: boolean;
            };

            forwarding?: {
                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-forwarding-enabled
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_MAX_SAMPLES_STORED
                 * @default 10000
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-forwarding-max_samples_stored
                 */
                max_samples_stored?: number;

                labels?: {
                    /**
                     * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_LABELS_ENABLED
                     * @default false
                     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-forwarding-labels
                     */
                    enabled?: boolean;

                    /**
                     * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_LABELS_EXCLUDE
                     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-forwarding-labels-exclude
                     */
                    exclude?: string[];
                };
            };

            local_decorating?: {
                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_LOCAL_DECORATING_ENABLED
                 * @default false
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-local_decorating-enabled
                 */
                enabled?: boolean;
            };
        };

        code_level_metrics?: {
            /**
             * @name NEW_RELIC_CODE_LEVEL_METRICS_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#code-level-metrics-enabled
             */
            enabled?: boolean;
        };

        url_obfuscation?: {
            /**
             * @name NEW_RELIC_URL_OBFUSCATION_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#url-obfuscation-enabled
             */
            enabled?: boolean;

            regex?: {
                /**
                 * @name NEW_RELIC_URL_OBFUSCATION_REGEX_PATTERN
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#url-obfuscation-regex-pattern
                 */
                pattern?: string | RegExp;

                /**
                 * @name NEW_RELIC_URL_OBFUSCATION_REGEX_FLAGS
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#url-obfuscation-regex-flags
                 */
                flags?: string;

                /**
                 * @name NEW_RELIC_URL_OBFUSCATION_REGEX_REPLACEMENT
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#url-obfuscation-regex-replacement
                 */
                replacement?: string;
            };
        };

        security?: {
            /**
             * @name NEW_RELIC_SECURITY_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-enabled
             */
            enabled?: boolean;

            agent?: {
                /**
                 * @name NEW_RELIC_SECURITY_AGENT_ENABLED
                 * @default false
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-agent-enabled
                 */
                enabled?: boolean;
            };

            /**
             * @name NEW_RELIC_SECURITY_MODE
             * @default "IAST"
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-mode
             */
            mode?: "IAST";

            /**
             * @name NEW_RELIC_SECURITY_VALIDATOR_SERVICE_URL
             * @default "wss://csec.nr-data.net"
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-validator-url
             */
            validator_service_url?: string;

            detection?: {
                rci?: {
                    /**
                     * @name NEW_RELIC_SECURITY_DETECTION_RCI_ENABLED
                     * @default true
                     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-rci-detection
                     */
                    enabled?: boolean;
                };

                rxss?: {
                    /**
                     * @name NEW_RELIC_SECURITY_DETECTION_RXSS_ENABLED
                     * @default true
                     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-xss-detection
                     */
                    enabled?: boolean;
                };

                deserialization?: {
                    /**
                     * @name NEW_RELIC_SECURITY_DETECTION_DESERIALIZATION_ENABLED
                     * @default true
                     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-deserialization-detection
                     */
                    enabled?: boolean;
                };
            };
        };

        heroku?: {
            /**
             * @name NEW_RELIC_HEROKU_USE_DYNO_NAMES
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#heroku-dyno
             */
            use_dyno_names?: boolean;
        };

        worker_threads?: {
            /**
             * @name NEW_RELIC_WORKER_THREADS_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#worker-threads
             */
            enabled?: boolean;
        };
    }
}
