# CDS Type Definition Library

## Overview

This fork of the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) repository contains specialised type definitions for the Consumer Data Standards (CDS) to support TypeScript projects within the CDR ecosystem. These definitions are aligned with the published [Consumer Data Standards](https://consumerdatastandardsaustralia.github.io/standards/#introduction), ensuring accurate interface representations for CDR API structures.

## Using the Type Definitions

The Data Standards Body publishes the Type Definitions as a [npm package](https://www.npmjs.com/package/@types/consumer-data-standards). To use these type definitions in your TypeScript projects, you can install them via npm as part of your development dependencies. Please refer to the [Quick Start Guide](#quick-start-guide) section below for more information. 

This tool:

- is maintained regularly to ensure compatibility with the latest Consumer Data Standards.
- assists Data Holders with regulatory adherence by providing TypeScript type enforcement that reduces errors, increases code quality, and improves development efficiency.

## Quick Start Guide

Please follow these steps to integrate the CDR-specific type definitions into your TypeScript projects:

1. **Install** via npm or Yarn: Depending on your preference, you can use npm or Yarn to install the CDS type definitions package published to npm.
    
    ```bash
    npm install @types/consumer-data-standards
    ```
    
    Or
    
    ```bash
    yarn install @types/consumer-data-standards
    ```
    
2. **Usage**: Utilise the types in your TypeScript code as needed:
    
    ```tsx
    import { YourType } from 'your-package';
    
    function processData(data: YourType) {
    // your code here
    }
    ```
    
3. **Stay Updated**: Regularly check for updates to ensure you have the latest type definitions.


## Reporting Issues

Encountered an issue? We're here to help. Please visit our [issue reporting guidelines](https://d61cds.notion.site/Issue-Reporting-Guidelines-71a329a0658c4b69a232eab95822509b?pvs=4) for submitting an issue.

## Stay Updated

Join our newsletter to receive the latest updates, release notes, and alerts. [Subscribe here](https://consumerdatastandards.us18.list-manage.com/subscribe?u=fb3bcb1ec5662d9767ab3c414&id=a4414b3906).

## Disclaimer

The artefacts in this repository are offered without warranty or liability, in accordance with the [MIT licence.](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE)

[The Data Standards Body](https://consumerdatastandards.gov.au/about/) (DSB) develops these artefacts in the course of its work, in order to perform quality assurance on the Australian Consumer Data Right Standards (Data Standards).

The DSB makes this repository, and its artefacts, public [on a non-commercial basis](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE) in the interest of supporting the participants in the CDR ecosystem.

The resources of the DSB are primarily directed towards assisting the [Data Standards Chair](https://consumerdatastandards.gov.au/about/) for [developing the Data Standards](https://github.com/ConsumerDataStandardsAustralia/standards).

Consequently, the development work provided on the artefacts in this repository is on a best-effort basis, and the DSB acknowledges the use of these tools alone is not sufficient for, nor should they be relied upon with respect to [accreditation](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/cdr-draft-accreditation-guidelines), conformance, or compliance purposes.
