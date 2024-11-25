import RuleEngine from 'node-rules';

const ruleEngine = new RuleEngine();

const testRule: RuleEngine.Rule = {
  condition: (R, fact) => {
    R.when(fact.someProp === 'expectedValue');
  },
  consequence: (R, fact) => {
    fact.result = 'Test rule consequence';
    R.stop();
  },
  priority: 1
};

const fact: RuleEngine.Fact = {
  someProp: 'expectedValue'
};

ruleEngine.register(testRule);

ruleEngine.execute(fact, (data) => {
  let attributeExists = 'someProp' in data;
  let result = data.result;
});

