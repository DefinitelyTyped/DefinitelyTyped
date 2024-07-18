import { Context } from "@azure/functions";
import intercept = require("azure-function-log-intercept");

declare const context: Context;

intercept(context); // $ExpectType void
