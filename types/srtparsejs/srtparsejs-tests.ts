import { srtArray, srtPlayer, parse, toSrt, toMS, toTime, compareTime, getSrtArrayIndex, setPlayer } from 'srtparsejs';

const srtText = '1\r\n00:00:11,544 --> 00:00:12,682\r\nHello\r\n\r\n';

// $ExpectType srtArray[]
const parse_result: srtArray[] = parse(srtText);
// @ts-expect-error
const parse_error = parse(parse_result);

// $ExpectType string
const toSrt_result: string = toSrt(parse_result);
// @ts-expect-error
const toSrt_error = toSrt(toSrt_result);

// $ExpectType number
const toMS_result: number = toMS('00:00:11,544');
// @ts-expect-error
const toMS_error = toMS(toMS_result);

// $ExpectType string
const toTime_result: string = toTime(11544);
// @ts-expect-error
const toTime_error = toTime(toTime_result);

// $ExpectType number
const compareTime_result: number = compareTime('00:00:11,544', '00:00:11,543', '00:00:11,545');
// @ts-expect-error
const compareTime_error = compareTime(11544, 11543, 11545);

// $ExpectType number | undefined
const getSrtArrayIndex_result: number | undefined = getSrtArrayIndex(parse_result, 0, 0, '00:00:11,545');
// @ts-expect-error
const getSrtArrayIndex_error = getSrtArrayIndex(toTime_result);

// $ExpectType srtPlayer
const setPlayer_result: srtPlayer = setPlayer(parse_result, text => {});
// @ts-expect-error
const setPlayer_error = setPlayer(srtText, text => {});
