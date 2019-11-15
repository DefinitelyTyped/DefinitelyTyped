import * as yogRal from "yog-ral";

class FormConverter extends yogRal.Converter {
    pack(config: yogRal.Service, data: {}) {
        return new Buffer('123');
    }
    unpack(config: yogRal.Service, data: {}) {
        return {};
    }
    getName() {
        return 'form';
    }
}

class HashringBalance extends yogRal.Balance {
    getName() {
        return 'hashring';
    }
    fetchServer(balanceContext: yogRal.Balance.BalanceContextClass, conf: {}, prevBackend: yogRal.Server) {
        return {} as yogRal.Server;
    }
}

class HttpProtocol extends yogRal.Protocol {
    getName() {
        return 'http';
    }
    _request(config: any, callback: (err: any, data: any) => any) {
        callback(new Error(), '123');
    }
}

class DefaultConfigNormalizer extends yogRal.ConfigNormalizer {
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

const runner = yogRal.RAL('test', {});
runner.on('data', function() {
    // yeap
});
runner.doRequest();

yogRal.RAL.init();

yogRal.RALPromise('test', {}).then;

yogRal.Config.loadRawConf;
yogRal.Config.load;
yogRal.Config.normalizerManager;
yogRal.Config.normalize;
yogRal.Config.getContext;
yogRal.Config.getConf;
yogRal.Config.clearConf;
yogRal.Config.getConfNames;
yogRal.Config.getRawConf;
yogRal.Config.getUpdateNeededRawConf;
yogRal.Config.enableUpdate;
yogRal.Config.disableUpdate;
yogRal.Config.isAutoUpdateEnabled;

const logger = yogRal.Logger('some');
logger.debug('test');
