function test_typeahead() {
    var options: Twitter.Typeahead.Options = {};
    var dataset: Twitter.Typeahead.Dataset<string> = { source: null };

    function test_typeahead_methods() {
        $('.typeahead').typeahead(options, dataset);
        $('.typeahead').typeahead(options, new Array(dataset));
        $('.typeahead').typeahead('val');
        $('.typeahead').typeahead('val', 'test value');
        $('.typeahead').typeahead('open');
        $('.typeahead').typeahead('close');
        $('.typeahead').typeahead('destroy');
    }

    function test_typeahead_options() {
        function options_empty() {
            $('.typeahead').typeahead({}, dataset);
        }

        function test_typeahead_option_hint() {
            $('.typeahead').typeahead({ hint: true }, dataset);
        }

        function test_typeahead_option_minLength() {
            $('.typeahead').typeahead({ minLength: 1 }, dataset);
        }

        function test_typeahead_option_highlight() {
            $('.typeahead').typeahead({ highlight: true }, dataset);
        }

        function test_typeahead_option_classNames() {
            $('.typeahead').typeahead({ classNames: { input: 'tt-input' } }, dataset);
        }

        function test_typeahead_options_all() {
            $('.typeahead').typeahead({
                hint: true,
                minLength: 1,
                highlight: true,
                classNames: { input: 'tt-input' }
            }, dataset);
        }
    }

    function test_typeahead_classNames() {
        function test_typeahead_classNames_empty() {
            var className: Twitter.Typeahead.ClassNames = {};
        }

        function test_typeahead_className_input() {
            var className: Twitter.Typeahead.ClassNames = { input: 'tt-input' };
        }

        function test_typeahead_className_hint() {
            var className: Twitter.Typeahead.ClassNames = { hint: 'tt-hint' };
        }

        function test_typeahead_className_menu() {
            var className: Twitter.Typeahead.ClassNames = { menu: 'tt-menu' };
        }

        function test_typeahead_className_dataset() {
            var className: Twitter.Typeahead.ClassNames = { dataset: 'tt-dataset' };
        }

        function test_typeahead_className_suggestion() {
            var className: Twitter.Typeahead.ClassNames = { suggestion: 'tt-suggestion' };
        }

        function test_typeahead_className_empty() {
            var className: Twitter.Typeahead.ClassNames = { empty: 'tt-empty' };
        }

        function test_typeahead_className_open() {
            var className: Twitter.Typeahead.ClassNames = { open: 'tt-open' };
        }

        function test_typeahead_className_cursor() {
            var className: Twitter.Typeahead.ClassNames = { cursor: 'tt-cursor' };
        }

        function test_typeahead_className_highlight() {
            var className: Twitter.Typeahead.ClassNames = { highlight: 'tt-highlight' };
        }

        function test_typeahead_classNames_all() {
            var className: Twitter.Typeahead.ClassNames = {
                input: 'tt-input',
                hint: 'tt-hint',
                menu: 'tt-menu',
                dataset: 'tt-dataset',
                suggestion: 'tt-suggestion',
                empty: 'tt-empty',
                open: 'tt-open',
                cursor: 'tt-cursor',
                highlight: 'tt-highlight'
            };
        }
    }

    function test_typeahead_datasets() {
        function test_typeahead_dataset_source_bloodhout() {
            var bo: Bloodhound.BloodhoundOptions<string> = { datumTokenizer: null, queryTokenizer: null };
            var engine: Bloodhound<string> = new Bloodhound<string>(bo);
            var dataset: Twitter.Typeahead.Dataset<string> = { source: engine };
        }

        function test_typeahead_dataset_source_function() {
            var dataset: Twitter.Typeahead.Dataset<string> = { source: (query: string, syncResults: (result: string[]) => void, asyncResults?: (result: string[]) => void) => { } };
        }

        function test_typeahead_dataset_async() {
            var dataset: Twitter.Typeahead.Dataset<string> = {
                source: null,
                async: true
            };
        }

        function test_typeahead_dataset_name() {
            var dataset: Twitter.Typeahead.Dataset<string> = {
                source: null,
                name: 'name'
            };
        }

        function test_typeahead_dataset_limit() {
            var dataset: Twitter.Typeahead.Dataset<string> = {
                source: null,
                limit: 5
            };
        }

        function test_typeahead_dataset_display_string() {
            var dataset: Twitter.Typeahead.Dataset<string> = {
                source: null,
                display: "key"
            };
        }

        function test_typeahead_dataset_display_function() {
            var dataset: Twitter.Typeahead.Dataset<string> = {
                source: null,
                display: (obj: string) => { return 'key'; }
            };
        }
    }

    function test_typeahead_templates() {
        function test_typeahead_templates_empty() {
            var templates: Twitter.Typeahead.Templates<string> = {};
        }

        function dataset_template_notfound_string() {
            var templates: Twitter.Typeahead.Templates<string> = { notFound: 'not found' };
        }

        function dataset_template_notfound_function() {
            var templates: Twitter.Typeahead.Templates<string> = { notFound: (query: string) => { return 'not found'; } };
        }

        function dataset_template_pending_string() {
            var templates: Twitter.Typeahead.Templates<string> = { pending: 'pending' };
        }

        function dataset_template_pending_function() {
            var templates: Twitter.Typeahead.Templates<string> = { pending: (query: string) => { return 'pending'; } };
        }

        function dataset_template_header_string() {
            var templates: Twitter.Typeahead.Templates<string> =  { header: 'header' };
        }

        function dataset_template_header_function() {
            var templates: Twitter.Typeahead.Templates<string> = { header: (query: string) => { return 'header'; } };
        }

        function dataset_template_footer_string() {
            var templates: Twitter.Typeahead.Templates<string> =  { footer: 'footer' };
        }

        function dataset_template_footer_function() {
            var templates: Twitter.Typeahead.Templates<string> =  { footer: (query: string) => { return 'footer'; } };
        }

        function dataset_template_suggestion() {
            var templates: Twitter.Typeahead.Templates<string> = { suggestion: (suggestion: string) => { return 'suggestion'; } };
        }
    }
}

