import {
    XummGetPayloadResponse,
    XummPostPayloadBodyJson,
    XummPostPayloadBodyBlob,
    XummPostPayloadResponse,
    XummDeletePayloadResponse,
    XummWebhookBody,
    XummWebsocketBody,
    XummApiError
} from 'xumm-api';

const payloadBodyToPostWithJsonTx: XummPostPayloadBodyJson = {
    options: {
        submit: true,
        multisign: false,
        expire: 100,
        return_url: {
            app: "https://app.app/?payload={id}&customIdent={cid}&txid={txid}&hex={txblob}",
            web: "https://web.web/?payload={id}&customIdent={cid}&txid={txid}&hex={txblob}"
        }
    },
    custom_meta: {
        identifier: "some_identifier_1337",
        blob: {
            country: "Netherlands",
            session: "ABCD1234"
        },
        instruction: "Please sign this 🍻"
    },
    user_token: "9513aebc-03bd-464f-87c5-d54f4e0d7250",
    txjson: {
        TransactionType: "Payment",
        Account: "",
        Destination: "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY",
        Amount: "50000"
    }
};

const payloadBodyToPostWithTxBlob: XummPostPayloadBodyBlob = {
    options: {
        multisign: true,
        return_url: {
            app: "https://app.app/?payload={id}&customIdent={cid}&txid={txid}&hex={txblob}"
        }
    },
    custom_meta: {
        identifier: "some_identifier_9876",
        instruction: "Please sign this 🍻"
    },
    txblob: "CDDF827A37F457A25E14D862BCD74473045022100C6A699"
};

const payloadBodyToBeReturned: XummPostPayloadResponse = {
    uuid: "d13f1139-a841-485d-9551-9a9dcdbcdc52",
    next: {
        always: "https://xumm.app/sign/d13f1139-a841-485d-9551-9a9dcdbcdc52",
        no_push_msg_received: "https://xumm.app/sign/d13f1139-a841-485d-9551-9a9dcdbcdc52/qr"
    },
    refs: {
        qr_png: "https://xumm.app/sign/d13f1139-a841-485d-9551-9a9dcdbcdc52_q.png",
        qr_matrix: "https://xumm.app/sign/d13f1139-a841-485d-9551-9a9dcdbcdc52_q.json",
        qr_uri_quality_opts: [ "m", "q", "h" ],
        websocket_status: "wss://xumm.app/sign/d13f1139-a841-485d-9551-9a9dcdbcdc52"
    },
    pushed: true
};

const payloadToGet_One: XummGetPayloadResponse = {
    meta: {
        exists: true,
        uuid: "aad937e2-665d-400f-b067-fb883bdeff85",
        multisign: false,
        submit: false,
        destination: "",
        resolved_destination: "",
        resolved: false,
        signed: false,
        cancelled: true,
        expired: true,
        pushed: true,
        app_opened: false,
        return_url_app: null,
        return_url_web: null
    },
    application: {
        name: "Some XUMM App",
        description: "Some App Description",
        disabled: 0,
        uuidv4: "8525e32b-1bd0-4839-af2f-f794874a80b0",
        icon_url: "https://xumm-cdn.imgix.net/app-logo/de7936fe-bb71-4aa1-8490-54cf92090f33.png",
        issued_user_token: null
    },
    payload: {
        tx_type: "SignIn",
        tx_destination: "",
        tx_destination_tag: null,
        request_json: {
            TransactionType: "SignIn"
        },
        created_at: "2020-02-12T13:21:39Z",
        expires_at: "2020-02-12T13:21:48Z",
        expires_in_seconds: -770
    },
    response: {
        hex: null,
        txid: null,
        resolved_at: null,
        dispatched_to: null,
        dispatched_result: null,
        multisign_account: null,
        account: null
    },
    custom_meta: {
        identifier: null,
        blob: null,
        instruction: null
    }
};

