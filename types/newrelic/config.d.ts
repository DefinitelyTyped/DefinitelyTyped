export {};

declare module "./config" {
    /**
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration
     */
    interface NewRelicConfig {
        /**
         * @name NEW_RELIC_APP_NAME
         */
        app_name: string | string[];

        /**
         * @name NEW_RELIC_LICENSE_KEY
         */
        license_key: string;

        /**
         * @name NEW_RELIC_ENABLED
         * @default true
         */
        agent_enabled?: boolean;

        /**
         * @name NEW_RELIC_ALLOW_ALL_HEADERS
         * @default false
         */
        allow_all_headers?: boolean;

        /**
         * @name NEW_RELIC_COMPRESSED_CONTENT_ENCODING
         * @default "gzip"
         */
        compressed_content_encoding?: string;

        /**
         * @name NEW_RELIC_CERTIFICATES
         */
        certificates?: string[];

        /**
         * @name NEW_RELIC_HIGH_SECURITY
         * @default false
         */
        high_security?: boolean;

        /**
         * @name NEW_RELIC_HOST
         * @default "collector.newrelic.com"
         */
        host?: string;

        /**
         * @name NEW_RELIC_LABELS
         */
        labels?: Record<string, string>;

        /**
         * @name NEW_RELIC_PORT
         * @default 443
         */
        port?: number;

        /**
         * @name NEW_RELIC_PROXY_URL
         */
        proxy?: string;

        /**
         * @name NEW_RELIC_PROXY_HOST
         */
        proxy_host?: string;

        /**
         * @name NEW_RELIC_PROXY_PASS
         */
        proxy_pass?: string;

        /**
         * @name NEW_RELIC_PROXY_PORT
         */
        proxy_port?: string;

        /**
         * @name NEW_RELIC_PROXY_USER
         */
        proxy_user?: string;

        logging?: {
            /**
             * @name NEW_RELIC_LOG_ENABLED
             * @default true // (false in serverless_mode)
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_LOG_LEVEL
             * @default "info"
             */
            level?: "fatal" | "error" | "warn" | "info" | "debug" | "trace";

            /**
             * @name NEW_RELIC_LOG
             * @default process.cwd() + "newrelic_agent.log"
             */
            filepath?: string;
        };

        ai_monitoring?: {
            /**
             * @name NEW_RELIC_AI_MONITORING_ENABLED
             * @default false
             */
            enabled?: boolean;

            streaming?: {
                /**
                 * @name NEW_RELIC_AI_MONITORING_STREAMING_ENABLED
                 * @default true
                 */
                enabled?: boolean;
            };

            record_content?: {
                /**
                 * @name NEW_RELIC_AI_MONITORING_RECORD_CONTENT_ENABLED
                 * @default true
                 */
                enabled?: boolean;
            };
        };

        cloud?: {
            aws?: {
                /**
                 * @name NEW_RELIC_CLOUD_AWS_ACCOUNT_ID
                 */
                account_id?: number;
            };
        };

        audit_log?: {
            /**
             * @name NEW_RELIC_AUDIT_LOG_ENABLED
             * @default false
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_AUDIT_LOG_ENDPOINTS
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
             */
            custom_attributes_enabled?: boolean;

            /**
             * @name NEW_RELIC_API_CUSTOM_EVENTS
             * @default true
             */
            custom_events_enabled?: boolean;

            /**
             * @name NEW_RELIC_API_NOTICE_ERROR
             * @default true
             */
            notice_error_enabled?: boolean;
        };

        attributes?: {
            /**
             * @name NEW_RELIC_ATTRIBUTES_ENABLED
             * @default true
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_ATTRIBUTES_EXCLUDE
             */
            exclude?: string[];

            /**
             * @name NEW_RELIC_ATTRIBUTES_INCLUDE
             */
            include?: string[];

            /**
             * @name NEW_RELIC_ATTRIBUTES_INCLUDE_ENABLED
             * @default true
             */
            include_enabled?: boolean;
        };

