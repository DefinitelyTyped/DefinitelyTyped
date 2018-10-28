import * as logform from 'logform';
const format = logform.format;
const { combine, timestamp, label } = format;

const labelTimestamp = combine(
  label({ label: 'right meow!' }),
  timestamp()
);

const info = labelTimestamp.transform({
  level: 'info',
  message: 'What time is the testing at?'
});

const ignorePrivate = format((info, opts) => {
  if (info.private) { return false; }
  return info;
})();

ignorePrivate.transform({
  level: 'error',
  message: 'Public error to share'
});

ignorePrivate.transform({
  level: 'error',
  private: true,
  message: 'This is super secret - hide it.'
});

const willNeverThrow = format.combine(
  format(info => false)(), // Ignores everything
  format(info => { throw new Error('Never reached'); })()
);

const volume = format((info, opts) => {
  if (opts && opts.yell) {
    info.message = info.message.toUpperCase();
  } else if (opts && opts.whisper) {
    info.message = info.message.toLowerCase();
  }

  return info;
});

// `volume` is now a function that returns instances of the format.
const scream = volume({ yell: true });
scream.transform({
  level: 'info',
  message: `sorry for making you YELL in your head!`
}, scream.options);

// `volume` can be used multiple times to create different formats.
const whisper = volume({ whisper: true });
whisper.transform({
  level: 'info',
  message: `WHY ARE THEY MAKING US YELL SO MUCH!`
}, whisper.options);
