const core = require("@actions/core");
const github = require("@actions/github");

let octokit = github.getOctokit(github.token);

const token = async () => {
  console.log(octokit.rest.users.list);
};
