// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {renderLicenseBadge, renderLicenseLink} = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = ({title, description, installation, usage, contributing, tests, license, github, email, badge, licenseText}) =>
`# ${title}
${badge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${license}
${licenseText}

## Questions
-   https://github.com/${github}
-   Email:${email}`;

inquirer
.prompt([
    {
        type:'input',
        message: 'Please enter your projects title.',
        name: 'title',
    },
    {
        type:'input',
        message: 'Please enter your projects description.',
        name: 'description',
    },
    {
        type:'input',
        message: 'Please enter your projects installation.',
        name: 'installation',
    },
    {
        type:'input',
        message: 'Please enter your projects usage.',
        name: 'usage',
    },
    {
        type:'input',
        message: 'Please enter your projects contributing.',
        name: 'contributing',
    },
    {
        type:'input',
        message: 'Please enter your projects tests.',
        name: 'tests',
    },
    {
        type:'list',
        message: 'Please enter your projects license.',
        name: 'license',
        choices: ['MIT','IBM','ISC','Mozilla'],
    },
    {
        type:'input',
        message: 'Please enter your github username.',
        name: 'github',
    },
    {
        type:'input',
        message: 'Please enter your email.',
        name: 'email',
    }
])
.then((data) => {
    data.badge = renderLicenseBadge(data.license),
    data.licenseText = renderLicenseLink(data.license),
fs.writeFile('demo-README.md', questions(data), (err) => {
    err ? console.log(err) : console.log("successful")
})})

