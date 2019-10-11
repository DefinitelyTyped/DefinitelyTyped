// Project: https://github.com/ragingwind/next-manifest
// Definitions by: Matt <https://github.com/mahowa>

declare module 'next-manifest/manifest' {
    import { ReactElement } from "react";

    export default function Manifest(props: {
        href: string,
        themeColor: string,
        initialScale: string
    }): ReactElement
}
