# Contributing to Vibeezz

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting an issue
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Our Development Process

All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly <a href="https://github.com/vibeezz/vibeezz/pulls">here</a>, and after review, these can be merged into the project.

## Using the Project's Standard Commit Messages

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please follow these steps to ensure your
commit messages are standardized:

1. Make sure your terminal path is in the root of the project (not inside any of the packages).
2. Run `npm install`.
3. Stage the files you are commiting with `git add [files]`.
4. Run `npm commit`. This will start an interactive prompt that generates your commit message:
   1. Select the type of change.
   2. Type the scope. This is either `global` for project-wide changes or one of the packages (client, server etc.).
   3. Write a short, imperative tense description of the change.
   4. If the above was not sufficient, you may now write a longer description of your change (otherwise press enter to leave blank).
   5. y or n for whether there are any breaking changes (e.g. changing the props of a component, changing the JSON structure of an API response).
   6. y or n for whether this change affects an open issue, if positive you will be prompted to enter the issue number.
5. Your commit message has now been created, you may push to your fork and open a pull request (read below for further instructions).

## Pull Requests

1. Fork the repo and create your branch.
2. Ensure to describe your pull request.

## Quickstart Local Frontend Development

Do this if you only want to do React stuff and don't want to touch Server side:

### UI _(reactjs)_:

Navigate to `/client`

- Run `yarn`
- Run `yarn staging` (this tells React to connect to a hosted version of the backend for development purposes)
- Read `client/README.md` for more information and a fixes for known development issues.

## Manual Full Local Development

How to run locally:

## Backend

Navigate to `/` and set the following environment variables:

```
PORT=5000
NODE_ENV=development
GITHUB_CLIENT_ID= For oauth purposes
GITHUB_CLIENT_SECRET=For oauth purposes
FACEBOOK_CLIENT_SECRET=For oauth purposes
FACEBOOK_CLIENT_ID=For oauth purposes
SESSION_SECRET= For making a secure cookie store

REDISCACHEKEY= if you are using a cloud version of redis
REDISCACHEHOSTNAME= **if you are using a cloud version of redis**
REDISCACHEPORT=6380
```

Run the following commands:

Start the server

```shell
$ npm run dev
```

## `Frontend`

Navigate to `/client` and run `yarn`.

Then run `yarn start`.

## Issues

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue. Report a bug by <a href="https://github.com/vibeezz/vibeezz/issues">opening a new issue</a>; it's that easy!

## Feature Request

Great Feature Requests tend to have:

- A quick idea summary.
- What & why you wanted to add the specific feature.
- Additional context like images, links to resources to implement the feature etc, etc.

## License

By contributing to Vibeezz, you agree that your contributions will be licensed
under the [LICENSE file](LICENSE).
