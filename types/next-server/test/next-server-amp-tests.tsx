import * as React from "react";
import { withAmp, useAmp } from "next-server/amp";

function HomePage() {
    return <p>Welcome to AMP + Next.js.</p>;
}

// 1. `withAmp()`
export const WithAmp = withAmp(HomePage);

// 2. `withAmp()` + config
export const WithHybridAmp = withAmp(HomePage, { hybrid: true });

// 3. `useAmp()` hook
export function Image({ src, width, height }: any) {
    const isAmp = useAmp();

    // The 'amp-img' element is not in the JSX namespace, so for now we
    // use `React.createElement()` to construct the amp-img element.
    return isAmp ? React.createElement('amp-img', { src, width, height }) : (
        <img src={src} width={width} height={height} />
    );
}
