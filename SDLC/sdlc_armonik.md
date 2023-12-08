# SDLC (Software Development Life Cycle) in ArmoniK

The SDLC is used to establish a structured foundation, enhancing the rationality and quality of the code. It involves a division into various parts, allowing for a methodical progression through the development process, aimed at both creating features and promptly addressing any arising issues.

To precisely understand how SDLC functions, let's explore its different phases in detail and how they are implemented in the ArmoniK application.

# Different SDLC phases in ArmoniK

The Software Development Life Cycle (SDLC) in ArmoniK delineates each task in creating a new feature or version. The details of the different phases may vary from one deployment cycle to another but generally adhere to the same template.

## Planning and design

Before commencing work on a new feature, The ArmoniK team focuses on understanding expectations and requirements. ArmoniK has set up a document called AEP that facilitates this phase:

- **AEP (ArmoniK Enhancement Proposal)** are designed to serve as the primary mechanisms for proposing significant new features, gathering community input on an issue, and documenting the design decisions related to ArmoniK. The AEP author is responsible for building consensus within the community and documenting dissenting opinions. This document is exposed to the ArmoniK team, which decides on the feasibility of the of the AEP, for more details see [AEP](https://github.com/aneoconsulting/ArmoniK.Community/blob/main/AEP/aep-00001.md).

With a clear EPA, the ArmoniK team can plan how best to achieve the goal of creating functionality, optimising the development process while meeting the software requirements.

## Implementation

In the implementation phase of the ArmoniK SDLC, collaboration between developers is orchestrated via [GitHub](https://github.com/aneoconsulting). The armonik team raises issues that are listed in a [project-board](https://github.com/orgs/aneoconsulting/projects/13) on GitHub. the assignment of issues to developers typically occurs collaboratively. Contributors can self-assign tasks they are interested in, express their interest in specific issues. The overall goal is to foster open participation, allowing contributors to choose tasks based on their skills and interests. Project maintainers play a role in coordinating to ensure an equitable distribution of tasks and to support contributors.

When a developer decides to address a specific issue, they typically create a dedicated branch in the version control system (e.g., Git). This branch is where they will make changes to the code to resolve the issue. Creating separate branches helps in isolating changes and avoids conflicts with the main codebase.

Once the developer has made the necessary changes in their dedicated branch, they initiate a [PR](https://github.com/aneoconsulting/ArmoniK/pulls). A Pull Request is a proposal to merge the changes from one branch (containing the issue resolution) into another (usually the main or development branch). It acts as a formal way to review and discuss code changes before merging them into the main codebase.

The Pull Request undergoes a peer review process. Other developers on the project review the code changes to ensure quality, adherence to coding standards, and compatibility with the project's goals. This review process helps catch errors, improve code quality, and share knowledge among the team.

By using issues, branches, and Pull Requests, collaboration becomes more streamlined. The entire development process is documented and transparent, allowing team members to follow the progress of issue resolution, provide feedback, and contribute effectively.

## Testing

In the testing phase of ArmoniK's SDLC, the modular structure of the application, comprising over 10 repositories such as armonik, armonik.infra, armonik.ext.csharp, armonik.community, etc., is centrally managed on the GitHub platform. To ensure code quality and the proper functioning of the entire system, pipelines and workflows are implemented.

GitHub [Actions](https://github.com/aneoconsulting/ArmoniK/actions) is utilized to create workflows that automate various tests across repositories. These workflows include unit tests, integration tests, and module-specific tests. When a Pull Request is opened, workflows analyze the source code to identify potential bugs. If tests fail, the checks display a 'failed' status in the Pull Request, serving as a safeguard.

ArmoniK utilizes multiple specific workflows to ensure code quality and maintain the stability of the application.

### 1. Linters

- The [Linters workflow](https://github.com/aneoconsulting/ArmoniK.Infra/blob/main/.github/workflows/linter-helm.yml) checks code formatting and adherence to best practices in various programming languages. This ensures consistent and high-quality code across the project.

### 2. Documentation Generation

- The [Deployment workflow](https://github.com/aneoconsulting/ArmoniK/blob/main/.github/workflows/deploy-docs.yml) is dedicated to deploying the application and verifying that changes do not affect the deployment process. This workflow includes steps for generating and updating documentation, providing valuable information for users and developers.

### 3. Semantic Commit Validation

- The [Semantic Pull Request workflow](https://github.com/aneoconsulting/ArmoniK.Infra/blob/main/.github/workflows/semantic-pull-request.yml) manages Pull Request names according to semantic commit conventions. This ensures that commits are meaningful and facilitates versioning automation, contributing to a standardized and understandable development history.

### 4. Automated Testing

- [Automated Testing Workflow](https://github.com/aneoconsulting/ArmoniK/blob/main/.github/workflows/deploy.yml) is an automated testing workflow designed to ensure the seamless integration of new feature. This workflow focuses on conducting unit and integration tests, simplifying the addition of new components while ensuring they do not adversely affect the overall feature of the existing codebase.

This combination of workflows covers essential aspects of the development process, from code formatting and documentation to commit conventions and automated testing. While the mentioned workflows are frequently used in their respective repositories, the flexibility exists for adding or removing workflows based on project requirements. This comprehensive approach guarantees robust test management across all repositories, contributing to the overall code quality and stability of the ArmoniK application.

## Release

The Release Workflow, defined in [make-release.yml](https://github.com/aneoconsulting/ArmoniK.Core/blob/main/.github/workflows/make-release.yml), plays a crucial role in the Software Development Life Cycle (SDLC) of ArmoniK. After the validation of features, the release phase is validate using this workflow.

### Workflow Overview

- **Trigger:** The workflow is triggered on each push event with a tag that follows the semantic versioning pattern (e.g., "1.0.0").

- **Jobs:**

1. **Versioning:**
   - Computes versions based on semantic commits and prepares for image versioning by removing local tags.

2. **imagesCore:**
   - Builds and pushes Docker images for ArmoniK core using the release version.

3. **buildImages:**
   - Builds and pushes various Docker images for different ArmoniK components using the release version. Supports a matrix of image paths and names.

4. **publish-nuget:**
   - Builds, packs, and pushes NuGet packages for ArmoniK Core Base using the release version.

5. **update-changelog:**
   - Updates GitHub release notes using [order-github-release-notes](https://github.com/aneoconsulting/order-github-release-notes).

This workflow serves to validate the user-pushed tag, confirming it is at the correct version, and subsequently executes tasks such as Docker image building and pushing, NuGet package publishing, and updating release notes on GitHub.

By these release tasks, ArmoniK can efficiently deliver updates, enhancements, and bug fixes to its users, maintaining a streamlined and reliable software release process.

## Maintenance

In the maintenance phase of ArmoniK's SDLC, which is dedicated to handling bugs and issues, the team is readily available to address any new issues using the established processes throughout the project's lifecycle. The method for reporting bug during this phase is by creating a GitHub issue

### Reporting New Bugs

When a new bug is detected during this phase, the way to resolve it is by creating a corresponding 'issue' in the system. This issue is then linked to this specific paragraph in the technical documentation [Implementation](#implementation). This reinitiates SDLC process, allowing developers and contributors involved in maintenance to access this issue on GitHub, understand the problem, and collaborate to resolve the bug. This collaborative approach ensures an effective resolution of detected bug.
