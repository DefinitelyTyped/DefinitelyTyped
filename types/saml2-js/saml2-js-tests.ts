import * as fs from 'fs';
import express = require('express');
import * as saml2 from 'saml2-js';


// Example
{
    const sp_options = {
        entity_id: "https://sp.example.com/metadata.xml",
        private_key: fs.readFileSync("key-file.pem").toString(),
        certificate: fs.readFileSync("cert-file.crt").toString(),
        assert_endpoint: "https://sp.example.com/assert",
        force_authn: true,
        auth_context: { comparison: "exact", class_refs: ["urn:oasis:names:tc:SAML:1.0:am:password"] },
        nameid_format: "urn:oasis:names:tc:SAML:2.0:nameid-format:transient",
        sign_get_request: false,
        allow_unencrypted_assertion: true
    };

    // Call service provider constructor with options
    const sp = new saml2.ServiceProvider(sp_options);

    // Example use of service provider.
    // Call metadata to get XML metatadata used in configuration.
    const metadata = sp.create_metadata();

    // Initialize options object
    const idp_options = {
        sso_login_url: "https://idp.example.com/login",
        sso_logout_url: "https://idp.example.com/logout",
        certificates: [fs.readFileSync("cert-file1.crt").toString(), fs.readFileSync("cert-file2.crt").toString()],
        force_authn: true,
        sign_get_request: false,
        allow_unencrypted_assertion: false
    };

    // Call identity provider constructor with options
    const idp = new saml2.IdentityProvider(idp_options);

    // Example usage of identity provider.
    // Pass identity provider into a service provider function with options and a callback.
    sp.post_assert(idp, {}, (error: any, response: any) => {});
}


// Example: Express implementation
{
    const app = express();

    // Create service provider
    const sp_options = {
      entity_id: "https://sp.example.com/metadata.xml",
      private_key: fs.readFileSync("key-file.pem").toString(),
      certificate: fs.readFileSync("cert-file.crt").toString(),
      assert_endpoint: "https://sp.example.com/assert"
    };
    const sp = new saml2.ServiceProvider(sp_options);

    // Create identity provider
    const idp_options = {
      sso_login_url: "https://idp.example.com/login",
      sso_logout_url: "https://idp.example.com/logout",
      certificates: [fs.readFileSync("cert-file1.crt").toString(), fs.readFileSync("cert-file2.crt").toString()]
    };
    const idp = new saml2.IdentityProvider(idp_options);

    // ------ Define express endpoints ------

    // Endpoint to retrieve metadata
    app.get("/metadata.xml", function(req, res) {
      res.type('application/xml');
      res.send(sp.create_metadata());
    });

    // Starting point for login
    app.get("/login", function(req, res) {
      sp.create_login_request_url(idp, {}, function(err, login_url, request_id) {
        if (err != null)
          return res.send(500);
        res.redirect(login_url);
      });
    });

    // Assert endpoint for when login completes
    app.post("/assert", function(req, res) {
      const options = {request_body: req.body};
      sp.post_assert(idp, options, function(err, saml_response) {
        if (err != null)
          return res.send(500);

        // Save name_id and session_index for logout
        // Note:  In practice these should be saved in the user session, not globally.
        let name_id = saml_response.user.name_id;
        let session_index = saml_response.user.session_index;

        res.send("Hello #{saml_response.user.name_id}!");
      });
    });

    // Starting point for logout
    app.get("/logout", function(req, res) {
      let name_id = '';
      let session_index = '';
      const options = {
        name_id: name_id,
        session_index: session_index
      };

      sp.create_logout_request_url(idp, options, function(err, logout_url) {
        if (err != null)
          return res.send(500);
        res.redirect(logout_url);
      });
    });

    app.listen(3000);
}

