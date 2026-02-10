import { ServerSideRender } from "@wordpress/server-side-render";

<ServerSideRender
    block="my/block"
    className="my-block"
    ErrorResponsePlaceholder={(props) => <p>An error occurred while loading {props.block}: {props.message}</p>}
/>;
