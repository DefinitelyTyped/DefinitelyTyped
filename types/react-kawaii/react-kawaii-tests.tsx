import * as React from 'react';
import { Cat, Planet, Mug, Browser, Backpack, Ghost, File, SpeechBubble, KawaiiMood, KawaiiProps, IceCream, Chocolate, Folder } from 'react-kawaii';

const PlanetExample = () => <Planet size={200} mood="blissful" color="#FDA7DC" />;
const MugExample = () => <Mug size={200} mood="ko" color="rebeccapurple" />;
const GhostExample = () => <Ghost size={200} mood="lovestruck" color="#E0E4E8" />;
const FileExample = () => <File size={200} mood="blissful" color="#83D1FB" />;
const IceCreamExample = () => <IceCream mood="happy" />;
const BrowserExample = () => <Browser size={500} />;
const BackpackExample = () => <Backpack />;
const SpeechBubbleExample = () => <SpeechBubble />;
const CatExample = () => <Cat />;
const ChocolateExample = () => <Chocolate />;
const FolderExample = () => <Folder />;

// @ts-expect-error
const invalidMoodNumber: KawaiiMood = 5;

// @ts-expect-error
const invalidMoodString: KawaiiMood = '';

// This is defined on one line to avoid the position of the error moving between TS2/3
// @ts-expect-error
const invalidProps: KawaiiProps = { size: '200px' };
