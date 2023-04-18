// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  return `This is the license link https://choosealicense.com/licenses/mit/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License This project is licensed under the ${license} license.
  ${renderLicenseLink(license)} 
  ${renderLicenseBadge(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description${data.description}
  ## Installation${data.installation}
  ## Usage${data.usage}
  ## Credit${data.credit}
  ## Contributors${data.contribution}
  ${renderLicenseSection(data.license)}
  ## Roadmap${data.roadMap}`;
}

module.exports = generateMarkdown;