const payloadToGet_Two: XummGetPayloadResponse = {
    meta: {
        exists: true,
        uuid: "7fb45f4a-e73f-4d57-a06e-dd73bee51941",
        multisign: false,
        submit: false,
        destination: "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY",
        resolved_destination: "XRP Tip Bot",
        resolved: false,
        signed: false,
        cancelled: false,
        expired: false,
        pushed: true,
        app_opened: false,
        return_url_app: null,
        return_url_web: null
    },
    application: {
        name: "Some XUMM App",
        description: "Some App Description",
        disabled: 0,
        uuidv4: "8525e32b-1bd0-4839-af2f-f794874a80b0",
        icon_url: "https://xumm-cdn.imgix.net/app-logo/de7936fe-bb71-4aa1-8490-54cf92090f33.png",
        issued_user_token: null
    },
    payload: {
        tx_type: "Payment",
        tx_destination: "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY",
        tx_destination_tag: 495,
        request_json: {
            TransactionType: "Payment",
            Destination: "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY",
            DestinationTag: 495
        },
        created_at: "2020-02-12T13:33:34Z",
        expires_at: "2020-02-12T15:13:34Z",
        expires_in_seconds: 5906
    },
    response: {
        hex: "1200032280000000240000003241833",
        txid: "9B124C14528ED14C0BDA17075A39B90ABED598B77A22DFEEBD913CAC07A513BC",
        resolved_at: "2020-02-12T13:36:32.000Z",
        dispatched_to: "wss://rippled.xrptipbot.com",
        dispatched_result: "tes_SUCCESS",
        multisign_account: "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY",
        account: "r9onCSkYP2tYcukw2KUHMZ1Sn5YixQCgmN"
    },
    custom_meta: {
        identifier: "some_identifier_aax11a",
        blob: {
            country: "Netherlands"
        },
        instruction: "Hey ❤️! Please sign for\n\nThis\nand\nThat 🍻"
    }
};

const payloadDeleteBodyToBeReturned: XummDeletePayloadResponse = {
    result: {
        cancelled: false,
        reason: "ALREADY_RESOLVED"
    },
    meta: {
        exists: true,
        uuid: "b8a049d4-e5bf-443a-adce-693205e7ab43",
        multisign: false,
        submit: false,
        destination: "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY",
        resolved_destination: "",
        resolved: false,
        signed: false,
        cancelled: false,
        expired: true,
        pushed: true,
        app_opened: false,
        return_url_app: "https://wietse.com/xrpl?payload=37a56620-3293-4aff-a2fd-cda71b76b1b8",
        return_url_web: null
    },
    custom_meta: {
        identifier: null,
        blob: null,
        instruction: null
    }
};

const payloadXummWebhookBodyToBeSent: XummWebhookBody = {
    meta: {
        url: "https://webhook.site/2618b30e-43f9-4846-a56e-d8a8f3e1e6dd",
        application_uuidv4: "8525e32b-1bd0-4839-af2f-f794874a80b0",
        payload_uuidv4: "df66b8b4-512b-48a2-996c-e28445f0910f"
    },
    custom_meta: {
        identifier: null,
        blob: null,
        instruction: null
    },
    payloadResponse: {
        payload_uuidv4: "df66b8b4-512b-48a2-996c-e28445f0910f",
        reference_call_uuidv4: "bca128a1-9f85-4fc8-b4ef-a7eb3786803c",
        signed: false,
        user_token: false,
        return_url: {
            app: "https://app.app/?payload=df66b8b4-512b-48a2-996c-e28445f0910f",
            web: "https://web.web/?payload=df66b8b4-512b-48a2-996c-e28445f0910f"
        }
    },
    userToken: {
        user_token: "201d9d2e-9021-4d69-974a-fbecba803514",
        token_issued: "2020-02-12T08:34:02.395Z",
        token_expiration: "2020-03-13T08:34:02.395Z"
    }
};

const payloadXummWebsocketBodyToBeSent: XummWebsocketBody = {
    payload_uuidv4: "73226756-0cce-42b8-b933-4ab06aa41b55",
    reference_call_uuidv4: "6661cbaa-ff48-4d1e-bc3a-7aeb9cec85eb",
    signed: true,
    user_token: true,
    return_url: {
      app: null,
      web: null
    },
    custom_meta: {
        identifier: "some_identifier_1337",
        blob: {
            country: "Netherlands"
        },
        instruction: "Hey ❤️"
    }
};

const apiCallError: XummApiError = {
    error: {
      reference: "233b388e-aa0b-49bc-ac62-71f3d760b587",
      code: 409
    }
};
