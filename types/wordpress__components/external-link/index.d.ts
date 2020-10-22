import { ComponentType, HTMLProps } from 'react';

declare namespace ExternalLink {
    type Props = HTMLProps<HTMLAnchorElement>;
}
declare const ExternalLink: ComponentType<ExternalLink.Props>;

export default ExternalLink;
