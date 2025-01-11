export {};

type Integer = number;

declare module "./config" {
    /** @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration */
    interface NewRelicConfig {
        /** @name NEW_RELIC_APP_NAME */
        app_name: string | string[];

        /** @name NEW_RELIC_LICENSE_KEY */
        license_key: string;

        /** @name NEW_RELIC_ENABLED */
        agent_enabled?: boolean;

        /** @name NEW_RELIC_ALLOW_ALL_HEADERS */
        allow_all_headers?: boolean;

        /** @name NEW_RELIC_COMPRESSED_CONTENT_ENCODING */
        compressed_content_encoding?: string;

        /** @name NEW_RELIC_CERTIFICATES */
        certificates?: string[];

        /** @name NEW_RELIC_HIGH_SECURITY */
        high_security?: boolean;

        /** @name NEW_RELIC_HOST */
        host?: string;

        /** @name NEW_RELIC_LABELS */
        labels?: Record<string, string>;

        /** @name NEW_RELIC_PORT */
        port?: Integer;

        /** @name NEW_RELIC_PROXY_URL */
        proxy?: string;

        /** @name NEW_RELIC_PROXY_HOST */
        proxy_host?: string;

        /** @name NEW_RELIC_PROXY_PASS */
        proxy_pass?: string;

        /** @name NEW_RELIC_PROXY_PORT */
        proxy_port?: string;

        /** @name NEW_RELIC_PROXY_USER */
        proxy_user?: string;

        logging?: {
            /** @name NEW_RELIC_LOG_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_LOG_LEVEL */
            level?: "fatal" | "error" | "warn" | "info" | "debug" | "trace";

            /** @name NEW_RELIC_LOG */
            filepath?: string;
        };

        ai_monitoring?: {
            /** @name NEW_RELIC_AI_MONITORING_ENABLED */
            enabled?: boolean;

            streaming?: {
                /** @name NEW_RELIC_AI_MONITORING_STREAMING_ENABLED */
                enabled?: boolean;
            };

            record_content?: {
                /** @name NEW_RELIC_AI_MONITORING_RECORD_CONTENT_ENABLED */
                enabled?: boolean;
            };
        };

        cloud?: {
            aws?: {
                /** @name NEW_RELIC_CLOUD_AWS_ACCOUNT_ID */
                account_id?: Integer;
            };
        };

        audit_log?: {
            /** @name NEW_RELIC_AUDIT_LOG_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_AUDIT_LOG_ENDPOINTS */
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
            /** @name NEW_RELIC_API_CUSTOM_ATTRIBUTES */
            custom_attributes_enabled?: boolean;

            /** @name NEW_RELIC_API_CUSTOM_EVENTS */
            custom_events_enabled?: boolean;

            /** @name NEW_RELIC_API_NOTICE_ERROR */
            notice_error_enabled?: boolean;
        };

        attributes?: {
            /** @name NEW_RELIC_ATTRIBUTES_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_ATTRIBUTES_EXCLUDE */
            exclude?: string[];

            /** @name NEW_RELIC_ATTRIBUTES_INCLUDE */
            include?: string[];

            /** @name NEW_RELIC_ATTRIBUTES_INCLUDE_ENABLED */
            include_enabled?: boolean;
        };

        error_collector?: {
            /** @name NEW_RELIC_ERROR_COLLECTOR_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES */
            ignore_status_codes?: Integer[];

            /** @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERRORS */
            ignore_classes?: string[];

            /** @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_MESSAGES */
            ignore_messages?: Record<string, string[]>;

            /** @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERROR_CODES */
            expected_status_codes?: Integer[];

            /** @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERRORS */
            expected_classes?: string[];

            /** @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_MESSAGES */
            expected_messages?: Record<string, string[]>;

            attributes?: {
                /** @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_ENABLED */
                enabled?: boolean;

                /** @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_EXCLUDE */
                exclude?: string[];

                /** @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_INCLUDE */
                include?: string[];
            };

            /** @name NEW_RELIC_ERROR_COLLECTOR_MAX_EVENT_SAMPLES_STORED */
            max_event_samples_stored?: Integer;
        };

