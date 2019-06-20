// Type definitions for react-gravatar 2.6
// Project: http://kyleamathews.github.io/react-gravatar/, https://github.com/kyleamathews/react-gravatar
// Definitions by: invliD <https://github.com/invliD>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace Gravatar;

export = Gravatar;

/**
 * React component for rendering a gravatar profile image. Adjusts automatically to HiDPI displays.
 */
declare class Gravatar extends React.Component<Gravatar.Props> {
	static readonly displayName: string;

	static readonly defaultProps: Gravatar.Props;

	render(): JSX.Element | null;
}

declare namespace Gravatar {
	type DefaultImage = "404" | "mm" | "identicon" | "monsterid" | "wavatar" | "retro" | "blank";
	type Rating = "g" | "pg" | "r" | "x";

	interface Props extends Partial<JSX.IntrinsicElements['img']> {
		/**
		 * The email address used to look up the Gravatar image.
		 * If you wish to avoid sending an email address to the client, you can compute the md5 hash on the server and
		 * pass the hash to the component using the `md5` prop instead of the `email` prop.
		 */
		email?: string;

		/**
		 * The md5 hash of the email address used to look up the Gravatar image.
		 * If you wish to avoid sending an email address to the client, you can compute the md5 hash on the server and
		 * pass the hash to the component using the `md5` prop instead of the `email` prop.
		 */
		md5?: string;

		/**
		 * By default, images are presented at 50px by 50px if no size prop is supplied.
		 *
		 * @default 50
		 * @see https://gravatar.com/site/implement/images/#size
		 */
		size?: number;

		/**
		 * Gravatar allows users to self-rate their images so that they can indicate if an image is appropriate for a
		 * certain audience. By default, only `g` rated images are displayed unless you indicate that you would like
		 * to see higher ratings.
		 *
		 * @default "g"
		 * @see https://gravatar.com/site/implement/images/#rating
		 */
		rating?: Rating;

		/**
		 * Gravatar has a number of built in options which you can use as defaults when an email address has no
		 * matching Gravatar image.
		 *
		 * @default "retro"
		 * @see https://gravatar.com/site/implement/images/#default-image
		 */
		default?: DefaultImage;

		/**
		 * The protocol used to fetch the Gravatar image. Should be one of `http://`, `https://` or `//` (default).
		 *
		 * @default "//"
		 * @see https://gravatar.com/site/implement/images/#secure-images
		 */
		protocol?: string;

		className?: string;
		style?: React.CSSProperties;
	}
}
