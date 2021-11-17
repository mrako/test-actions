const core = require('@actions/core');

console.log(`core token: ${core.getInput('token')}`);

console.log(`env token: ${process.env.INPUT_TOKEN}`);
