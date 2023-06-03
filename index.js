

const inquirer = require('inquirer');
const fs = require('fs');

const generatemd = ({ title, licence, github, linkedin }) =>
  `# ${title}

  ![License:${licence}](https://custom-icon-badges.demolab.com/badge/license-${licence}-yellowgreen.svg?logo=law)

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
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
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