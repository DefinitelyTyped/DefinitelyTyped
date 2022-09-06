import { EventEmitter } from 'events';
import { Logger, handlers } from 'prepper';

const logger: Logger = new Logger({
  handlers: [
    new handlers.Merge({ foo: 'bar' }, { invert: true }),
    new handlers.Oversized({ size: 100_000 }),
    new handlers.Env(),
    new handlers.Noop(),
    new handlers.Repo(),
    new handlers.Tracer(),
    new handlers.Process(),
    new handlers.System(),
    new handlers.Flatten(),
    new handlers.KeyFilter({ include: ['a', 'b'], exclude: ['a.b'] }),
    new handlers.Unflatten(),
  ],
  message: 'Some default message',
  level: 'warn',
  maxListeners: 15,
});

const otherLogger = new Logger({
  sequence: new handlers.Sequence([new handlers.Noop()])
}).on('message', logger.log);

class CustomHandler extends EventEmitter implements handlers.Handler {
  handle(event: handlers.Event): void {
    const extendedEvent = {
      ...event,
      foo: 'bar'
    };

    this.emit('message', extendedEvent);
  }
}

const childLogger = otherLogger.child({
  handlers: [
    new handlers.Merge({ correlationId: '123' }),
    new CustomHandler(),
  ],
});

childLogger.trace('message');
childLogger.debug('message', { foo: 'bar' });
childLogger.info({ message: 'message', foo: 'bar' });
childLogger.warn('oops');
childLogger.error(new Error('oops'), { dump: '...' });
childLogger.fatal('message', new Error('very oops'), { dump: '...' });
