import * as Duo from "duo_web_sdk";

Duo.init({
    host: "http://example.com",
    sig_request: "sig_request",
    iframe: "iframe_id",
    iframeContainer: "container_id",
    iframeAttributes: {
      title: "title",
      height: "200px",
      width: "200px",
    },
    post_action: "/post_destination",
    post_argument: "post_argument",
    submit_callback: (duo_form: HTMLFormElement) => duo_form,
});

Duo._onReady(() => {});
Duo._parseSigRequest("sig");
Duo._isDuoMessage(new MessageEvent("event"));
Duo._doPostBack("response");
