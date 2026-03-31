import { ServerSideRender, useServerSideRender } from "@wordpress/server-side-render";

<ServerSideRender
    block="my/block"
    className="my-block"
    ErrorResponsePlaceholder={(props) => <p>An error occurred while loading {props.block}: {props.message}</p>}
/>;

function MyServerSideRender({ attributes, block }: { attributes: Record<string, unknown>; block: string }) {
    const { content, status, error } = useServerSideRender({
        attributes,
        block,
    });

    return <code>{content}</code>;
}
