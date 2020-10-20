// This file is for tests that involve modules that don't have corresponding
// globals.

import { fetch, Headers, Request, Response } from "meteor/fetch";
import { ServiceConfiguration } from "meteor/service-configuration";
import { WebApp } from "meteor/webapp";

const headers = new Headers({ 'Content-Type': 'application/json' });
const request = new Request('https://github.com', { headers });
const reply: Promise<Response> = fetch(request);