        error_collector?: {
            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_ENABLED
             * @default true
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES
             * @default [404]
             */
            ignore_status_codes?: number[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERRORS
             */
            ignore_classes?: string[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_MESSAGES
             */
            ignore_messages?: Record<string, string[]>;

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERROR_CODES
             */
            expected_status_codes?: number[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERRORS
             */
            expected_classes?: string[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_MESSAGES
             */
            expected_messages?: Record<string, string[]>;

            attributes?: {
                /**
                 * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_ENABLED
                 * @default true
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_EXCLUDE
                 */
                exclude?: string[];

                /**
                 * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_INCLUDE
                 */
                include?: string[];
            };

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_MAX_EVENT_SAMPLES_STORED
             * @default 100
             */
            max_event_samples_stored?: number;
        };

        transaction_tracer?: {
            /**
             * @name NEW_RELIC_TRACER_ENABLED
             * @default true
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_EXPLAIN_THRESHOLD
             * @default 500
             */
            explain_threshold?: number;

            /**
             * @name NEW_RELIC_RECORD_SQL
             * @default "obfuscated"
             */
            record_sql?: "obfuscated" | "off" | "raw";

            /**
             * @name NEW_RELIC_TRACER_TOP_N
             * @default 20
             */
            top_n?: number;

            /**
             * @name NEW_RELIC_TRACER_THRESHOLD
             * @default "apdex_f"
             */
            transaction_threshold?: number | "apdex_f";

            attributes?: {
                /**
                 * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_ENABLED
                 * @default true
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_EXCLUDE
                 */
                exclude?: string[];

                /**
                 * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_INCLUDE
                 */
                include?: string[];
            };
        };

        rules?: {
            /**
             * @name NEW_RELIC_NAMING_RULES
             */
            name?: Array<{ pattern?: string | RegExp; name?: string }>;

            /**
             * @name NEW_RELIC_IGNORING_RULES
             * @default ['^/socket.io/.@/xhr-polling/']
             */
            ignore?: (string | RegExp)[];

            /**
             * @name NEW_RELIC_ENFORCE_BACKSTOP
             * @default true
             */
            enforce_backstop?: boolean;
        };

        transaction_events?: {
            /**
             * @name NEW_RELIC_TRANSACTION_EVENTS_ENABLED
             * @default true
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_TRANSACTION_EVENTS_MAX_SAMPLES_STORED
             * @default 10000
             */
            max_samples_stored?: number;

            attributes?: {
                /**
                 * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_ENABLED
                 * @default true
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_EXCLUDE
                 */
                exclude?: string[];

                /**
                 * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_INCLUDE
                 */
                include?: string[];
            };
        };

        browser_monitoring?: {
            /**
             * @name NEW_RELIC_BROWSER_MONITOR_ENABLE
             * @default true
             */
            enable?: boolean;

            /**
             * @name NEW_RELIC_BROWSER_MONITOR_DEBUG
             * @default false
             */
            debug?: boolean;

            attributes?: {
                /**
                 * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_ENABLED
                 * @default false
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_EXCLUDE
                 */
                exclude?: string[];

                /**
                 * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_INCLUDE
                 */
                include?: string[];
            };
        };

        custom_insights_events?: {
            /**
             * @name NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_ENABLED
             * @default true
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_MAX_SAMPLES_STORED
             * @default 3000
             */
            max_samples_stored?: number;
        };

        slow_sql?: {
            /**
             * @name NEW_RELIC_SLOW_SQL_ENABLED
             * @default false
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_MAX_SQL_SAMPLES
             * @default 10
             */
            max_samples?: number;
        };

        process_host?: {
            /**
             * @name NEW_RELIC_PROCESS_HOST_DISPLAY_NAME
             */
            display_name?: string;

            /**
             * @name NEW_RELIC_IPV_PREFERENCE
             * @default 4
             */
            ipv_preference?: "4" | "6";
        };

        datastore_tracer?: {
            instance_reporting?: {
                /**
                 * @name NEW_RELIC_DATASTORE_INSTANCE_REPORTING_ENABLED
                 * @default true
                 */
                enabled?: boolean;
            };

            database_name_reporting?: {
                /**
                 * @name NEW_RELIC_DATASTORE_DATABASE_NAME_REPORTING_ENABLED
                 * @default true
                 */
                enabled?: boolean;
            };
        };

        cross_application_tracer?: {
            /**
             * @name NEW_RELIC_CROSS_APPLICATION_TRACER_ENABLED
             * @default false
             */
            enabled?: boolean;
        };

        strip_exception_messages?: {
            /**
             * @name NEW_RELIC_STRIP_EXCEPTION_MESSAGES_ENABLED
             * @default false
             */
            enabled?: boolean;
        };

        distributed_tracing?: {
            /**
             * @name NEW_RELIC_DISTRIBUTED_TRACING_ENABLED
             * @default true
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_DISTRIBUTED_TRACING_EXCLUDE_NEWRELIC_HEADER
             * @default false
             */
            exclude_newrelic_header?: boolean;
        };

        grpc?: {
            /**
             * @name NEW_RELIC_GRPC_RECORD_ERRORS
             * @default true
             */
            record_errors?: boolean;

            /**
             * @name NEW_RELIC_GRPC_IGNORE_STATUS_CODES
             */
            ignore_status_codes?: number[];
        };

        span_events?: {
            /**
             * @name NEW_RELIC_SPAN_EVENTS_ENABLED
             * @default true
             */
            enabled?: boolean;

            attributes?: {
                /**
                 * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_ENABLED
                 * @default true
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_INCLUDE
                 */
                include?: string[];

                /**
                 * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_EXCLUDE
                 */
                exclude?: string[];
            };

            /**
             * @name NEW_RELIC_SPAN_EVENTS_MAX_SAMPLES_STORED
             * @default 2000
             */
            max_samples_stored?: number;
        };

        infinite_tracing?: {
            trace_observer?: {
                /**
                 * @name NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_HOST
                 */
                host?: string;

                /**
                 * @name NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_PORT
                 * @default 443
                 */
                port?: number;
            };

            span_events?: {
                /**
                 * @name NEW_RELIC_INFINITE_TRACING_SPAN_EVENTS_QUEUE_SIZE
                 * @default 10000
                 */
                queue_size?: number;
            };
        };

        application_logging?: {
            /**
             * @name NEW_RELIC_APPLICATION_LOGGING_ENABLED
             * @default true
             */
            enabled?: boolean;

            metrics?: {
                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_METRICS_ENABLED
                 * @default true
                 */
                enabled?: boolean;
            };

            forwarding?: {
                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_ENABLED
                 * @default true
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_MAX_SAMPLES_STORED
                 * @default 10000
                 */
                max_samples_stored?: number;

                labels?: {
                    /**
                     * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_LABELS_ENABLED
                     * @default false
                     */
                    enabled?: boolean;

                    /**
                     * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_LABELS_EXCLUDE
                     */
                    exclude?: string[];
                };
            };

            local_decorating?: {
                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_LOCAL_DECORATING_ENABLED
                 * @default false
                 */
                enabled?: boolean;
            };
        };

        code_level_metrics?: {
            /**
             * @name NEW_RELIC_CODE_LEVEL_METRICS_ENABLED
             * @default true
             */
            enabled?: boolean;
        };

        url_obfuscation?: {
            /**
             * @name NEW_RELIC_URL_OBFUSCATION_ENABLED
             * @default false
             */
            enabled?: boolean;

            regex?: {
                /**
                 * @name NEW_RELIC_URL_OBFUSCATION_REGEX_PATTERN
                 */
                pattern?: string | RegExp;

                /**
                 * @name NEW_RELIC_URL_OBFUSCATION_REGEX_FLAGS
                 */
                flags?: string;

                /**
                 * @name NEW_RELIC_URL_OBFUSCATION_REGEX_REPLACEMENT
                 */
                replacement?: string;
            };
        };

        security?: {
            /**
             * @name NEW_RELIC_SECURITY_ENABLED
             * @default false
             */
            enabled?: boolean;

            agent?: {
                /**
                 * @name NEW_RELIC_SECURITY_AGENT_ENABLED
                 * @default false
                 */
                enabled?: boolean;
            };

            /**
             * @name NEW_RELIC_SECURITY_MODE
             * @default "IAST"
             */
            mode?: "IAST";

            /**
             * @name NEW_RELIC_SECURITY_VALIDATOR_SERVICE_URL
             * @default "wss://csec.nr-data.net"
             */
            validator_service_url?: string;

            detection?: {
                rci?: {
                    /**
                     * @name NEW_RELIC_SECURITY_DETECTION_RCI_ENABLED
                     * @default true
                     */
                    enabled?: boolean;
                };

                rxss?: {
                    /**
                     * @name NEW_RELIC_SECURITY_DETECTION_RXSS_ENABLED
                     * @default true
                     */
                    enabled?: boolean;
                };

                deserialization?: {
                    /**
                     * @name NEW_RELIC_SECURITY_DETECTION_DESERIALIZATION_ENABLED
                     * @default true
                     */
                    enabled?: boolean;
                };
            };
        };

        heroku?: {
            /**
             * @name NEW_RELIC_HEROKU_USE_DYNO_NAMES
             * @default true
             */
            use_dyno_names?: boolean;
        };

        worker_threads?: {
            /**
             * @name NEW_RELIC_WORKER_THREADS_ENABLED
             * @default false
             */
            enabled?: boolean;
        };
    }
}
