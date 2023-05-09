# Submission guidelines

## Submit an issue

Before submitting a new issue, please take a look at the existing [ArmoniK issues](https://github.com/aneoconsulting/ArmoniK/issues) and [Discussions](https://github.com/aneoconsulting/ArmoniK/discussions) to see if someone already mentioned a similar one or even the same issue you would like to raise. If it already exists, it may inform you of a workaround that is readily available.

We want to fix issues as soon as possible, but before fixing a bug, we need to reproduce and confirm it. In order to do so, we require you to provide a minimal reproduction example. This will give us important information without having to ask you multiple complementary questions.

A minimal reproduction scenario allows us to quickly confirm a bug, isolate it and confirm that we are really fixing it. It includes detailled informations about the environment you use, the ArmoniK configurations and versions that leads to your issue and what to do to reproduce your issue. It can also include code snippets that are useful to highlight the issue. It can go up to a full example (client + worker) published on a git repository.

Unfortunately, we are not able to investigate or fix bugs without a minimal reproduction sample, so if we don't hear back from you, we will close the issue since it is missing information to be reproduced. The issue can be reopened if the user can provide more information after the issue was closed.

Helping us to easily reproduce an issue also helps you. Our developers will be able to more easily pinpoint the problem and provide a correction. As a result, the process of resolving issues is accelerated.

You can file new issues by selecting from our [new issues templates](https://github.com/aneoconsulting/ArmoniK/issues/new/choose) and filling it.

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. We use it to auto-generate our changelog.

Only `fix:` and `feat:` will be presented in the changelog.

## Submit a Pull Request

If you don't know how to send a Pull Request, we recommend reading [the guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

When sending a pull request, make sure your PR's title also follows the [Commit Convention](#commit-convention).

We follow [trunk based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) to contribute to our repositories.

The core principles are as follow: (we advise you to read the previous link)
- Developpers merge small and frequent updates to the main branch
- Developpers create short-lived branches with a few small commits
- CI/CD runs on every push, and we check that the tests (unitary, functional, and integration) and formatting still pass.
- Releases are produced from the main branch.

Thus, a Pull Request (PR) should target the main branch.

The following coding rules must be respected:

- All features or bug fixes __must be tested__ by one or more unit tests.
- All public APIs must be documented.
- Formatting, style and code quality rules must be applied.

If your PR fixes or resolves an existing issue, please link in the desciption of your PR. You can either put the issue number or the complete link to the issue if the fix is not in the same repository as the issue. You will have to replace the 123 by the issue number you fix.

Example:

```markdown
fix #123
fix https://github.com/aneoconsulting/ArmoniK/issues/123
```

This will let GitHub know the issues are linked, and automatically close them once the PR gets merged. Learn more at [the guide](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

## Review a Pull Request

Reviewers should ensure that the PR submission guidelines are respected.

We should particularly take attention to:
- Documentation
- Tests
- Maintainability
- Performances
