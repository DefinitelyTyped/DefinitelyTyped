import * as React from "react";
import Highlight from "react-highlight";

export const _ = () => <>
	<Highlight className="javascript" />
	<Highlight className="typescript">
		`console.log("Hello, world!");`
	</Highlight>
</>;
