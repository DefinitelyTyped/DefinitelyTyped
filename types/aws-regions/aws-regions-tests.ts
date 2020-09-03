import awsRegions from 'aws-regions';

awsRegions.list() ===
    [
        {
            name: 'N. Virginia',
            full_name: 'US East (N. Virginia)',
            code: 'us-east-1',
            public: true,
            zones: ['us-east-1a'],
        },
    ];

awsRegions.lookup({ code: 'us-east-1' }) ===
    {
        name: 'N. Virginia',
        full_name: 'US East (N. Virginia)',
        code: 'us-east-1',
        public: true,
        zones: ['us-east-1a'],
    };

awsRegions.lookup({ name: 'N. Virginia' }) ===
    {
        name: 'N. Virginia',
        full_name: 'US East (N. Virginia)',
        code: 'us-east-1',
        public: true,
        zones: ['us-east-1a'],
    };
