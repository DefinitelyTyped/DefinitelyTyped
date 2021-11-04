import * as nodeRal from "node-ral";

class FormConverter extends nodeRal.Converter {
    pack(config: nodeRal.Service, data: {}) {
        return new Buffer('123');
    }
    unpack(config: nodeRal.Service, data: {}) {
        return {};
    }
    getName() {
        return 'form';
    }
}

class HashringBalance extends nodeRal.Balance {
    getName() {
        return 'hashring';
    }
    fetchServer(balanceContext: nodeRal.Balance.BalanceContextClass, conf: {}, prevBackend: nodeRal.Server) {
        return {} as nodeRal.Server;
    }
}

class HttpProtocol extends nodeRal.Protocol {
    getName() {
        return 'http';
    }
    _request(config: any, callback: (err: any, data: any) => any) {
        callback(new Error(), '123');
    }
}

class DefaultConfigNormalizer extends nodeRal.ConfigNormalizer {
    getName() {
        return 'default';
    }
    needUpdate() {
        return false;
    }
    normalizeConfig(config: any) {
        return config;
    }
}

const runner = nodeRal.RAL('test', {});
runner.on('data', function() {
    // yeap
});
runner.doRequest();

nodeRal.RAL.init();

nodeRal.RALPromise('test', {}).then;

nodeRal.Config.loadRawConf;
nodeRal.Config.load;
nodeRal.Config.normalizerManager;
nodeRal.Config.normalize;
nodeRal.Config.getContext;
nodeRal.Config.getConf;
nodeRal.Config.clearConf;
nodeRal.Config.getConfNames;
nodeRal.Config.getRawConf;
nodeRal.Config.getUpdateNeededRawConf;
nodeRal.Config.enableUpdate;
nodeRal.Config.disableUpdate;
nodeRal.Config.isAutoUpdateEnabled;

const logger = nodeRal.Logger('some');
logger.debug('test');
