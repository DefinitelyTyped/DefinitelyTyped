import { parseRtpPacket, parseRtpPayloadType, payloadTypesHash } from 'rtp-parser';

const result = parseRtpPacket(new Buffer('fakeRTP'));
result.csrc; // $ExpectType number[]
result.payload; // $ExpectType Buffer

const parsed3 = parseRtpPayloadType(3);
parsed3.name; // $ExpectType "GSM"
parsed3.mediaType; // $ExpectType "A"
parsed3.channels; // $ExpectType 1
parsed3.clockRate; // $ExpectType 8000

const parsed35 = parseRtpPayloadType(35);
parsed35.name; // $ExpectType "unassigned"

for (let i = 0; i < 200; i++) {
  const parsed = parseRtpPayloadType(i);
  if (parsed.name) {}
  if (parsed.clockRate) {}
}

payloadTypesHash[0].mediaType; // $ExpectType "A"

parseRtpPayloadType(0);
parseRtpPayloadType(1);
parseRtpPayloadType(2);
parseRtpPayloadType(3);
parseRtpPayloadType(4);
parseRtpPayloadType(5);
parseRtpPayloadType(6);
parseRtpPayloadType(7);
parseRtpPayloadType(8);
parseRtpPayloadType(9);
parseRtpPayloadType(10);
parseRtpPayloadType(11);
parseRtpPayloadType(12);
parseRtpPayloadType(13);
parseRtpPayloadType(14);
parseRtpPayloadType(15);
parseRtpPayloadType(16);
parseRtpPayloadType(17);
parseRtpPayloadType(18);
parseRtpPayloadType(19);
parseRtpPayloadType(20);
parseRtpPayloadType(21);
parseRtpPayloadType(22);
parseRtpPayloadType(23);
parseRtpPayloadType(24);
parseRtpPayloadType(25);
parseRtpPayloadType(26);
parseRtpPayloadType(27);
parseRtpPayloadType(28);
parseRtpPayloadType(29);
parseRtpPayloadType(30);
parseRtpPayloadType(31);
parseRtpPayloadType(32);
parseRtpPayloadType(33);
parseRtpPayloadType(34);
parseRtpPayloadType(35);
parseRtpPayloadType(36);
parseRtpPayloadType(37);
parseRtpPayloadType(38);
parseRtpPayloadType(39);
parseRtpPayloadType(40);
parseRtpPayloadType(41);
parseRtpPayloadType(42);
parseRtpPayloadType(43);
parseRtpPayloadType(44);
parseRtpPayloadType(45);
parseRtpPayloadType(46);
parseRtpPayloadType(47);
parseRtpPayloadType(48);
parseRtpPayloadType(49);
parseRtpPayloadType(50);
parseRtpPayloadType(51);
parseRtpPayloadType(52);
parseRtpPayloadType(53);
parseRtpPayloadType(54);
parseRtpPayloadType(55);
parseRtpPayloadType(56);
parseRtpPayloadType(57);
parseRtpPayloadType(58);
parseRtpPayloadType(59);
parseRtpPayloadType(60);
parseRtpPayloadType(61);
parseRtpPayloadType(62);
parseRtpPayloadType(63);
parseRtpPayloadType(64);
parseRtpPayloadType(65);
parseRtpPayloadType(66);
parseRtpPayloadType(67);
parseRtpPayloadType(68);
parseRtpPayloadType(69);
parseRtpPayloadType(70);
parseRtpPayloadType(71);
parseRtpPayloadType(72);
parseRtpPayloadType(73);
parseRtpPayloadType(74);
parseRtpPayloadType(75);
parseRtpPayloadType(76);
parseRtpPayloadType(77);
parseRtpPayloadType(78);
parseRtpPayloadType(79);
parseRtpPayloadType(80);
parseRtpPayloadType(81);
parseRtpPayloadType(82);
parseRtpPayloadType(83);
parseRtpPayloadType(84);
parseRtpPayloadType(85);
parseRtpPayloadType(86);
parseRtpPayloadType(87);
parseRtpPayloadType(88);
parseRtpPayloadType(89);
parseRtpPayloadType(90);
parseRtpPayloadType(91);
parseRtpPayloadType(92);
parseRtpPayloadType(93);
parseRtpPayloadType(94);
parseRtpPayloadType(95);
parseRtpPayloadType(96);
parseRtpPayloadType(97);
parseRtpPayloadType(98);
parseRtpPayloadType(99);
parseRtpPayloadType(100);
parseRtpPayloadType(101);
parseRtpPayloadType(102);
parseRtpPayloadType(103);
parseRtpPayloadType(104);
parseRtpPayloadType(105);
parseRtpPayloadType(106);
parseRtpPayloadType(107);
parseRtpPayloadType(108);
parseRtpPayloadType(109);
parseRtpPayloadType(110);
parseRtpPayloadType(111);
parseRtpPayloadType(112);
parseRtpPayloadType(113);
parseRtpPayloadType(114);
parseRtpPayloadType(115);
parseRtpPayloadType(116);
parseRtpPayloadType(117);
parseRtpPayloadType(118);
parseRtpPayloadType(119);
parseRtpPayloadType(120);
parseRtpPayloadType(121);
parseRtpPayloadType(122);
parseRtpPayloadType(123);
parseRtpPayloadType(124);
parseRtpPayloadType(125);
parseRtpPayloadType(126);
parseRtpPayloadType(127);
