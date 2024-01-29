import * as React from "react";
import ContentContainer from "terra-content-container";

const AllProps = (
    <ContentContainer header={<div />} footer="footer" fill={false}>
        <div>content</div>
    </ContentContainer>
);

const refCallback: (node: HTMLDivElement | null) => void = () => {};
const ScrollRefCallback = <ContentContainer scrollRefCallback={refCallback} />;

const refObject: React.RefObject<HTMLDivElement> = { current: null };
const ScrollRefObject = <ContentContainer scrollRefCallback={refObject} />;

const NullRef = <ContentContainer scrollRefCallback={null} />;

const NoProps = <ContentContainer />;
