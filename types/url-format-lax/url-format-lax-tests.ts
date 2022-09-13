import urlFormat from "url-format-lax";

// $ExpectType string
urlFormat({ hostname: "::1", port: 123 });

// $ExpectType string
urlFormat({ protocol: "https", host: "192.0.2.1:8443" });
