import RuleEngine from 'node-rules'; // 导入 RuleEngine 模块

// 创建一个规则引擎实例
let ruleEngine = new RuleEngine();

// 初始化规则引擎
ruleEngine.init();

// 定义API接口对象
let API: RuleEngine.API = {
  rule: () => {
    let APIRules: RuleEngine.Rule = {
      id: '1',
      name: 'API Rule',
      on: true,
      condition: (API: RuleEngine.API) => {

      },
      consequence: (API: RuleEngine.API) => {

      }

    };
    return APIRules
  },
  when: (outcome: any) => {
    // 规则条件逻辑
  },
  restart: () => {
    // 重新启动规则引擎
  },
  stop: () => {
    // 停止规则引擎
  },
  next: () => {
    // 执行下一个规则
  }
};

// 定义Fact对象
let sampleFact: RuleEngine.Fact = {
  useIP: '127.0.0.1',
  name: 'John Doe',
  application: 'TestApp',
  userLoggedIn: true,
  transactionTotal: 100,
  cardType: 'Credit'
};


// 创建一个规则
let sampleRule: RuleEngine.Rule = {
  id: '1',
  name: 'Sample Rule',
  on: true,
  condition: (API: RuleEngine.API) => {
    // 规则条件逻辑，可以使用传入的fact对象进行判断
  },
  consequence: (API: RuleEngine.API) => {
    // 规则执行逻辑，可以使用传入的fact对象进行操作
  }
};

// 注册规则
ruleEngine.register(sampleRule);

// 执行规则
ruleEngine.execute(sampleFact, (result: any) => {
  result;
});

// 其他接口方法的测试
ruleEngine.nextTick(() => {
  let nextTick_test = 'Next tick executed';
});

let foundRules = ruleEngine.findRules({ id: '1' });
let foundRules_test = foundRules;

ruleEngine.turn('on', { id: '1' });

ruleEngine.prioritize(1, { name: 'Sample Rule' });

