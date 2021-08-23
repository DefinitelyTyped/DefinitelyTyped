module.exports = (ctx: Feflow.ctx) => {
    const {
      commander,
      hook,
      logger,
    } = ctx;
    const [ action ] = ctx.args['_'];
    logger.debug(String(action));
    commander.register('devtool', 'Feflow devtool for better develop a devkit or plugin', async () => {
        logger.trace('Start dev');
        logger.debug('Start test');
        logger.info('Start info');
    });

    hook.hook('devtool', async () => {
        logger.warn('Start warn');
        logger.error('Start error');
        logger.fatal('Start fatal');
    });
};
