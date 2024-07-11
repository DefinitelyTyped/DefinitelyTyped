import { createElement } from "react";
import { Email, renderEmail } from "react-html-email";

// $ExpectType string
const email = renderEmail(
    createElement(
        Email,
        { title: "Email Title" },
    ),
);
