import { assertType } from "./lib/assert";

import Ember from "ember";
import EmberError from "@ember/error";

assertType<typeof Ember.Error>(EmberError);
