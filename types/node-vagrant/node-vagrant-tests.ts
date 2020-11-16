#!/usr/bin/env node

import fs = require('fs');
import vagrant = require('node-vagrant');

vagrant.globalStatus((err: vagrant.ErrorArg, out?: Array<{id: string, provider: string, state: string}>): void => {
    console.log(err, out);
});

vagrant.version((err: vagrant.ErrorArg, out?: string) => {
    console.log(err, out);
});

vagrant.versionStatus((err: vagrant.ErrorArg, out?: {status: string, major: number, minor: number, patch: number}): void => {
    console.log(err, out);
});

const image = 'generic/alpine38';
const args: string[] = ['--provider', 'virtualbox'];

const emitter = vagrant.boxAdd(image, args, (err: vagrant.ErrorArg, out?: string) => {
    console.log(err, out);
});

emitter.on('progress', (data) => console.log(data));

vagrant.boxUpdate(image, null, (err: vagrant.ErrorArg, out?: string): void => {
    console.log(err, out);
});

const machine = vagrant.create({ cwd: process.cwd(), env: process.env });

function onInit(err: vagrant.ErrorArg, out?: string): void {
    if (err) {
        if (typeof err === 'string') {
            err = new Error(err);
        }
        throw err;
    }

    /* eslint no-unused-vars: ["error", { "args": "none" }] */
    machine.on('progress', (machine: string, progress: string, rate: string, remaining: string) => {
        console.log('download progress: ', machine, progress, rate, remaining);
    });

    machine.on('up-progress', (data) => {
        console.log('up progress: ', data);
    });

    machine.up((err: vagrant.ErrorArg, out?: string): void => {
        if (err) {
            if (typeof err === 'string') {
                err = new Error(err);
            }
            throw err;
        }

        machine.status((err: vagrant.ErrorArg, out?: Array<{status: string, provider: string}>): void => {
            console.log(err, out);

            machine.sshConfig((err: vagrant.ErrorArg, out?: {host: string | null, port: string | null, hostname: string | null, user: string | null, private_key: string | null}): void => {
                console.log(err, out);

                machine.suspend((err: vagrant.ErrorArg, out?: string) => {
                    console.log(err, out);

                    machine.resume((err: vagrant.ErrorArg, out?: string) => {
                        console.log(err, out);

                        machine.halt((err: vagrant.ErrorArg, out?: string) => {
                            console.log(err, out);

                            machine.destroy((err: vagrant.ErrorArg, out?: string) => {
                                console.log(err, out);

                                vagrant.globalStatus((err: vagrant.ErrorArg, out?: Array<{id: string, provider: string, state: string}>): void => {
                                    console.log(err, out);
                                });

                                fs.unlinkSync('./Vagrantfile');
                            });
                        });
                    });
                });
            });
        });
    });
}

machine.init('ubuntu/trusty64', onInit);
