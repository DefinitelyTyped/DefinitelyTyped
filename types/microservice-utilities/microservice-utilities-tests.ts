import { Authorizer, PlatformClient, RequestLogger, ServiceTokenProvider } from 'microservice-utilities';

(async (): Promise<void> => {
    const authorizer = new Authorizer((msg: any) => msg, { jwkKeyListUrl: 'aaa' });
    const authorizerPolicy = authorizer.getPolicy({ test: true });

    const platformClient = new PlatformClient((msg: any) => msg);
    const result = await platformClient.get('https://www.typescriptlang.org/');
    const data = result.data as string;

    platformClient.post('https://www.typescriptlang.org/', { testData: 'abc' });

    const serviceTokenProvider = new ServiceTokenProvider(platformClient, {});

    const requestLogger = new RequestLogger({ jsonSpace: 4 });
    requestLogger.log('hello world');
})();
