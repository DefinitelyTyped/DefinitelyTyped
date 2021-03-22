import { SystemService, ServiceConfiguration, MessageConsumer, Level } from 'system-service';

class DemoConsumer extends MessageConsumer {
  create() {
    super.create();
    // Implement to create the connect with messaging applications e.g. Kafka/RabbitMQ
  }

  validate(message: any) {
    super.validate(message);
    if (!(message)) {
      this.logger.log('error', 'message is missing cId', message);
      throw new Error('Missing message');
    }
  }

  // process will only be called, when message is valid
  process(message: any) {
    super.process(message);
    // TODO: Implement handle message
    this.logger.log('verbose', 'Start process', message);
  }

  start() {
    super.start();
    // Start the connect to monitor the messaging application, which is created in create()
  }

  stop() {
    super.stop();
    // Implement any cleanup after stop.
  }
}

const demoConsumer: DemoConsumer = new MessageConsumer();
const serviceConfig: ServiceConfiguration = {
  log: {
    config: {
      level: Level.error
    }
  }
};

const service: SystemService = new SystemService(serviceConfig, demoConsumer); // Using SystemService directly
service.start();
service.stop();