        transaction_tracer?: {
            /** @name NEW_RELIC_TRACER_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_EXPLAIN_THRESHOLD */
            explain_threshold?: Integer;

            /** @name NEW_RELIC_RECORD_SQL */
            record_sql?: "obfuscated" | "off" | "raw";

            /** @name NEW_RELIC_TRACER_TOP_N */
            top_n?: Integer;

            /** @name NEW_RELIC_TRACER_THRESHOLD */
            transaction_threshold?: Integer | "apdex_f";

            attributes?: {
                /** @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_ENABLED */
                enabled?: boolean;

                /** @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_EXCLUDE */
                exclude?: string[];

                /** @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_INCLUDE */
                include?: string[];
            };
        };

        rules?: {
            /** @name NEW_RELIC_NAMING_RULES */
            name?: Array<{
                pattern?: string | RegExp;
                name?: string;
            }>;

            /** @name NEW_RELIC_IGNORING_RULES */
            ignore?: (string | RegExp)[];

            /** @name NEW_RELIC_ENFORCE_BACKSTOP */
            enforce_backstop?: boolean;
        };

        transaction_events?: {
            /** @name NEW_RELIC_TRANSACTION_EVENTS_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_TRANSACTION_EVENTS_MAX_SAMPLES_STORED */
            max_samples_stored?: Integer;

            attributes?: {
                /** @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_ENABLED */
                enabled?: boolean;

                /** @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_EXCLUDE */
                exclude?: string[];

                /** @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_INCLUDE */
                include?: string[];
            };
        };

        browser_monitoring?: {
            /** @name NEW_RELIC_BROWSER_MONITOR_ENABLE */
            enable?: boolean;

            /** @name NEW_RELIC_BROWSER_MONITOR_DEBUG */
            debug?: boolean;

            attributes?: {
                /** @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_ENABLED */
                enabled?: boolean;

                /** @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_EXCLUDE */
                exclude?: string[];

                /** @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_INCLUDE */
                include?: string[];
            };
        };

        custom_insights_events?: {
            /** @name NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_MAX_SAMPLES_STORED */
            max_samples_stored?: Integer;
        };

        slow_sql?: {
            /** @name NEW_RELIC_SLOW_SQL_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_MAX_SQL_SAMPLES */
            max_samples?: Integer;
        };

        process_host?: {
            /** @name NEW_RELIC_PROCESS_HOST_DISPLAY_NAME */
            display_name?: string;

            /** @name NEW_RELIC_IPV_PREFERENCE */
            ipv_preference?: "4" | "6";
        };

        datastore_tracer?: {
            instance_reporting?: {
                /** @name NEW_RELIC_DATASTORE_INSTANCE_REPORTING_ENABLED */
                enabled?: boolean;
            };

            database_name_reporting?: {
                /** @name NEW_RELIC_DATASTORE_DATABASE_NAME_REPORTING_ENABLED */
                enabled?: boolean;
            };
        };

        cross_application_tracer?: {
            /** @name NEW_RELIC_CROSS_APPLICATION_TRACER_ENABLED */
            enabled?: boolean;
        };

        strip_exception_messages?: {
            /** @name NEW_RELIC_STRIP_EXCEPTION_MESSAGES_ENABLED */
            enabled?: boolean;
        };

        distributed_tracing?: {
            /** @name NEW_RELIC_DISTRIBUTED_TRACING_ENABLED */
            enabled?: boolean;

            /** @name NEW_RELIC_DISTRIBUTED_TRACING_EXCLUDE_NEWRELIC_HEADER */
            exclude_newrelic_header?: boolean;
        };

