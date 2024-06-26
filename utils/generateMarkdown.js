// Function to generate a license badge based on the license type
function renderLicenseBadge(license) {
  if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}
// Function to generate a license link
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return '';
  }
}
// Function to generate the license section of the Samplereadme

function renderLicenseSection(license) {
  if (license) {
    return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) License - see the [LICENSE](LICENSE) file for details.`;
      } else {
        return '';
      }
    }
    // Function to generate markdown for Samplereadme
    
    function generateMarkdown(data) {
      return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

To install the necessary dependencies, run the following command:

${data.installation}


## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me via email at [${data.email}](mailto:${data.email}). 
You can find more of my work on GitHub at [${data.github}](https://github.com/${data.github}).

${renderLicenseSection(data.license)}`;
    }
    
    module.exports = generateMarkdown;
    

  
    

    



    


