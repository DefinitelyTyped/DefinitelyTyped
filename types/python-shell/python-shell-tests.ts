import * as ps from 'python-shell';

const PythonShell = ps.PythonShell;

ps.run('my_script.py', err => {
  if (err) throw err;
  console.log('finished');
});

const options = {
  mode: 'text',
  pythonPath: 'path/to/python',
  pythonOptions: ['-u'],
  scriptPath: 'path/to/my/scripts',
  args: ['value1', 'value2', 'value3']
};

ps.run('my_script.py', options, (err, results) => {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});

const pyshell = new PythonShell('my_script.py');

// sends a message to the Python script via stdin
pyshell.send('hello');

pyshell.on('message', message => {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(err => {
  if (err) throw err;
  console.log('finished');
});
