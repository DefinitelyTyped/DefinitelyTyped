import logging = require("logg");

var logger = logging.getLogger('my.class');
logger = logging.getTransientLogger('my.class');
logger.setLogLevel(logging.Level.SEVERE);
logger.setLogLevel(logging.Level.WARN);
logger.setLogLevel(logging.Level.INFO);

logger = logging.rootLogger;

logger.setLogLevel(logging.Level.FINE);
logger.setLogLevel(logging.Level.FINER);
logger.setLogLevel(logging.Level.FINEST);
logger.info('This will not show up');
logger.warn('But warnings will', new Error('aargg')); 
logger.fine("test", {}, []);
logger.error("dsfs", {});

logging.registerWatcher(function(logRecord) {  
    console.log(logRecord);
});

logger.registerWatcher(function(logRecord) {  
    console.log(logRecord);
});

logger.getWatchers()[0]();
logger.isLoggable(500) === true;

var logger2 = logging.getLogger("hi");

logger.setParent(logger2);
logger.getParent().info(500);

var i: number = logger.getLogLevel();