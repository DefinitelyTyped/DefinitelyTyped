import * as streamToString from 'stream-to-string';

(async () => {
  const stream = null as any as NodeJS.ReadableStream;
  const convertedString: string = await streamToString(stream);
  return convertedString;
})();
