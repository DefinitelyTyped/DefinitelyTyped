import * as cfn from "cfn-response";
import { CloudFormationCustomResourceEvent, Context } from "aws-lambda";

declare const event: CloudFormationCustomResourceEvent;
declare const context: Context;

// $ExpectType void
cfn.send(event, context, cfn.SUCCESS, { sample: 123 }, "abc");
// $ExpectType void
cfn.send(event, context, "SUCCESS");
// @ts-expect-error
cfn.send(event, context, "", {});
