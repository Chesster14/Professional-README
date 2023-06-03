

const inquirer = require('inquirer');
const fs = require('fs');

const generatemd = ({ title, licence, github, linkedin, contributers, email }) =>
  `# ${title}

  ![License:${licence}](https://custom-icon-badges.demolab.com/badge/license-${licence}-yellowgreen.svg?logo=law)
  ![Google](https://custom-icon-badges.demolab.com/badge/Google-grey?logo=google&logoColor=red)(https://www.google.com/)

  ## Table of Contents:

  - [GeneralInfo](#General Info)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Resources](#resources)
  - [License](#license)
  
  ---
  
  ## General Info
  Welcome to the professional README generator
  
  ---
  
  ## Installation
  
  ---
  
  ## Usage
  
  ---
  
  ## Contributing
  
  ---
  
  ## Tests
  
  ---
  
  ## Questions
  
  ---
  
  ## Resources
  
  ---
  
  ## License`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'list',
      name: 'licence',
      message: 'Please choose your licence',
      choices: ["MIT", "BSD", "Apache", "GPL"]
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'contributers',
      message: 'Who will be contributing to your project?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const markdownPageContent = generatemd(answers);

    fs.writeFile('index.md', markdownPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.md!')
    );
  });