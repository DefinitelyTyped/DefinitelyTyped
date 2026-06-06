# Type Definitions - Tableau Javascript API

The Tableau Javascript API does not currently include type definitions which makes writing a Tableau embedded application using Typescript less efficient and reliable. This project aims to bridge that gap.

**These type definitions are a personal project and are neither owned nor supported by Tableau. If you have issues or questions, please submit an issue in this repo. Please do not reach out to Tableau Support.**

## Tableau version

These type definitions were built based on version 2.8.1 of the Tableau Javascript API (this corresponds to version 2021.1 of Tableau Server). While you can _probably_ use these definitions for any 2.x version, just be aware that some of the functionality in 2.8.1 was not available in prior 2.x versions. So, the autocomplete suggestions may be inaccurate if you're using a previous version.

## Usage

Just install the types using one of the commands below and you should be all set!

`npm install @types/tableau-js-api --save-dev`

`yarn add @types/tableau-js-api --dev`

The type definitions are defined as a global namespace so, once you have installed them, you should be able to reference `window.tableau` and get correct types and auto-complete suggestions (depending on which editor/IDE you're using).

## Maintenance and updates

Tableau's Javascript API uses semantic versioning. So, to use the current version at the time of writing this, 2.8.1, the major version is 2, the minor version is 8, and the patch/bugfix version is 1.

My goal is to update these definitions for each major and minor version change.

## About me

I work for Tableau but I am not a Software Engineer. I work as a Solutions Engineer where I support large, global services companies. My primary focus and responsibilities are around embedded use cases and, generally, developing around and integrating with Tableau.

I also love Typescript so I confess that this project has some selfish roots. But I'm hopeful that it will help any others who are out there using Typescript to build around Tableau.
