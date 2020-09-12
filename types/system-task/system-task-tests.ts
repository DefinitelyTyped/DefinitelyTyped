import * as SystemTask from 'system-task';

const TYPE = 'Demo Task';
const REQUIREASYNCEPROCESS = true;

const DEMOASSET = {
  name: 'DEMO ASSET',
  async execute(message: string) {
    return new Promise<void>((res) => {
      setTimeout(() => {
        console.log(`Done with ${message}`);
        res();
      }, 500);
    });
  }
};

const logMethod = (messageType: string, message: string, detailMessage?: any) => {
  console.log(messageType, message, detailMessage);
};

class DemoTask extends SystemTask {
  constructor() {
    super(TYPE, REQUIREASYNCEPROCESS, logMethod);
  }

  async insertPreprocessItemsHandler(task: DemoTask): Promise<any> {
    if (!task) {
      throw new Error('missing task');
    }
    return [
      {...DEMOASSET, name: 'Asset 1' },
      {...DEMOASSET, name: 'Asset 2' }
    ];
  }

  async processHandler(task: DemoTask, processItem: any): Promise<any> {
    await processItem.execute(processItem.name);

    return processItem;
  }
}

const task: DemoTask = new DemoTask();
task.start();
