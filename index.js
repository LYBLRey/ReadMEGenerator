const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = (data) => {
  return `# ${data.title}
​
${data.description}
​
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)​
​
## Installation
${data.installation}
​
## Usage
${data.usage}
​
## Contribution
${data.contribution}
​
## Tests
${data.tests}
​
## Questions 
[Github](https://github.com/${data.github}/)\n
[Email](mailto:${data.email})
`;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "\nName of Project title:\n",
    },
    {
      type: "input",
      name: "description",
      message:
        '\nDescription\nProvide a short description explaining the what, why, and how of your project.\nUse the following questions as a guide.\n- What was your motivation?\n- Why did you build this project?\n(Note: the answer is not "Because it was a homework assignment.")\n- What problem does it solve? \n- What did you learn?\n',
    },
    {
      type: "input",
      name: "installation",
      message:
        "\nInstallation\nWhat are the steps required to install your project? \nProvide a step-by-step description of how to get the development environment running.\n",
    },
    {
      type: "input",
      name: "usage",
      message:
        "\nUsage\nProvide instructions and examples for use. Include screenshots as needed.\nTo add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\nThen, using the relative filepath, add it to your README using the following syntax:\n\n\n ```md \n![alt text](assets/images/screenshot.png) \n```\n",
    },
    {
      type: "input",
      name: "contribution",
      message:
        "\nContribution\nList your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution,\nlist the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.\n",
    },
    {
      type: "input",
      name: "tests",
      message:
        "\nTests\nGo the extra mile and write tests for your application.\n Then provide examples on how to run them here.\n",
    },
    {
      type: "list",
      name: "license",
      message:
        "\nLicense\n\nThe last section of a high-quality README file is the license.\nThis lets other developers know what they can and cannot do with your project.\nIf you need help choosing a license, refer to https://choosealicense.com/ \n",
      choices: ["APACHE 2.0", "MIT", "Mozilla Public", "GNU LGPLv3"],
    },
    {
      type: "input",
      name: "github",
      message: "\nEnter your GitHub Username\n\n",
    },
    {
      type: "input",
      name: "email",
      message: "\nEnter your Email address.\n\n",
    },
  ])
  .then((answers) => {
    console.log("answers:", answers);
    fs.writeFileSync(
      path.join(__dirname, "README.md"),
      generateMarkdown(answers)
    );
    console.log("README GENERATED YAY!");
  });
