//Function to render license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;

  }
  return "";

}

// Function to render license link
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `https://choosealicense.com/licenses/${license.toLowerCase()}`

    );
  }
  return "";
}


// Function to generate markdown for README
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

 This project is licensed under the ${license} license. To learn more please visit ${renderLicenseLink(license)}.`;
  }
  return "";
  }

  function renderMailTo(email) {
    return `[${email}](mailto:${email})`;
  }

  function renderGitHubLink(github) {
    return `[${github}](github.com)`;
  }


// Function to generate the README file contents
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.credits}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${renderMailTo(data.email)}. You can find more of my work at ${renderGitHubLink(data.github)}.`;
}

module.exports = generateMarkdown;
