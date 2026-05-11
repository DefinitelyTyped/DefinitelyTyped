import express = require("express");
import passport = require("passport");
import webauthn = require("passport-fido2-webauthn");

// Example derived from https://github.com/jaredhanson/passport-webauthn
const store = new webauthn.SessionChallengeStore({ key: "webauthn" });

passport.use(
    new webauthn.Strategy(
        { store },
        (id: string, userHandle: Buffer, cb: webauthn.VerifiedFunction) => {
            db.get(`SELECT * FROM public_key_credentials WHERE external_id = ${id}`, (err, row) => {
                if (err) {
                    cb(err);
                    return;
                }
                if (!row) {
                    cb(null, false, { message: "Invalid key." });
                    return;
                }
                const publicKey = row.public_key;
                db.get(`SELECT * FROM users WHERE rowid = ${row.user_id}`, (err, row) => {
                    if (err) {
                        cb(err);
                        return;
                    }
                    if (!row) {
                        cb(null, false, { message: "Invalid key." });
                        return;
                    }
                    if (Buffer.compare(row.handle, userHandle) !== 0) {
                        cb(null, false, { message: "Invalid key." });
                        return;
                    }
                    cb(null, row, publicKey);
                });
            });
        },
        (user: any, id: string, publicKey: string, cb: webauthn.RegisteredFunction) => {
            db.run(
                `INSERT INTO users (username, name, handle) VALUES (${user.name}, ${user.displayName}, ${user.id})`,
                err => {
                    if (err) {
                        cb(err);
                        return;
                    }
                    const newUser = {
                        id: newId(),
                        username: user.name,
                        name: user.displayName,
                    };
                    db.run(
                        `INSERT INTO public_key_credentials (user_id, external_id, public_key) VALUES (${newUser.id}, ${id}, ${publicKey})`,
                        err => {
                            if (err) {
                                cb(err);
                                return;
                            }
                            cb(null, newUser);
                        },
                    );
                },
            );
        },
    ),
);

const app = express();
app.post("/login/public-key/challenge", (req, res, next) => {});

declare namespace db {
    function get(
        command: string,
        callback: (err: any, row: { user_id: string; handle: Buffer; public_key: string }) => void,
    ): void;
    function run(command: string, callback: (err: any) => void): void;
}
declare function newId(): string;
