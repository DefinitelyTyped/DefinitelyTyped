import { bytesBuffer, bytesBufferIndex, generateId, getRandomBytes, isGeneratingBytes, sequenceNumber } from "base64id";

const sampleId = generateId();
const sampleRandomBytes = getRandomBytes(10);

// $ExpectType Buffer
const bytesBufferAfterExecution = bytesBuffer;

// $ExpectType number
const bytesBufferIndexAfterExecution = bytesBufferIndex;

// $ExpectType boolean
const isGeneratingBytesAfterExecution = isGeneratingBytes;

// $ExpectType number
const sequenceNumberAfterExecution = sequenceNumber;
