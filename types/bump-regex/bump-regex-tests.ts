import * as bump from 'bump-regex';

bump({}, (err, res) => {
  if (err) {}
  if (res) {
    res.new;
    res.prev;
  }
});

bump('1.0.0', (err, res) => {});

bump({type: 'major', str: '1.0.0'}, (err, res) => {});
bump({type: 'minor', str: '1.0.0'}, (err, res) => {});
bump({type: 'patch', str: '1.0.0'}, (err, res) => {});
bump({type: 'prerelease', str: '1.0.0'}, (err, res) => {});

bump({regex: /^.+$/, str: '1.0.0'}, (err, res) => {});

bump({regex: /^.+$/, global: true, str: '1.0.0'}, (err, res) => {});

bump({regex: /^.+$/, case: true, str: '1.0.0'}, (err, res) => {});
