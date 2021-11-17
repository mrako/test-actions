const core = require('@actions/core');

const token = process.env.INPUT_TOKEN || 'default';

try {
  console.log(`core token: ${core.getInput('token')}`);

  console.log(`env token: ${token}`);

  console.log(`head ref: ${process.env.HEAD_REF}`);
  console.log(`base ref: ${process.env.BASE_REF}`);

  core.setOutput('modified-token', `token received: ${token}`);
} catch (e) {
  core.setFailed(error.message);
}
