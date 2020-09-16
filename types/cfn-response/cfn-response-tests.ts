import * as cfn from "cfn-response";
import { CloudFormationCustomResourceEvent, Context } from "aws-lambda";

declare const event: CloudFormationCustomResourceEvent;
declare const context: Context;

// $ExpectType Promise<void>
cfn.send(event, context, cfn.SUCCESS, { sample: 123 }, "abc", true);
// $ExpectType Promise<void>
cfn.send(event, context, "SUCCESS");
// $ExpectError
cfn.send(event, context, "", {});
