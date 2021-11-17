const core = require('@actions/core');

const token = process.env.INPUT_TOKEN || 'default';

try {
  console.log(`core token: ${core.getInput('token')}`);

  console.log(`env token: ${token}`);

  console.log(`head ref: ${process.env.GITHUB_HEAD_REF}`);
  console.log(`base ref: ${process.env.GITHUB_BASE_REF}`);

  core.setOutput('modified-token', `token received: ${token}`);
} catch (e) {
  core.setFailed(error.message);
}