function test_bloodhout() {
    var options: Bloodhound.BloodhoundOptions<string> = { datumTokenizer: null, queryTokenizer: null };
    var engine: Bloodhound<string> = new Bloodhound<string>(options);

    function test_bloodhout_static() {
        var old: Bloodhound<any> = Bloodhound.noConflict();
        var tokenizers: Bloodhound.Tokenizers = Bloodhound.tokenizers;
    }

    function test_bloodhout_methods() {
        // initialize
        var promise1: JQueryPromise<string> = engine.initialize();
        var promise2: JQueryPromise<string> = engine.initialize();
        var promise3: JQueryPromise<string> = engine.initialize(true);

        // add
        engine.add(new Array<string>());

        // get
        var data1: string[] = engine.get(new Array<number>());

        // search
        var sync: (datums: string[]) => {};
        var async: (datums: string[]) => {};
        var data2: string[] = engine.search("query", sync, async);

        // all
        var data3: string[] = engine.all();

        // clear
        var engine1: Bloodhound<string> = engine.clear();

        // clearPrefetchCache
        var engine2: Bloodhound<string> = engine.clearPrefetchCache();

        // clearRemoteCache
        var engine3: Bloodhound<string> = engine.clearRemoteCache();
    }

    function test_bloodhout_options() {
        function test_bloodhout_options_datumTokenizer() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: (datum: string) => { return new Array<string>(); },
                queryTokenizer: null
            };
        }

        function test_bloodhout_options_queryTokenizer() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: (query: string) => { return new Array<string>(); }
            };
        }

        function test_bloodhout_options_initialize() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                initialize: true
            };
        }

        function test_bloodhout_options_sufficient() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5
            };
        }

        function test_bloodhout_options_sorter() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                sorter: (a: string, b: string) => { return 0 }
            };
        }

        function test_bloodhout_options_local_array() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                local: new Array<string>()
            };
        }

        function test_bloodhout_options_local_function() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                local: () => { return new Array<string>() }
            };
        }

        function test_bloodhout_options_prefetch_string() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                prefetch: 'url'
            };
        }

        function test_bloodhout_options_prefetch_object() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                prefetch: { url: 'url' }
            };
        }

        function test_bloodhout_options_remote_string() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                remote: 'url'
            };
        }

        function test_bloodhout_options_remote_object() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: null,
                queryTokenizer: null,
                remote: { url: 'url' }
            };
        }

        function test_bloodhout_options_all() {
            var options: Bloodhound.BloodhoundOptions<string> = {
                datumTokenizer: (datum: string) => { return new Array<string>(); },
                queryTokenizer: (query: string) => { return new Array<string>(); },
                initialize: true,
                sufficient: 5,
                sorter: (a: string, b: string) => { return 0 },
                local: () => { return new Array<string>() },
                prefetch: { url: 'url' },
                remote: { url: 'url' }
            };
        }
    }

    function test_bloodhout_prefetch_options() {
        function test_bloodhout_prefetch_options_url() {
            var options: Bloodhound.PrefetchOptions<string> = {
                url: 'url'
            };
        }

        function test_bloodhout_prefetch_options_cache() {
            var options: Bloodhound.PrefetchOptions<string> = {
                url: 'url',
                cache: true
            };
        }

        function test_bloodhout_prefetch_options_ttl() {
            var options: Bloodhound.PrefetchOptions<string> = {
                url: 'url',
                ttl: 86400000 // 1 day
            };
        }

        function test_bloodhout_prefetch_options_cacheKey() {
            var options: Bloodhound.PrefetchOptions<string> = {
                url: 'url',
                cacheKey: 'url'
            };
        }

        function test_bloodhout_prefetch_options_thumbprint() {
            var options: Bloodhound.PrefetchOptions<string> = {
                url: 'url',
                thumbprint: 'thumbprint'
            };
        }

        function test_bloodhout_prefetch_options_prepare() {
            var ajaxSettings: JQueryAjaxSettings = { url: 'url' };

            var options: Bloodhound.PrefetchOptions<string> = {
                url: 'url',
                prepare: (settings: JQueryAjaxSettings) => { return ajaxSettings; }
            };
        }

        function test_bloodhout_prefetch_options_transform() {
            var options: Bloodhound.PrefetchOptions<string[]> = {
                url: 'url',
                transform: (response: string[]) => { return new Array<string>(); }
            };
        }

        function test_bloodhout_prefetch_options_all() {
            var ajaxSettings: JQueryAjaxSettings = { url: 'url' };

            var options: Bloodhound.PrefetchOptions<string[]> = {
                url: 'url',
                cache: true,
                ttl: 86400000,
                cacheKey: 'url',
                thumbprint: 'thumbprint',
                prepare: (settings: JQueryAjaxSettings) => { return ajaxSettings; },
                transform: (response: string[]) => { return new Array<string>(); }
            };
        }
    }

    function test_bloodhout_remote_options() {
        function test_bloodhout_remote_options_url() {
            var options: Bloodhound.RemoteOptions<string> = {
                url: 'url'
            };
        }

        function test_bloodhout_remote_options_prepare() {
            var ajaxSettings: JQueryAjaxSettings = { url: 'url' };

            var options: Bloodhound.RemoteOptions<string> = {
                url: 'url',
                prepare: (query: string, settings: JQueryAjaxSettings) => { return ajaxSettings; }
            };
        }

        function test_bloodhout_remote_options_wildcard() {
            var options: Bloodhound.RemoteOptions<string> = {
                url: 'url',
                wildcard: '%QUERY'
            };
        }

        function test_bloodhout_remote_options_rateLimitby() {
            var options: Bloodhound.RemoteOptions<string> = {
                url: 'url',
                rateLimitby: 'debounce'
            };
        }

        function test_bloodhout_remote_options_rateLimitWait() {
            var options: Bloodhound.RemoteOptions<string> = {
                url: 'url',
                rateLimitWait: 300
            };
        }

        function test_bloodhout_remote_options_transform() {
            var options: Bloodhound.RemoteOptions<string[]> = {
                url: 'url',
                transform: (response: string[]) => { return new Array<string>(); }
            };
        }

        function test_bloodhout_remote_options_all() {
            var ajaxSettings: JQueryAjaxSettings = { url: 'url' };

            var options: Bloodhound.RemoteOptions<string[]> = {
                url: 'url',
                prepare: (query: string, settings: JQueryAjaxSettings) => { return ajaxSettings; },
                wildcard: '%QUERY',
                rateLimitby: 'debounce',
                rateLimitWait: 300,
                transform: (response: string[]) => { return new Array<string>(); }
            };
        }
    }

    function test_bloodhout_tokenizers() {
        var tokenizers: Bloodhound.Tokenizers = {
            whitespace: (str: string) => { return new Array<string>(); },
            nonword: (str: string) => { return new Array<string>(); },
            obj: {
                whitespace: (str: string) => (obj: any) => { return new Array<string>(); },
                nonword: (str: string) => (obj: any) => { return new Array<string>(); }
            }
        };
    }
}