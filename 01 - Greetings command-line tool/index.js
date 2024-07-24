#!/usr/bin/env node

const { program } = require('commander');

const moment = require('moment');

program
  .option('-n, --name <name>', 'Specify the name', 'guest')
  .option('-lvl, --level <level>', 'Specify the verbosity level (1 or 2)', parseInt)
  .option('-g, --greeting [greeting]', 'Specify the greeting message', 'Hello')
  .option('-l, --language <language>', 'Specify the language of the greeting', 'English')
  .parse(process.argv);

function generateGreeting(name, level, customGreeting) {
  let greeting = customGreeting || 'Hello';
  let dateTimeString = moment().format('YYYY-MM-DD HH:mm:ss');
  let date = '';
  
  if (level === 2) {
   date = ` (Date and Time: ${dateTimeString})`;
  }

  greeting += ` ${name} ${date}`

  return greeting;
}

if (!program.opts().name || !program.opts().level) {
  console.error('Error: Options --name (-n) and --level (-lvl) are required.');
  process.exit(1);
}

const greeting = generateGreeting(program.opts().name, program.opts().level, program.opts().greeting);
console.log(greeting);
