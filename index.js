const core = require('@actions/core');

const token = process.env.INPUT_TOKEN || 'default';

try {
  console.log(`core token: ${core.getInput('token')}`);

  console.log(`env token: ${token}`);

  core.setOutput('modified-token', `token received: ${token}`);
} catch (e) {
  core.setFailed(error.message);
}
