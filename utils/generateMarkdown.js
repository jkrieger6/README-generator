// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "BSD 2-Clause Simplified License") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "BSD 3-Clause New or Revised License") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Creative Commons Zero v1.0 Universal") { 
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (license === "Eclipse Public License 2.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
  } else if (license === "GNU Affero General Public License v3.0") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU General Public License v2.0") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "GNU Lesser General Public License v2.1") {
    return "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    return "";
  }
}

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
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credit](#credit)
  * [Contributors](#contributors)
  * [License](#license)
  * [Roadmap](#roadmap)
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