        grpc?: {
            /** @name NEW_RELIC_GRPC_RECORD_ERRORS */
            record_errors?: boolean;

            /** @name NEW_RELIC_GRPC_IGNORE_STATUS_CODES */
            ignore_status_codes?: Integer[];
        };

        span_events?: {
            /** @name NEW_RELIC_SPAN_EVENTS_ENABLED */
            enabled?: boolean;

            attributes?: {
                /** @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_ENABLED */
                enabled?: boolean;

                /** @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_INCLUDE */
                include?: string[];

                /** @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_EXCLUDE */
                exclude?: string[];
            };

            /** @name NEW_RELIC_SPAN_EVENTS_MAX_SAMPLES_STORED */
            max_samples_stored?: Integer;
        };

        infinite_tracing?: {
            trace_observer?: {
                /** @name NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_HOST */
                host?: string;

                /** @name NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_PORT */
                port?: Integer;
            };

            span_events?: {
                /** @name NEW_RELIC_INFINITE_TRACING_SPAN_EVENTS_QUEUE_SIZE */
                queue_size?: number;
            };
        };

        application_logging?: {
            /** @name NEW_RELIC_APPLICATION_LOGGING_ENABLED */
            enabled?: boolean;

            metrics?: {
                /** @name NEW_RELIC_APPLICATION_LOGGING_METRICS_ENABLED */
                enabled?: boolean;
            };

            forwarding?: {
                /** @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_ENABLED */
                enabled?: boolean;

                /** @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_MAX_SAMPLES_STORED */
                max_samples_stored?: number;

                labels?: {
                    /** @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_LABELS_ENABLED */
                    enabled?: boolean;

                    /** @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_LABELS_EXCLUDE */
                    exclude?: string[];
                };
            };

            local_decorating?: {
                /** @name NEW_RELIC_APPLICATION_LOGGING_LOCAL_DECORATING_ENABLED */
                enabled?: boolean;
            };
        };

        code_level_metrics?: {
            /** @name NEW_RELIC_CODE_LEVEL_METRICS_ENABLED */
            enabled?: boolean;
        };

        url_obfuscation?: {
            /** @name NEW_RELIC_URL_OBFUSCATION_ENABLED */
            enabled?: boolean;

            regex?: {
                /** @name NEW_RELIC_URL_OBFUSCATION_REGEX_PATTERN */
                pattern?: string | RegExp;

                /** @name NEW_RELIC_URL_OBFUSCATION_REGEX_FLAGS */
                flags?: string;

                /** @name NEW_RELIC_URL_OBFUSCATION_REGEX_REPLACEMENT */
                replacement?: string;
            };
        };

        security?: {
            /** @name NEW_RELIC_SECURITY_ENABLED */
            enabled?: boolean;

            agent?: {
                /** @name NEW_RELIC_SECURITY_AGENT_ENABLED */
                enabled?: boolean;
            };

            /** @name NEW_RELIC_SECURITY_MODE */
            mode?: "IAST";

            /** @name NEW_RELIC_SECURITY_VALIDATOR_SERVICE_URL */
            validator_service_url?: string;

            detection?: {
                rci?: {
                    /** @name NEW_RELIC_SECURITY_DETECTION_RCI_ENABLED */
                    enabled?: boolean;
                };

                rxss?: {
                    /** @name NEW_RELIC_SECURITY_DETECTION_RXSS_ENABLED */
                    enabled?: boolean;
                };

                deserialization?: {
                    /** @name NEW_RELIC_SECURITY_DETECTION_DESERIALIZATION_ENABLED */
                    enabled?: boolean;
                };
            };
        };

        heroku?: {
            /** @name NEW_RELIC_HEROKU_USE_DYNO_NAMES */
            use_dyno_names?: boolean;
        };

        worker_threads?: {
            /** @name NEW_RELIC_WORKER_THREADS_ENABLED */
            enabled?: boolean;
        };
    }
}
