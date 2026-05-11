// We ignore tslint and eslint for this file, because we want to have the JSON blob verbatim in here.

import { CycloneDXBomV1_3 } from "cyclonedx";

export const sbom1_3_services: CycloneDXBomV1_3 = {
    "bomFormat": "CycloneDX",
    "specVersion": "1.3",
    "version": 1,
    "services": [
        {
            name: "some service",
        },
    ],
};

// https://github.com/CycloneDX/bom-examples/blob/master/SBOM/laravel-7.12.0/bom.1.3.json
export const sbom1_3: CycloneDXBomV1_3 = {
    "bomFormat": "CycloneDX",
    "specVersion": "1.3",
    "version": 1,
    "metadata": {
        "tools": [
            {
                "vendor": "cyclonedx",
                "name": "cyclonedx-php-composer",
                "version": "dev-master",
            },
        ],
        "component": {
            "bom-ref": "pkg:composer/cyclonedx/cyclonedx-php-composer-demo@dev-master",
            "type": "application",
            "name": "cyclonedx-php-composer-demo",
            "version": "dev-master",
            "group": "cyclonedx",
            "description": "demo of cyclonedx/cyclonedx-php-composer with a pinned version of laravel/framework",
            "purl": "pkg:composer/cyclonedx/cyclonedx-php-composer-demo@dev-master",
        },
    },
    "components": [
        {
            "bom-ref": "pkg:composer/asm89/stack-cors@1.3.0",
            "type": "library",
            "name": "stack-cors",
            "version": "1.3.0",
            "group": "asm89",
            "description": "Cross-origin resource sharing library and stack middleware",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/asm89/stack-cors@1.3.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/asm89/stack-cors.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=b9c31def6a83f84b4d4a40d35996d375755f0e08)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/asm89/stack-cors/zipball/b9c31def6a83f84b4d4a40d35996d375755f0e08",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=b9c31def6a83f84b4d4a40d35996d375755f0e08 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://github.com/asm89/stack-cors",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/asm89/stack-cors/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/asm89/stack-cors/tree/1.3.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/brick/math@0.9.3",
            "type": "library",
            "name": "math",
            "version": "0.9.3",
            "group": "brick",
            "description": "Arbitrary-precision arithmetic library",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/brick/math@0.9.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/brick/math.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=ca57d18f028f84f777b2168cd1911b0dee2343ae)",
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/brick/math/zipball/ca57d18f028f84f777b2168cd1911b0dee2343ae",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=ca57d18f028f84f777b2168cd1911b0dee2343ae & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/brick/math/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/brick/math/tree/0.9.3",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/BenMorel",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/brick/math",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/doctrine/inflector@2.0.4",
            "type": "library",
            "name": "inflector",
            "version": "2.0.4",
            "group": "doctrine",
            "description":
                "PHP Doctrine Inflector is a small library that can perform string manipulations with regard to upper/lowercase and singular/plural forms of words.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/doctrine/inflector@2.0.4",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/doctrine/inflector.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=8b7ff3e4b7de6b2c84da85637b59fd2880ecaa89)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/doctrine/inflector/zipball/8b7ff3e4b7de6b2c84da85637b59fd2880ecaa89",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=8b7ff3e4b7de6b2c84da85637b59fd2880ecaa89 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://www.doctrine-project.org/projects/inflector.html",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/doctrine/inflector/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/doctrine/inflector/tree/2.0.4",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://www.doctrine-project.org/sponsorship.html",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://www.patreon.com/phpdoctrine",
                    "comment": "As set via `funding` in composer package definition. (type=patreon)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/doctrine%2Finflector",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/doctrine/lexer@1.2.1",
            "type": "library",
            "name": "lexer",
            "version": "1.2.1",
            "group": "doctrine",
            "description": "PHP Doctrine Lexer parser library that can be used in Top-Down, Recursive Descent Parsers.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/doctrine/lexer@1.2.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/doctrine/lexer.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=e864bbf5904cb8f5bb334f99209b48018522f042)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/doctrine/lexer/zipball/e864bbf5904cb8f5bb334f99209b48018522f042",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=e864bbf5904cb8f5bb334f99209b48018522f042 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://www.doctrine-project.org/projects/lexer.html",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/doctrine/lexer/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/doctrine/lexer/tree/1.2.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://www.doctrine-project.org/sponsorship.html",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://www.patreon.com/phpdoctrine",
                    "comment": "As set via `funding` in composer package definition. (type=patreon)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/doctrine%2Flexer",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/dragonmantank/cron-expression@2.3.1",
            "type": "library",
            "name": "cron-expression",
            "version": "2.3.1",
            "group": "dragonmantank",
            "description":
                "CRON for PHP: Calculate the next or previous run date and determine if a CRON expression is due",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/dragonmantank/cron-expression@2.3.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/dragonmantank/cron-expression.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=65b2d8ee1f10915efb3b55597da3404f096acba2)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/dragonmantank/cron-expression/zipball/65b2d8ee1f10915efb3b55597da3404f096acba2",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=65b2d8ee1f10915efb3b55597da3404f096acba2 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/dragonmantank/cron-expression/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/dragonmantank/cron-expression/tree/v2.3.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/dragonmantank",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/egulias/email-validator@2.1.25",
            "type": "library",
            "name": "email-validator",
            "version": "2.1.25",
            "group": "egulias",
            "description": "A library for validating emails against several RFCs",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/egulias/email-validator@2.1.25",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/egulias/EmailValidator.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=0dbf5d78455d4d6a41d186da50adc1122ec066f4)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/egulias/EmailValidator/zipball/0dbf5d78455d4d6a41d186da50adc1122ec066f4",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=0dbf5d78455d4d6a41d186da50adc1122ec066f4 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://github.com/egulias/EmailValidator",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/egulias/EmailValidator/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/egulias/EmailValidator/tree/2.1.25",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/egulias",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/fideloper/proxy@4.4.1",
            "type": "library",
            "name": "proxy",
            "version": "4.4.1",
            "group": "fideloper",
            "description": "Set trusted proxies for Laravel",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/fideloper/proxy@4.4.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/fideloper/TrustedProxy.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=c073b2bd04d1c90e04dc1b787662b558dd65ade0)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/fideloper/TrustedProxy/zipball/c073b2bd04d1c90e04dc1b787662b558dd65ade0",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=c073b2bd04d1c90e04dc1b787662b558dd65ade0 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/fideloper/TrustedProxy/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/fideloper/TrustedProxy/tree/4.4.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/fruitcake/laravel-cors@1.0.6",
            "type": "library",
            "name": "laravel-cors",
            "version": "1.0.6",
            "group": "fruitcake",
            "description": "Adds CORS (Cross-Origin Resource Sharing) headers support in your Laravel application",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/fruitcake/laravel-cors@1.0.6",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/fruitcake/laravel-cors.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=1d127dbec313e2e227d65e0c483765d8d7559bf6)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/fruitcake/laravel-cors/zipball/1d127dbec313e2e227d65e0c483765d8d7559bf6",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=1d127dbec313e2e227d65e0c483765d8d7559bf6 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/fruitcake/laravel-cors/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/fruitcake/laravel-cors/tree/1.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/barryvdh",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/guzzlehttp/guzzle@6.5.5",
            "type": "library",
            "name": "guzzle",
            "version": "6.5.5",
            "group": "guzzlehttp",
            "description": "Guzzle is a PHP HTTP client library",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/guzzlehttp/guzzle@6.5.5",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/guzzle.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=9d4290de1cfd701f38099ef7e183b64b4b7b0c5e)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/guzzle/guzzle/zipball/9d4290de1cfd701f38099ef7e183b64b4b7b0c5e",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=9d4290de1cfd701f38099ef7e183b64b4b7b0c5e & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "http://guzzlephp.org/",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/guzzle/guzzle/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/guzzle/tree/6.5",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/guzzlehttp/promises@1.5.1",
            "type": "library",
            "name": "promises",
            "version": "1.5.1",
            "group": "guzzlehttp",
            "description": "Guzzle promises library",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/guzzlehttp/promises@1.5.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/promises.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=fe752aedc9fd8fcca3fe7ad05d419d32998a06da)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/guzzle/promises/zipball/fe752aedc9fd8fcca3fe7ad05d419d32998a06da",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=fe752aedc9fd8fcca3fe7ad05d419d32998a06da & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/guzzle/promises/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/promises/tree/1.5.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/GrahamCampbell",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/Nyholm",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/promises",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/guzzlehttp/psr7@1.8.3",
            "type": "library",
            "name": "psr7",
            "version": "1.8.3",
            "group": "guzzlehttp",
            "description": "PSR-7 message implementation that also provides common utility methods",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/guzzlehttp/psr7@1.8.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/psr7.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=1afdd860a2566ed3c2b0b4a3de6e23434a79ec85)",
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/guzzle/psr7/zipball/1afdd860a2566ed3c2b0b4a3de6e23434a79ec85",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=1afdd860a2566ed3c2b0b4a3de6e23434a79ec85 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/guzzle/psr7/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/guzzle/psr7/tree/1.8.3",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/GrahamCampbell",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/Nyholm",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/psr7",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/laravel/framework@7.30.5",
            "type": "library",
            "name": "framework",
            "version": "7.30.5",
            "group": "laravel",
            "description": "The Laravel Framework.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/laravel/framework@7.30.5",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/framework.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=afb0c034072a03a5ab1872fbdea54f8befd873c3)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/laravel/framework/zipball/afb0c034072a03a5ab1872fbdea54f8befd873c3",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=afb0c034072a03a5ab1872fbdea54f8befd873c3 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://laravel.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/laravel/framework/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/framework",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/laravel/laravel@7.12.0",
            "type": "application",
            "name": "laravel",
            "version": "7.12.0",
            "group": "laravel",
            "description": "The Laravel Framework.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/laravel/laravel@7.12.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/laravel.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=5639581ea56ecd556cdf6e6edc37ce5795740fd7)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/laravel/laravel/zipball/5639581ea56ecd556cdf6e6edc37ce5795740fd7",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=5639581ea56ecd556cdf6e6edc37ce5795740fd7 & sha1=UNDEFINED)",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/laravel/tree/master",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/laravel/tinker@2.6.2",
            "type": "library",
            "name": "tinker",
            "version": "2.6.2",
            "group": "laravel",
            "description": "Powerful REPL for the Laravel framework.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/laravel/tinker@2.6.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/tinker.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=c808a7227f97ecfd9219fbf913bad842ea854ddc)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/laravel/tinker/zipball/c808a7227f97ecfd9219fbf913bad842ea854ddc",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=c808a7227f97ecfd9219fbf913bad842ea854ddc & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/laravel/tinker/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/laravel/tinker/tree/v2.6.2",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/league/commonmark@1.6.6",
            "type": "library",
            "name": "commonmark",
            "version": "1.6.6",
            "group": "league",
            "description":
                "Highly-extensible PHP Markdown parser which fully supports the CommonMark spec and Github-Flavored Markdown (GFM)",
            "licenses": [
                {
                    "license": {
                        "id": "BSD-3-Clause",
                    },
                },
            ],
            "purl": "pkg:composer/league/commonmark@1.6.6",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/commonmark.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=c4228d11e30d7493c6836d20872f9582d8ba6dcf)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/thephpleague/commonmark/zipball/c4228d11e30d7493c6836d20872f9582d8ba6dcf",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=c4228d11e30d7493c6836d20872f9582d8ba6dcf & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://commonmark.thephpleague.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "documentation",
                    "url": "https://commonmark.thephpleague.com/",
                    "comment": "As set via `support.docs` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/thephpleague/commonmark/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "support",
                    "url": "https://github.com/thephpleague/commonmark/releases.atom",
                    "comment": "As set via `support.rss` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/commonmark",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://enjoy.gitstore.app/repositories/thephpleague/commonmark",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://www.colinodell.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://www.paypal.me/colinpodell/10.00",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/colinodell",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://www.patreon.com/colinodell",
                    "comment": "As set via `funding` in composer package definition. (type=patreon)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/league/commonmark",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/league/flysystem@1.1.8",
            "type": "library",
            "name": "flysystem",
            "version": "1.1.8",
            "group": "league",
            "description": "Filesystem abstraction: Many filesystems, one API.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/league/flysystem@1.1.8",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/flysystem.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=c995bb0c23c58c9813d081f9523c9b7bb496698e)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/thephpleague/flysystem/zipball/c995bb0c23c58c9813d081f9523c9b7bb496698e",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=c995bb0c23c58c9813d081f9523c9b7bb496698e & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/thephpleague/flysystem/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/flysystem/tree/1.1.8",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://offset.earth/frankdejonge",
                    "comment": "As set via `funding` in composer package definition. (type=other)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/league/mime-type-detection@1.9.0",
            "type": "library",
            "name": "mime-type-detection",
            "version": "1.9.0",
            "group": "league",
            "description": "Mime-type detection for Flysystem",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/league/mime-type-detection@1.9.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/mime-type-detection.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=aa70e813a6ad3d1558fc927863d47309b4c23e69)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/thephpleague/mime-type-detection/zipball/aa70e813a6ad3d1558fc927863d47309b4c23e69",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=aa70e813a6ad3d1558fc927863d47309b4c23e69 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/thephpleague/mime-type-detection/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/thephpleague/mime-type-detection/tree/1.9.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/frankdejonge",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/league/flysystem",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/monolog/monolog@2.3.5",
            "type": "library",
            "name": "monolog",
            "version": "2.3.5",
            "group": "monolog",
            "description": "Sends your logs to files, sockets, inboxes, databases and various web services",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/monolog/monolog@2.3.5",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/Seldaek/monolog.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=fd4380d6fc37626e2f799f29d91195040137eba9)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/Seldaek/monolog/zipball/fd4380d6fc37626e2f799f29d91195040137eba9",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=fd4380d6fc37626e2f799f29d91195040137eba9 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://github.com/Seldaek/monolog",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/Seldaek/monolog/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/Seldaek/monolog/tree/2.3.5",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/Seldaek",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/monolog/monolog",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/nesbot/carbon@2.55.2",
            "type": "library",
            "name": "carbon",
            "version": "2.55.2",
            "group": "nesbot",
            "description": "An API extension for DateTime that supports 281 different languages.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/nesbot/carbon@2.55.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/briannesbitt/Carbon.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=8c2a18ce3e67c34efc1b29f64fe61304368259a2)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/briannesbitt/Carbon/zipball/8c2a18ce3e67c34efc1b29f64fe61304368259a2",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=8c2a18ce3e67c34efc1b29f64fe61304368259a2 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://carbon.nesbot.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "documentation",
                    "url": "https://carbon.nesbot.com/docs",
                    "comment": "As set via `support.docs` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/briannesbitt/Carbon/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/briannesbitt/Carbon",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://opencollective.com/Carbon",
                    "comment": "As set via `funding` in composer package definition. (type=open_collective)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/nesbot/carbon",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/nikic/php-parser@4.13.2",
            "type": "library",
            "name": "php-parser",
            "version": "4.13.2",
            "group": "nikic",
            "description": "A PHP parser written in PHP",
            "licenses": [
                {
                    "license": {
                        "id": "BSD-3-Clause",
                    },
                },
            ],
            "purl": "pkg:composer/nikic/php-parser@4.13.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/nikic/PHP-Parser.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=210577fe3cf7badcc5814d99455df46564f3c077)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/nikic/PHP-Parser/zipball/210577fe3cf7badcc5814d99455df46564f3c077",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=210577fe3cf7badcc5814d99455df46564f3c077 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/nikic/PHP-Parser/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/nikic/PHP-Parser/tree/v4.13.2",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/opis/closure@3.6.2",
            "type": "library",
            "name": "closure",
            "version": "3.6.2",
            "group": "opis",
            "description":
                "A library that can be used to serialize closures (anonymous functions) and arbitrary objects.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/opis/closure@3.6.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/opis/closure.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=06e2ebd25f2869e54a306dda991f7db58066f7f6)",
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/opis/closure/zipball/06e2ebd25f2869e54a306dda991f7db58066f7f6",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=06e2ebd25f2869e54a306dda991f7db58066f7f6 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://opis.io/closure",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/opis/closure/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/opis/closure/tree/3.6.2",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/phpoption/phpoption@1.8.0",
            "type": "library",
            "name": "phpoption",
            "version": "1.8.0",
            "group": "phpoption",
            "description": "Option Type for PHP",
            "licenses": [
                {
                    "license": {
                        "id": "Apache-2.0",
                    },
                },
            ],
            "purl": "pkg:composer/phpoption/phpoption@1.8.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/schmittjoh/php-option.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=5455cb38aed4523f99977c4a12ef19da4bfe2a28)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/schmittjoh/php-option/zipball/5455cb38aed4523f99977c4a12ef19da4bfe2a28",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=5455cb38aed4523f99977c4a12ef19da4bfe2a28 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/schmittjoh/php-option/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/schmittjoh/php-option/tree/1.8.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/GrahamCampbell",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/phpoption/phpoption",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/psr/container@1.1.1",
            "type": "library",
            "name": "container",
            "version": "1.1.1",
            "group": "psr",
            "description": "Common Container Interface (PHP FIG PSR-11)",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/psr/container@1.1.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/container.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=8622567409010282b7aeebe4bb841fe98b58dcaf)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/php-fig/container/zipball/8622567409010282b7aeebe4bb841fe98b58dcaf",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=8622567409010282b7aeebe4bb841fe98b58dcaf & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://github.com/php-fig/container",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/php-fig/container/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/container/tree/1.1.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/psr/event-dispatcher@1.0.0",
            "type": "library",
            "name": "event-dispatcher",
            "version": "1.0.0",
            "group": "psr",
            "description": "Standard interfaces for event handling.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/psr/event-dispatcher@1.0.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/event-dispatcher.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=dbefd12671e8a14ec7f180cab83036ed26714bb0)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/php-fig/event-dispatcher/zipball/dbefd12671e8a14ec7f180cab83036ed26714bb0",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=dbefd12671e8a14ec7f180cab83036ed26714bb0 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/php-fig/event-dispatcher/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/event-dispatcher/tree/1.0.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/psr/http-message@1.0.1",
            "type": "library",
            "name": "http-message",
            "version": "1.0.1",
            "group": "psr",
            "description": "Common interface for HTTP messages",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/psr/http-message@1.0.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/http-message.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=f6561bf28d520154e4b0ec72be95418abe6d9363)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/php-fig/http-message/zipball/f6561bf28d520154e4b0ec72be95418abe6d9363",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=f6561bf28d520154e4b0ec72be95418abe6d9363 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://github.com/php-fig/http-message",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/http-message/tree/master",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/psr/log@1.1.4",
            "type": "library",
            "name": "log",
            "version": "1.1.4",
            "group": "psr",
            "description": "Common interface for logging libraries",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/psr/log@1.1.4",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/log.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=d49695b909c3b7628b6289db5479a1c204601f11)",
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/php-fig/log/zipball/d49695b909c3b7628b6289db5479a1c204601f11",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=d49695b909c3b7628b6289db5479a1c204601f11 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://github.com/php-fig/log",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/log/tree/1.1.4",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/psr/simple-cache@1.0.1",
            "type": "library",
            "name": "simple-cache",
            "version": "1.0.1",
            "group": "psr",
            "description": "Common interfaces for simple caching",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/psr/simple-cache@1.0.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/simple-cache.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=408d5eafb83c57f6365a3ca330ff23aa4a5fa39b)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/php-fig/simple-cache/zipball/408d5eafb83c57f6365a3ca330ff23aa4a5fa39b",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=408d5eafb83c57f6365a3ca330ff23aa4a5fa39b & sha1=UNDEFINED)",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/php-fig/simple-cache/tree/master",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/psy/psysh@0.10.12",
            "type": "library",
            "name": "psysh",
            "version": "0.10.12",
            "group": "psy",
            "description": "An interactive shell for modern PHP.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/psy/psysh@0.10.12",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/bobthecow/psysh.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=a0d9981aa07ecfcbea28e4bfa868031cca121e7d)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/bobthecow/psysh/zipball/a0d9981aa07ecfcbea28e4bfa868031cca121e7d",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=a0d9981aa07ecfcbea28e4bfa868031cca121e7d & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "http://psysh.org",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/bobthecow/psysh/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/bobthecow/psysh/tree/v0.10.12",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/ralouphie/getallheaders@3.0.3",
            "type": "library",
            "name": "getallheaders",
            "version": "3.0.3",
            "group": "ralouphie",
            "description": "A polyfill for getallheaders.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/ralouphie/getallheaders@3.0.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/ralouphie/getallheaders.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=120b605dfeb996808c31b6477290a714d356e822)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/ralouphie/getallheaders/zipball/120b605dfeb996808c31b6477290a714d356e822",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=120b605dfeb996808c31b6477290a714d356e822 & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/ralouphie/getallheaders/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/ralouphie/getallheaders/tree/develop",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/ramsey/collection@1.2.2",
            "type": "library",
            "name": "collection",
            "version": "1.2.2",
            "group": "ramsey",
            "description": "A PHP library for representing and manipulating collections.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/ramsey/collection@1.2.2",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/ramsey/collection.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=cccc74ee5e328031b15640b51056ee8d3bb66c0a)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/ramsey/collection/zipball/cccc74ee5e328031b15640b51056ee8d3bb66c0a",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=cccc74ee5e328031b15640b51056ee8d3bb66c0a & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/ramsey/collection/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/ramsey/collection/tree/1.2.2",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/ramsey",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/ramsey/collection",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/ramsey/uuid@4.2.3",
            "type": "library",
            "name": "uuid",
            "version": "4.2.3",
            "group": "ramsey",
            "description": "A PHP library for generating and working with universally unique identifiers (UUIDs).",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/ramsey/uuid@4.2.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/ramsey/uuid.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=fc9bb7fb5388691fd7373cd44dcb4d63bbcf24df)",
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/ramsey/uuid/zipball/fc9bb7fb5388691fd7373cd44dcb4d63bbcf24df",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=fc9bb7fb5388691fd7373cd44dcb4d63bbcf24df & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/ramsey/uuid/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/ramsey/uuid/tree/4.2.3",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/ramsey",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/ramsey/uuid",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/swiftmailer/swiftmailer@6.3.0",
            "type": "library",
            "name": "swiftmailer",
            "version": "6.3.0",
            "group": "swiftmailer",
            "description": "Swiftmailer, free feature-rich PHP mailer",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/swiftmailer/swiftmailer@6.3.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/swiftmailer/swiftmailer.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=8a5d5072dca8f48460fce2f4131fcc495eec654c)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/swiftmailer/swiftmailer/zipball/8a5d5072dca8f48460fce2f4131fcc495eec654c",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=8a5d5072dca8f48460fce2f4131fcc495eec654c & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://swiftmailer.symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/swiftmailer/swiftmailer/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/swiftmailer/swiftmailer/tree/v6.3.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/swiftmailer/swiftmailer",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/console@5.4.0",
            "type": "library",
            "name": "console",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Eases the creation of beautiful and testable command line interfaces",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/console@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/console.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=ec3661faca1d110d6c307e124b44f99ac54179e3)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/console/zipball/ec3661faca1d110d6c307e124b44f99ac54179e3",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=ec3661faca1d110d6c307e124b44f99ac54179e3 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/console/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/css-selector@5.4.0",
            "type": "library",
            "name": "css-selector",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Converts CSS selectors to XPath expressions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/css-selector@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/css-selector.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=44b933f98bb4b5220d10bed9ce5662f8c2d13dcc)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/css-selector/zipball/44b933f98bb4b5220d10bed9ce5662f8c2d13dcc",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=44b933f98bb4b5220d10bed9ce5662f8c2d13dcc & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/css-selector/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/deprecation-contracts@2.5.0",
            "type": "library",
            "name": "deprecation-contracts",
            "version": "2.5.0",
            "group": "symfony",
            "description": "A generic function and convention to trigger deprecation notices",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/deprecation-contracts@2.5.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/deprecation-contracts.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=6f981ee24cf69ee7ce9736146d1c57c2780598a8)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/deprecation-contracts/zipball/6f981ee24cf69ee7ce9736146d1c57c2780598a8",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=6f981ee24cf69ee7ce9736146d1c57c2780598a8 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/deprecation-contracts/tree/v2.5.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/error-handler@5.4.0",
            "type": "library",
            "name": "error-handler",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides tools to manage errors and ease debugging PHP code",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/error-handler@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/error-handler.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=8433fa3145ac78df88b87a4a539118e950828126)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/error-handler/zipball/8433fa3145ac78df88b87a4a539118e950828126",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=8433fa3145ac78df88b87a4a539118e950828126 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/error-handler/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/event-dispatcher@5.4.0",
            "type": "library",
            "name": "event-dispatcher",
            "version": "5.4.0",
            "group": "symfony",
            "description":
                "Provides tools that allow your application components to communicate with each other by dispatching events and listening to them",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/event-dispatcher@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/event-dispatcher.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=27d39ae126352b9fa3be5e196ccf4617897be3eb)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/event-dispatcher/zipball/27d39ae126352b9fa3be5e196ccf4617897be3eb",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=27d39ae126352b9fa3be5e196ccf4617897be3eb & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/event-dispatcher/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/event-dispatcher-contracts@2.5.0",
            "type": "library",
            "name": "event-dispatcher-contracts",
            "version": "2.5.0",
            "group": "symfony",
            "description": "Generic abstractions related to dispatching event",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/event-dispatcher-contracts@2.5.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/event-dispatcher-contracts.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=66bea3b09be61613cd3b4043a65a8ec48cfa6d2a)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/event-dispatcher-contracts/zipball/66bea3b09be61613cd3b4043a65a8ec48cfa6d2a",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=66bea3b09be61613cd3b4043a65a8ec48cfa6d2a & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/event-dispatcher-contracts/tree/v2.5.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/finder@5.4.0",
            "type": "library",
            "name": "finder",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Finds files and directories via an intuitive fluent interface",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/finder@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/finder.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=d2f29dac98e96a98be467627bd49c2efb1bc2590)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/finder/zipball/d2f29dac98e96a98be467627bd49c2efb1bc2590",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=d2f29dac98e96a98be467627bd49c2efb1bc2590 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/finder/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/http-foundation@5.4.0",
            "type": "library",
            "name": "http-foundation",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Defines an object-oriented layer for the HTTP specification",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/http-foundation@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/http-foundation.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=5ef86ac7927d2de08dc1e26eb91325f9ccbe6309)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/http-foundation/zipball/5ef86ac7927d2de08dc1e26eb91325f9ccbe6309",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=5ef86ac7927d2de08dc1e26eb91325f9ccbe6309 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/http-foundation/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/http-kernel@5.4.0",
            "type": "library",
            "name": "http-kernel",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides a structured process for converting a Request into a Response",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/http-kernel@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/http-kernel.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=e012f16688bcb151e965473a70d8ebaa8b1d15ea)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/http-kernel/zipball/e012f16688bcb151e965473a70d8ebaa8b1d15ea",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=e012f16688bcb151e965473a70d8ebaa8b1d15ea & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/http-kernel/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/mime@5.4.0",
            "type": "library",
            "name": "mime",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Allows manipulating MIME messages",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/mime@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/mime.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=d4365000217b67c01acff407573906ff91bcfb34)",
                },
                {
                    "type": "distribution",
                    "url": "https://api.github.com/repos/symfony/mime/zipball/d4365000217b67c01acff407573906ff91bcfb34",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=d4365000217b67c01acff407573906ff91bcfb34 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/mime/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-ctype@1.23.0",
            "type": "library",
            "name": "polyfill-ctype",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill for ctype functions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-ctype@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-ctype.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=46cd95797e9df938fdd2b03693b5fca5e64b01ce)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-ctype/zipball/46cd95797e9df938fdd2b03693b5fca5e64b01ce",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=46cd95797e9df938fdd2b03693b5fca5e64b01ce & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-ctype/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-iconv@1.23.0",
            "type": "library",
            "name": "polyfill-iconv",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill for the Iconv extension",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-iconv@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-iconv.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=63b5bb7db83e5673936d6e3b8b3e022ff6474933)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-iconv/zipball/63b5bb7db83e5673936d6e3b8b3e022ff6474933",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=63b5bb7db83e5673936d6e3b8b3e022ff6474933 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-iconv/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-intl-grapheme@1.23.1",
            "type": "library",
            "name": "polyfill-intl-grapheme",
            "version": "1.23.1",
            "group": "symfony",
            "description": "Symfony polyfill for intl's grapheme_* functions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-intl-grapheme@1.23.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-grapheme.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=16880ba9c5ebe3642d1995ab866db29270b36535)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-intl-grapheme/zipball/16880ba9c5ebe3642d1995ab866db29270b36535",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=16880ba9c5ebe3642d1995ab866db29270b36535 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-grapheme/tree/v1.23.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
            "type": "library",
            "name": "polyfill-intl-idn",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill for intl's idn_to_ascii and idn_to_utf8 functions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-idn.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=65bd267525e82759e7d8c4e8ceea44f398838e65)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-intl-idn/zipball/65bd267525e82759e7d8c4e8ceea44f398838e65",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=65bd267525e82759e7d8c4e8ceea44f398838e65 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-idn/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
            "type": "library",
            "name": "polyfill-intl-normalizer",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill for intl's Normalizer class and related functions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-normalizer.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=8590a5f561694770bdcd3f9b5c69dde6945028e8)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-intl-normalizer/zipball/8590a5f561694770bdcd3f9b5c69dde6945028e8",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=8590a5f561694770bdcd3f9b5c69dde6945028e8 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-intl-normalizer/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-mbstring@1.23.1",
            "type": "library",
            "name": "polyfill-mbstring",
            "version": "1.23.1",
            "group": "symfony",
            "description": "Symfony polyfill for the Mbstring extension",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-mbstring@1.23.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-mbstring.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=9174a3d80210dca8daa7f31fec659150bbeabfc6)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-mbstring/zipball/9174a3d80210dca8daa7f31fec659150bbeabfc6",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=9174a3d80210dca8daa7f31fec659150bbeabfc6 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-mbstring/tree/v1.23.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-php72@1.23.0",
            "type": "library",
            "name": "polyfill-php72",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill backporting some PHP 7.2+ features to lower PHP versions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-php72@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php72.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=9a142215a36a3888e30d0a9eeea9766764e96976)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-php72/zipball/9a142215a36a3888e30d0a9eeea9766764e96976",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=9a142215a36a3888e30d0a9eeea9766764e96976 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php72/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-php73@1.23.0",
            "type": "library",
            "name": "polyfill-php73",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill backporting some PHP 7.3+ features to lower PHP versions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-php73@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php73.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=fba8933c384d6476ab14fb7b8526e5287ca7e010)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-php73/zipball/fba8933c384d6476ab14fb7b8526e5287ca7e010",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=fba8933c384d6476ab14fb7b8526e5287ca7e010 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php73/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-php80@1.23.1",
            "type": "library",
            "name": "polyfill-php80",
            "version": "1.23.1",
            "group": "symfony",
            "description": "Symfony polyfill backporting some PHP 8.0+ features to lower PHP versions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-php80@1.23.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php80.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=1100343ed1a92e3a38f9ae122fc0eb21602547be)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-php80/zipball/1100343ed1a92e3a38f9ae122fc0eb21602547be",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=1100343ed1a92e3a38f9ae122fc0eb21602547be & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php80/tree/v1.23.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/polyfill-php81@1.23.0",
            "type": "library",
            "name": "polyfill-php81",
            "version": "1.23.0",
            "group": "symfony",
            "description": "Symfony polyfill backporting some PHP 8.1+ features to lower PHP versions",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/polyfill-php81@1.23.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php81.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=e66119f3de95efc359483f810c4c3e6436279436)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/polyfill-php81/zipball/e66119f3de95efc359483f810c4c3e6436279436",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=e66119f3de95efc359483f810c4c3e6436279436 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/polyfill-php81/tree/v1.23.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/process@5.4.0",
            "type": "library",
            "name": "process",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Executes commands in sub-processes",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/process@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/process.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=5be20b3830f726e019162b26223110c8f47cf274)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/process/zipball/5be20b3830f726e019162b26223110c8f47cf274",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=5be20b3830f726e019162b26223110c8f47cf274 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/process/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/routing@5.4.0",
            "type": "library",
            "name": "routing",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Maps an HTTP request to a set of configuration variables",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/routing@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/routing.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=9eeae93c32ca86746e5d38f3679e9569981038b1)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/routing/zipball/9eeae93c32ca86746e5d38f3679e9569981038b1",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=9eeae93c32ca86746e5d38f3679e9569981038b1 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/routing/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/service-contracts@2.5.0",
            "type": "library",
            "name": "service-contracts",
            "version": "2.5.0",
            "group": "symfony",
            "description": "Generic abstractions related to writing services",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/service-contracts@2.5.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/service-contracts.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=1ab11b933cd6bc5464b08e81e2c5b07dec58b0fc)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/service-contracts/zipball/1ab11b933cd6bc5464b08e81e2c5b07dec58b0fc",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=1ab11b933cd6bc5464b08e81e2c5b07dec58b0fc & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/service-contracts/tree/v2.5.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/string@5.4.0",
            "type": "library",
            "name": "string",
            "version": "5.4.0",
            "group": "symfony",
            "description":
                "Provides an object-oriented API to strings and deals with bytes, UTF-8 code points and grapheme clusters in a unified way",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/string@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/string.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=9ffaaba53c61ba75a3c7a3a779051d1e9ec4fd2d)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/string/zipball/9ffaaba53c61ba75a3c7a3a779051d1e9ec4fd2d",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=9ffaaba53c61ba75a3c7a3a779051d1e9ec4fd2d & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/string/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/translation@5.4.0",
            "type": "library",
            "name": "translation",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides tools to internationalize your application",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/translation@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/translation.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=6fe32b10e912a518805bc9eafc2a87145773cf13)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/translation/zipball/6fe32b10e912a518805bc9eafc2a87145773cf13",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=6fe32b10e912a518805bc9eafc2a87145773cf13 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/translation/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/translation-contracts@2.5.0",
            "type": "library",
            "name": "translation-contracts",
            "version": "2.5.0",
            "group": "symfony",
            "description": "Generic abstractions related to translation",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/translation-contracts@2.5.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/translation-contracts.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=d28150f0f44ce854e942b671fc2620a98aae1b1e)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/translation-contracts/zipball/d28150f0f44ce854e942b671fc2620a98aae1b1e",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=d28150f0f44ce854e942b671fc2620a98aae1b1e & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/translation-contracts/tree/v2.5.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/symfony/var-dumper@5.4.0",
            "type": "library",
            "name": "var-dumper",
            "version": "5.4.0",
            "group": "symfony",
            "description": "Provides mechanisms for walking through any arbitrary PHP variable",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/symfony/var-dumper@5.4.0",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/var-dumper.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=89ab66eaef230c9cd1992de2e9a1b26652b127b9)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/symfony/var-dumper/zipball/89ab66eaef230c9cd1992de2e9a1b26652b127b9",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=89ab66eaef230c9cd1992de2e9a1b26652b127b9 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://symfony.com",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/symfony/var-dumper/tree/v5.4.0",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://symfony.com/sponsor",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/fabpot",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/tijsverkoyen/css-to-inline-styles@2.2.3",
            "type": "library",
            "name": "css-to-inline-styles",
            "version": "2.2.3",
            "group": "tijsverkoyen",
            "description":
                "CssToInlineStyles is a class that enables you to convert HTML-pages/files into HTML-pages/files with inline styles. This is very useful when you're sending emails.",
            "licenses": [
                {
                    "license": {
                        "id": "BSD-3-Clause",
                    },
                },
            ],
            "purl": "pkg:composer/tijsverkoyen/css-to-inline-styles@2.2.3",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/tijsverkoyen/CssToInlineStyles.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=b43b05cf43c1b6d849478965062b6ef73e223bb5)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/tijsverkoyen/CssToInlineStyles/zipball/b43b05cf43c1b6d849478965062b6ef73e223bb5",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=b43b05cf43c1b6d849478965062b6ef73e223bb5 & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://github.com/tijsverkoyen/CssToInlineStyles",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/tijsverkoyen/CssToInlineStyles/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/tijsverkoyen/CssToInlineStyles/tree/2.2.3",
                    "comment": "As set via `support.source` in composer package definition.",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/vlucas/phpdotenv@4.2.1",
            "type": "library",
            "name": "phpdotenv",
            "version": "4.2.1",
            "group": "vlucas",
            "description":
                "Loads environment variables from `.env` to `getenv()`, `$_ENV` and `$_SERVER` automagically.",
            "licenses": [
                {
                    "license": {
                        "id": "BSD-3-Clause",
                    },
                },
            ],
            "purl": "pkg:composer/vlucas/phpdotenv@4.2.1",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/vlucas/phpdotenv.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=d38f4d1edcbe32515a0ad593cbd4c858e337263c)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/vlucas/phpdotenv/zipball/d38f4d1edcbe32515a0ad593cbd4c858e337263c",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=d38f4d1edcbe32515a0ad593cbd4c858e337263c & sha1=UNDEFINED)",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/vlucas/phpdotenv/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/vlucas/phpdotenv/tree/v4.2.1",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://github.com/GrahamCampbell",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/vlucas/phpdotenv",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
        {
            "bom-ref": "pkg:composer/voku/portable-ascii@1.5.6",
            "type": "library",
            "name": "portable-ascii",
            "version": "1.5.6",
            "group": "voku",
            "description": "Portable ASCII library - performance optimized (ascii) string functions for php.",
            "licenses": [
                {
                    "license": {
                        "id": "MIT",
                    },
                },
            ],
            "purl": "pkg:composer/voku/portable-ascii@1.5.6",
            "externalReferences": [
                {
                    "type": "distribution",
                    "url": "https://github.com/voku/portable-ascii.git",
                    "comment":
                        "As detected by composer's `getSourceUrls()` (type=git & reference=80953678b19901e5165c56752d087fc11526017c)",
                },
                {
                    "type": "distribution",
                    "url":
                        "https://api.github.com/repos/voku/portable-ascii/zipball/80953678b19901e5165c56752d087fc11526017c",
                    "comment":
                        "As detected by composer's `getDistUrls()` (type=zip & reference=80953678b19901e5165c56752d087fc11526017c & sha1=UNDEFINED)",
                },
                {
                    "type": "website",
                    "url": "https://github.com/voku/portable-ascii",
                    "comment": "As set via `homepage` in composer package definition.",
                },
                {
                    "type": "issue-tracker",
                    "url": "https://github.com/voku/portable-ascii/issues",
                    "comment": "As set via `support.issues` in composer package definition.",
                },
                {
                    "type": "distribution",
                    "url": "https://github.com/voku/portable-ascii/tree/1.5.6",
                    "comment": "As set via `support.source` in composer package definition.",
                },
                {
                    "type": "other",
                    "url": "https://www.paypal.me/moelleken",
                    "comment": "As set via `funding` in composer package definition. (type=custom)",
                },
                {
                    "type": "other",
                    "url": "https://github.com/voku",
                    "comment": "As set via `funding` in composer package definition. (type=github)",
                },
                {
                    "type": "other",
                    "url": "https://opencollective.com/portable-ascii",
                    "comment": "As set via `funding` in composer package definition. (type=open_collective)",
                },
                {
                    "type": "other",
                    "url": "https://www.patreon.com/voku",
                    "comment": "As set via `funding` in composer package definition. (type=patreon)",
                },
                {
                    "type": "other",
                    "url": "https://tidelift.com/funding/github/packagist/voku/portable-ascii",
                    "comment": "As set via `funding` in composer package definition. (type=tidelift)",
                },
            ],
        },
    ],
    "dependencies": [
        {
            "ref": "pkg:composer/asm89/stack-cors@1.3.0",
            "dependsOn": [
                "pkg:composer/symfony/http-foundation@5.4.0",
                "pkg:composer/symfony/http-kernel@5.4.0",
            ],
        },
        {
            "ref": "pkg:composer/brick/math@0.9.3",
        },
        {
            "ref": "pkg:composer/doctrine/inflector@2.0.4",
        },
        {
            "ref": "pkg:composer/doctrine/lexer@1.2.1",
        },
        {
            "ref": "pkg:composer/dragonmantank/cron-expression@2.3.1",
        },
        {
            "ref": "pkg:composer/egulias/email-validator@2.1.25",
            "dependsOn": [
                "pkg:composer/doctrine/lexer@1.2.1",
                "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
            ],
        },
        {
            "ref": "pkg:composer/fideloper/proxy@4.4.1",
        },
        {
            "ref": "pkg:composer/fruitcake/laravel-cors@1.0.6",
            "dependsOn": [
                "pkg:composer/asm89/stack-cors@1.3.0",
                "pkg:composer/symfony/http-foundation@5.4.0",
                "pkg:composer/symfony/http-kernel@5.4.0",
            ],
        },
        {
            "ref": "pkg:composer/guzzlehttp/guzzle@6.5.5",
            "dependsOn": [
                "pkg:composer/guzzlehttp/promises@1.5.1",
                "pkg:composer/guzzlehttp/psr7@1.8.3",
                "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
            ],
        },
        {
            "ref": "pkg:composer/guzzlehttp/promises@1.5.1",
        },
        {
            "ref": "pkg:composer/guzzlehttp/psr7@1.8.3",
            "dependsOn": [
                "pkg:composer/psr/http-message@1.0.1",
                "pkg:composer/ralouphie/getallheaders@3.0.3",
            ],
        },
        {
            "ref": "pkg:composer/laravel/framework@7.30.5",
            "dependsOn": [
                "pkg:composer/doctrine/inflector@2.0.4",
                "pkg:composer/dragonmantank/cron-expression@2.3.1",
                "pkg:composer/egulias/email-validator@2.1.25",
                "pkg:composer/league/commonmark@1.6.6",
                "pkg:composer/league/flysystem@1.1.8",
                "pkg:composer/monolog/monolog@2.3.5",
                "pkg:composer/nesbot/carbon@2.55.2",
                "pkg:composer/opis/closure@3.6.2",
                "pkg:composer/psr/container@1.1.1",
                "pkg:composer/psr/simple-cache@1.0.1",
                "pkg:composer/ramsey/uuid@4.2.3",
                "pkg:composer/swiftmailer/swiftmailer@6.3.0",
                "pkg:composer/symfony/console@5.4.0",
                "pkg:composer/symfony/error-handler@5.4.0",
                "pkg:composer/symfony/finder@5.4.0",
                "pkg:composer/symfony/http-foundation@5.4.0",
                "pkg:composer/symfony/http-kernel@5.4.0",
                "pkg:composer/symfony/mime@5.4.0",
                "pkg:composer/symfony/polyfill-php73@1.23.0",
                "pkg:composer/symfony/process@5.4.0",
                "pkg:composer/symfony/routing@5.4.0",
                "pkg:composer/symfony/var-dumper@5.4.0",
                "pkg:composer/tijsverkoyen/css-to-inline-styles@2.2.3",
                "pkg:composer/vlucas/phpdotenv@4.2.1",
                "pkg:composer/voku/portable-ascii@1.5.6",
            ],
        },
        {
            "ref": "pkg:composer/laravel/laravel@7.12.0",
            "dependsOn": [
                "pkg:composer/fideloper/proxy@4.4.1",
                "pkg:composer/fruitcake/laravel-cors@1.0.6",
                "pkg:composer/guzzlehttp/guzzle@6.5.5",
                "pkg:composer/laravel/framework@7.30.5",
                "pkg:composer/laravel/tinker@2.6.2",
            ],
        },
        {
            "ref": "pkg:composer/laravel/tinker@2.6.2",
            "dependsOn": [
                "pkg:composer/psy/psysh@0.10.12",
                "pkg:composer/symfony/var-dumper@5.4.0",
            ],
        },
        {
            "ref": "pkg:composer/league/commonmark@1.6.6",
        },
        {
            "ref": "pkg:composer/league/flysystem@1.1.8",
            "dependsOn": [
                "pkg:composer/league/mime-type-detection@1.9.0",
            ],
        },
        {
            "ref": "pkg:composer/league/mime-type-detection@1.9.0",
        },
        {
            "ref": "pkg:composer/monolog/monolog@2.3.5",
            "dependsOn": [
                "pkg:composer/psr/log@1.1.4",
            ],
        },
        {
            "ref": "pkg:composer/nesbot/carbon@2.55.2",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
                "pkg:composer/symfony/translation@5.4.0",
            ],
        },
        {
            "ref": "pkg:composer/nikic/php-parser@4.13.2",
        },
        {
            "ref": "pkg:composer/opis/closure@3.6.2",
        },
        {
            "ref": "pkg:composer/phpoption/phpoption@1.8.0",
        },
        {
            "ref": "pkg:composer/psr/container@1.1.1",
        },
        {
            "ref": "pkg:composer/psr/event-dispatcher@1.0.0",
        },
        {
            "ref": "pkg:composer/psr/http-message@1.0.1",
        },
        {
            "ref": "pkg:composer/psr/log@1.1.4",
        },
        {
            "ref": "pkg:composer/psr/simple-cache@1.0.1",
        },
        {
            "ref": "pkg:composer/psy/psysh@0.10.12",
            "dependsOn": [
                "pkg:composer/nikic/php-parser@4.13.2",
                "pkg:composer/symfony/console@5.4.0",
                "pkg:composer/symfony/var-dumper@5.4.0",
            ],
        },
        {
            "ref": "pkg:composer/ralouphie/getallheaders@3.0.3",
        },
        {
            "ref": "pkg:composer/ramsey/collection@1.2.2",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-php81@1.23.0",
            ],
        },
        {
            "ref": "pkg:composer/ramsey/uuid@4.2.3",
            "dependsOn": [
                "pkg:composer/brick/math@0.9.3",
                "pkg:composer/ramsey/collection@1.2.2",
                "pkg:composer/symfony/polyfill-ctype@1.23.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/swiftmailer/swiftmailer@6.3.0",
            "dependsOn": [
                "pkg:composer/egulias/email-validator@2.1.25",
                "pkg:composer/symfony/polyfill-iconv@1.23.0",
                "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/console@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php73@1.23.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
                "pkg:composer/symfony/service-contracts@2.5.0",
                "pkg:composer/symfony/string@5.4.0",
            ],
        },
        {
            "ref": "pkg:composer/symfony/css-selector@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/deprecation-contracts@2.5.0",
        },
        {
            "ref": "pkg:composer/symfony/error-handler@5.4.0",
            "dependsOn": [
                "pkg:composer/psr/log@1.1.4",
                "pkg:composer/symfony/var-dumper@5.4.0",
            ],
        },
        {
            "ref": "pkg:composer/symfony/event-dispatcher@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/event-dispatcher-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/event-dispatcher-contracts@2.5.0",
            "dependsOn": [
                "pkg:composer/psr/event-dispatcher@1.0.0",
            ],
        },
        {
            "ref": "pkg:composer/symfony/finder@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/http-foundation@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/http-kernel@5.4.0",
            "dependsOn": [
                "pkg:composer/psr/log@1.1.4",
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/error-handler@5.4.0",
                "pkg:composer/symfony/event-dispatcher@5.4.0",
                "pkg:composer/symfony/http-foundation@5.4.0",
                "pkg:composer/symfony/polyfill-ctype@1.23.0",
                "pkg:composer/symfony/polyfill-php73@1.23.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/mime@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/polyfill-ctype@1.23.0",
        },
        {
            "ref": "pkg:composer/symfony/polyfill-iconv@1.23.0",
        },
        {
            "ref": "pkg:composer/symfony/polyfill-intl-grapheme@1.23.1",
        },
        {
            "ref": "pkg:composer/symfony/polyfill-intl-idn@1.23.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
                "pkg:composer/symfony/polyfill-php72@1.23.0",
            ],
        },
        {
            "ref": "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
        },
        {
            "ref": "pkg:composer/symfony/polyfill-mbstring@1.23.1",
        },
        {
            "ref": "pkg:composer/symfony/polyfill-php72@1.23.0",
        },
        {
            "ref": "pkg:composer/symfony/polyfill-php73@1.23.0",
        },
        {
            "ref": "pkg:composer/symfony/polyfill-php80@1.23.1",
        },
        {
            "ref": "pkg:composer/symfony/polyfill-php81@1.23.0",
        },
        {
            "ref": "pkg:composer/symfony/process@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/routing@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/service-contracts@2.5.0",
            "dependsOn": [
                "pkg:composer/psr/container@1.1.1",
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
            ],
        },
        {
            "ref": "pkg:composer/symfony/string@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-ctype@1.23.0",
                "pkg:composer/symfony/polyfill-intl-grapheme@1.23.1",
                "pkg:composer/symfony/polyfill-intl-normalizer@1.23.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/symfony/translation@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/deprecation-contracts@2.5.0",
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
                "pkg:composer/symfony/translation-contracts@2.5.0",
            ],
        },
        {
            "ref": "pkg:composer/symfony/translation-contracts@2.5.0",
        },
        {
            "ref": "pkg:composer/symfony/var-dumper@5.4.0",
            "dependsOn": [
                "pkg:composer/symfony/polyfill-mbstring@1.23.1",
                "pkg:composer/symfony/polyfill-php80@1.23.1",
            ],
        },
        {
            "ref": "pkg:composer/tijsverkoyen/css-to-inline-styles@2.2.3",
            "dependsOn": [
                "pkg:composer/symfony/css-selector@5.4.0",
            ],
        },
        {
            "ref": "pkg:composer/vlucas/phpdotenv@4.2.1",
            "dependsOn": [
                "pkg:composer/phpoption/phpoption@1.8.0",
                "pkg:composer/symfony/polyfill-ctype@1.23.0",
            ],
        },
        {
            "ref": "pkg:composer/voku/portable-ascii@1.5.6",
        },
        {
            "ref": "pkg:composer/cyclonedx/cyclonedx-php-composer-demo@dev-master",
            "dependsOn": [
                "pkg:composer/laravel/laravel@7.12.0",
            ],
        },
    ],
};
