<p align="left">
   <img src=".github/logo-docs.gif" width="200"/>
</p>

# Go Finances

> Store transactions and keep up to date with your balance

> [Click here to see the database model](https://dbdiagram.io/d/5ec2703039d18f5553ff5e91)

[![Author](https://img.shields.io/badge/author-LauraBeatris-1E78F6?style=flat-square)](https://github.com/LauraBeatris)
[![Languages](https://img.shields.io/github/languages/count/LauraBeatris/gofinances-api?color=%231E78F6&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/LauraBeatris/gofinances-api?color=1E78F6&style=flat-square)](https://github.com/LauraBeatris/gofinances-api/stargazers)
[![Forks](https://img.shields.io/github/forks/LauraBeatris/gofinances-api?color=%231E78F6&style=flat-square)](https://github.com/LauraBeatris/gofinances-api/network/members)
[![Contributors](https://img.shields.io/github/contributors/LauraBeatris/gofinances-api?color=1E78F6&style=flat-square)](https://github.com/LauraBeatris/gofinances-api/graphs/contributors)

# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [FAQ](#postbox-faq)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)

# :rocket: Features

* 🌴 Transactions CRUD
*  📂 Import transactions from CSV files

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/LauraBeatris/gofinances-api.git```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you use a SSH key registered in your Github account, clone the project using this command:

```git clone git@github.com:LauraBeatris/gofinances-api.git```

**Install dependencies**

```yarn install```

Create your enviroment variables based on the examples of ```.env.example```

```cp .env.example .env```

After copying the examples, make sure to fill the variables with new values.

**Setup a database**

Install [Postgres](https://www.postgresql.org/) to create a database or if you have [Docker](https://www.docker.com/) in your machine, fill the environment values related to database configurations and then run the following commands in order to create a postgres container.

```docker-compose up```

# :runner: Getting Started

Run the transactions in order to configure the database schema

```yarn typeorm migration:run```

Run the following command in order to start the application in a development environment:

```yarn dev:server```

# :postbox: Faq

**Question:** What are the tecnologies used in this project?

**Answer:** The tecnologies used in this project are [NodeJS](https://nodejs.org/en/) + [Express Framework](http://expressjs.com/en/) to handle the server and [TypeORM](https://typeorm.io/#/) 

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [GoFinances API](https://github.com/LauraBeatris/gofinances-api/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/LauraBeatris/gofinances-api/blob/master/CONTRIBUTING.md) to find out about the coding standards.

# :tada: Contributing

Check out the [contributing](https://github.com/LauraBeatris/gofinances-api/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2020.
This project is under the [MIT license](https://github.com/LauraBeatris/gofinances-api/master/LICENSE).

Made with love by [Laura Beatris](https://github.com/LauraBeatris) 💜🚀
