

const inquirer = require('inquirer');
const fs = require('fs');

const generatemd = ({ title, license, usage, installation, github, test, linkedin, contributers, email }) =>
  `# ${title}

  ![License:${license}](https://custom-icon-badges.demolab.com/badge/license-${license}-yellowgreen.svg?logo=law)
  
  ![Google](https://custom-icon-badges.demolab.com/badge/Google-grey?logo=google&logoColor=red)(https://www.google.com/)

  ## Table of Contents:

  - [Information](#information)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  
  ## Information
  Welcome to the professional README generator.
  Using This Professional README generator will provide you with a fantastic README to start you off on your next project.
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Contributing
  
  ${contributers} is/are the contributors to this project. 
  This project currently doesn't accept contributors from other developers.

  [Contributors Profile](www.linkedin.com/in/${linkedin})

  ## Tests
  ${test}
  
  ## Questions
  
  Please reach me at ${email} for any questions related to the project.
  
  ## License
  ![License: ${license}](https://custom-icon-badges.demolab.com/badge/license-${license}-yellowgreen.svg?logo=law)

  For details regarding license badges please check this link:
  
  [Open source licenses](https://opensource.org/licenses)
  
  ## Github
  [Github Profile](https://github.com/${github})
  Feel free to check my other projects.

  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose your license',
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
    {
      type: 'input',
      name: 'test',
      message: 'Enter testing requirments for this project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage guidelines for this project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation requirements for this project',
    },
  ])
  .then((answers) => {
    const markdownPageContent = generatemd(answers);

    fs.writeFileSync('index.md', generatemd(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created index.md!')
    );
  });