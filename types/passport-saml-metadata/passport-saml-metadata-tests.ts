import { claimsToCamelCase, fetch, metadata, MetadataReader, toPassportConfig } from "passport-saml-metadata/src";
import { Profile, Strategy, VerifiedCallback } from "passport-saml";

// From README Example
fetch({ url: "https:saml.test.com/metadata.xml" }).then(
    (reader) => {
        const config = toPassportConfig(reader);
        config.protocol = 'saml2';

        new Strategy(config, (profile: Profile, done: VerifiedCallback) => {
            profile = claimsToCamelCase(profile, reader.claimSchema);
            done(null, profile);
        });
    }
);

const reader = new MetadataReader("xml string");
const otherReader = new MetadataReader("Other String", {authnRequestBinding: "HTTP-POST", throwExceptions: true});
const config = toPassportConfig(reader, {multipleCerts : true});

metadata(config)(); // matches the code, not the doc
