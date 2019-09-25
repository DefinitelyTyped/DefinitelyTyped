// NOTE: used from: https://github.com/CacheControl/json-rules-engine#basic-example
import { Engine } from "json-rules-engine";

interface PlayerStats {
    personalFoulCount: number;
    gameDuration: number;
}

const engine = new Engine();

engine.addRule({
    conditions: {
      any: [{
        all: [{
          fact: 'gameDuration',
          operator: 'equal',
          value: 40
        }, {
          fact: 'personalFoulCount',
          operator: 'greaterThanInclusive',
          value: 5
        }]
      }, {
        all: [{
          fact: 'gameDuration',
          operator: 'equal',
          value: 48
        }, {
          fact: 'personalFoulCount',
          operator: 'greaterThanInclusive',
          value: 6
        }]
      }]
    },
    event: {
      type: 'fouledOut',
      params: {
        message: 'Player has fouled out!'
      }
    }
  });

const facts: PlayerStats = {
    gameDuration: 6,
    personalFoulCount: 40,
};

engine.run(facts).then(results => {
    results.events.map(event => event.params.message);
});
