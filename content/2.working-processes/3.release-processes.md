# Release

Our release process in the repositories is as follow:

1. Create a release and a tag from the GitHub interface. We try to follow [SemVer](https://semver.org/) as much as possible for our tags.
2. The CI/CD will check that the tag is valid. If the tag is not valid, the CI/CD will fail.
3. The CI/CD will run and produce the artifacts with the given tag.

Note: Some repositories may have a slightly different way of producing releases; therefore, refer to the documentation in the repositories to ensure that you follow the right steps. If the process is still not clear to you, do not hesitate to contact us.
