import { assertType } from "./lib/assert";

import EmberError from "@ember/error";
import Ember from "ember";

assertType<typeof Ember.Error>(EmberError);
