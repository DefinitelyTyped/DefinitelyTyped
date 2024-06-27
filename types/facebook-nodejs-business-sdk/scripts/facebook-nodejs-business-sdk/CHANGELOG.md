# Changelog

All notable changes to this project will be documented in this file.


## Unreleased

## v17.0.0


### Added
- `advanced_measurement_table` field to Event for Conversions API.

## v13.0.0

### Added
- Support POST request path override for ad objects

## v12.0.0
### Changed
- Moved NodeJs sdk to use jest library for unit testing.

## v11.0.0
### Changed
- Fixed sending null values for UserData multi-value fields in Conversions API.
- Graph API call upgrade to [v11.0]https://developers.facebook.com/docs/graph-api/changelog/version11.0

## v10.0.1
### Changed
- Fixed bug where `0` for CustomData.value was normalizing to `undefined` in Conversions API.

### Added
- Support for sending multiple values for certain UserData parameters to Conversions API.

## v10.0.0
### Changed
- Graph API call upgrade to [v10.0](https://developers.facebook.com/docs/graph-api/changelog/version10.0)

## v9.0.0
### Changed
- Graph API call upgrade to [v9.0](https://developers.facebook.com/docs/graph-api/changelog/version9.0)

### Added
- `delivery_category` field to Content for Conversions API.

## v8.0.3
### Changed
- Stop validating and hashing already hashed input values for Conversions API

## v8.0.2
### Added
- Added HttpServiceInterface to enable the default request object to be overridden by a user-defined HTTP Request Service object. Available for Conversions API create event requests.
- Added batching support to Conversions API. Create batched event requests by using BatchProcessor.

## v8.0.0
### Changed
- Graph API call upgrade to [v8.0](https://developers.facebook.com/docs/graph-api/changelog/version8.0)

### Added
- `delivery_category` field in custom_data section for Conversions API(formerly Serverside API).

## v7.0.2
### Added
- Added support for data processing options in Serverside API. For more details see : https://developers.facebook.com/docs/marketing-apis/data-processing-options

## v7.0.0
### Changed
- Graph API call upgrade to [v7.0](https://developers.facebook.com/docs/graph-api/changelog/version7.0)

## v6.0.0
### Changed
- Graph API call upgrade to [v6.0](https://developers.facebook.com/docs/graph-api/changelog/version6.0)

## v5.0.4
### Added
- Add setter methods for Server-side API

## v5.0.3
### Added
- Add strongly typed Server-side API

## v5.0.2
### Added
- Add the ability to read headers from response and `FacebookRequestError`.
- Add `CrashRepoter`, more context available [here](https://developers.facebook.com/docs/business-sdk/guides/crash-reports)

## v5.0.0
### Changed
- Graph API call upgrade to [v5.0](https://developers.facebook.com/docs/graph-api/changelog/version5.0)

## v4.0.0
### Changed
- Graph API call upgrade to [v4.0](https://developers.facebook.com/docs/graph-api/changelog/version4.0)

## v3.3.4
### Added
- Support [flow](https://flow.org/)

## v3.3.3

## v3.3.2

## v3.3.1
### Changed
- Remove list of API call from Business SDK, any [these APIs](https://developers.facebook.com/docs/graph-api/changelog/4-30-2019-endpoint-deprecations) included in Business SDK will be deprecated.

## v3.3.0
### Changed
- Graph API call upgrade to [v3.3](https://developers.facebook.com/docs/graph-api/changelog/version3.3)

