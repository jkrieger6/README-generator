// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === "GNU General Public License v3.0") {
    return "[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)";
  } else if (license === "MIT") {
    return "[MIT](https://choosealicense.com/licenses/mit/)";
  } else if (license === "BSD 2-Clause Simplified License") {
    return "[BSD 2-Clause Simplified License](https://choosealicense.com/licenses/bsd-2-clause/)";
  } else if (license === "BSD 3-Clause New or Revised License") {
    return "[BSD 3-Clause New or Revised License](https://choosealicense.com/licenses/bsd-3-clause/)";
  } else if (license === "Boost Software License 1.0") {
    return "[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)";
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "[Creative Commons Zero v1.0 Universal](https://choosealicense.com/licenses/cc0-1.0/)";
  } else if (license === "Eclipse Public License 2.0") {
    return "[Eclipse Public License 2.0](https://choosealicense.com/licenses/epl-2.0/)";
  } else if (license === "GNU Affero General Public License v3.0") {
    return "[GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/)";
  } else if (license === "GNU General Public License v2.0") {
    return "[GNU General Public License v2.0](https://choosealicense.com/licenses/gpl-2.0/)";
  } else if (license === "GNU Lesser General Public License v2.1") {
    return "[GNU Lesser General Public License v2.1](https://choosealicense.com/licenses/lgpl-2.1/)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)";
  } else if (license === "The Unlicense") {
    return "[The Unlicense](https://choosealicense.com/licenses/unlicense/)";
  } else if (license === "None") {
    return "";
  }
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
  ## Description 
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Credit 
  ${data.credit}
  ## Contributors
  ${data.contribution}
  ${renderLicenseSection(data.license)}
  ## Roadmap 
  ${data.roadMap}`;
}

module.exports = generateMarkdown;
