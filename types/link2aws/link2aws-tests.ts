import { ARN } from 'link2aws';

const arn = 'arn:aws:s3:::examplebucket';

const arnObj = new ARN(arn); // $ExpectType ARN
arnObj.string; // $ExpectType string
arnObj.console; // $ExpectType string
arnObj.qualifiers; // $ExpectType string[]
arnObj.pathLast; // $ExpectType string
arnObj.consoleLink; // $ExpectType string
