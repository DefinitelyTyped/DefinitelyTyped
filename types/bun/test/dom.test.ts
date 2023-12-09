import { INSPECT_MAX_BYTES } from "buffer";

INSPECT_MAX_BYTES;

{
    new Blob([]);
}
{
    new MessagePort();
}
{
    new MessageChannel();
}
{
    new BroadcastChannel("zxgdfg");
}

{
    new Response("asdf");
}
Response.json;
