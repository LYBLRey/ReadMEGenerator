const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("generateMarkdown");

const questions = () => {
  return inquirer.prompt([
    { type: "input", name: "title", message: "Title of the README:" },
  ]);
};

const writeFile = util.promisify(fs.writeFile);

function init() {
  questions()
    .then((answers) => {
      writeFile("./GeneratedREADME/README.md", generateMarkdown(answers));
    })
    .then(() => console.log("README GENERATED YAY"))
    .catch((err) => console.error(err));
}

init();
