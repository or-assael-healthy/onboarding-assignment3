[![](https://lh3.googleusercontent.com/KH0IuklaqIrV25n3Ec6aaY1U88uHk0kLn-fYKSVKE6gG6wIYPSnTtizqWpAy-neVkTlKfdfl8NacE5By9pBsLDFE4EbacI7O-DnZhcB1YQuxEhsPTxvHQ810cI7LHpId1ok4k3pc6jr92o9-Ew-lXg)](http://healthy.io/)

Coding Assignment - JS Onboarding Backend

### Background

Welcome to Healthy.io! 

After going through most of the learning materials, it's time to put your knowledge to practice. The assignment below is meant to help you understand the JS ecosystem in Healthy.io (our various shared middlewares, packages, logging systems, etc), test your code reading abilities as well as maintain our coding conventions, how we research issues and debug our system.

Good Luck!

### Assignment

You have been tasked with writing a user registration service. This service will accept requests from other backend services to register users. It will store the user's details in the DB and will send emails to our patients and users through an email worker.

### Requirements

-   You will build 2 components: the user registration service and the email worker.

-   User Registration:

-   The registration service will expose a REST API for a user entity CRUD. Implement whichever endpoints you feel are appropriate for a user registration service.

-   Upon user registration, the service should send the user a welcome email through the Email Worker.

-   Your data should be stored in a Postgres DB using Sequelize ORM.

-   The user model must at least have the following properties: email, phone number and full name.

-   A user can't register more than once with the same email address or phone number.

-   Email Worker:

-   You will send emails using [SendGrid's free API](https://sendgrid.com/solutions/email-api/) (create an account using your Healthy.io email address).

-   The worker must handle only AMQP messages, and process the messages using our [Messenger NPM package](https://github.com/OwnHealthIL/be-infra/packages/336139).

-   You should store sent messages and their status in a DB for auditing.

### Guidelines

-   Your code should be implemented using ES2017 standards (async/await).

-   Any external services (databases, message brokers, ...) should be included as a docker-compose.yml file in your project.

-   Include appropriate logging (JSON structured logs) using our shared [Logger NPM package](https://github.com/OwnHealthIL/be-infra/packages/284022).

-   DB connection and model management should be done using our [DB connection management](https://github.com/OwnHealthIL/be-infra/packages/311048) and [DB migration](https://github.com/OwnHealthIL/be-infra/packages/813380) NPM modules.

-   Error handling and input validation should be included. Use [Joi](https://joi.dev/), [shared http-errors module](https://github.com/OwnHealthIL/be-infra/packages/725150) and our [HTTP responses, error handling and input validation middlewares](https://github.com/OwnHealthIL/be-infra/packages/284023).

-   Include tests (unit/integration/e2e), and appropriate Github Actions to run them on each commit.

-   Please include a readme with your code, describing how to run it.