const core = require("@actions/core");
const github = require("@actions/github");

token = core.getInput("token");

const token = async () => {
  github.getOctokit(token);
};
