# Contributing to Nexment

Thank you for your interest in contributing to Nexment!

Nexment is building tools and a platform for developers to build, learn, connect, and grow. We welcome people who want to improve the project, fix bugs, suggest meaningful features, improve documentation, or help make the codebase better.

Contributions are more than just pull requests. Thoughtful discussions, clear bug reports, useful documentation, and constructive feedback are equally valuable.

Before contributing, please take a moment to read this guide.

## 1. Before You Start

Please check the existing issues and pull requests before starting work. Someone else may already be working on the same problem.

For significant changes, open an issue or discuss your proposal with the maintainers first. This helps us agree on the approach before you invest time implementing it.

Small fixes, such as correcting typos or resolving straightforward bugs, generally do not require prior approval.

Please keep contributions focused. A pull request should solve a clearly defined problem rather than introduce several unrelated changes.

## 2. Development Setup

You will need Git, Bun, and a compatible Node.js environment if required by the project's dependencies or tooling.

Clone the repository:

```bash
git clone https://github.com/nexmentorg/nexment-website.git
cd nexment-website
```

Install dependencies:

```bash
bun install
```

Configure the required environment variables using the project's example environment file, if available. Some features may require external services, such as Neon PostgreSQL, Better Auth, OAuth providers, or Arcjet.

Start the development server:

```bash
bun run dev
```

Before submitting your changes, run the relevant checks supported by the repository, such as linting, type checking, tests, and production builds.

Do not commit secrets, credentials, personal tokens, or local environment files.

## 3. Code Quality and Development Practices

We value code that is understandable, maintainable, secure, and consistent with the existing architecture.

Please follow these principles:

- **Write understandable code.** Prefer clear names, simple control flow, and straightforward implementations.
- **Follow existing conventions.** Check nearby files before introducing a different pattern.
- **Keep changes focused.** Avoid unrelated refactoring or unnecessary dependencies.
- **Handle errors properly.** Do not silently ignore failures or expose sensitive information in error messages.
- **Consider security.** Validate untrusted input and enforce authorization on protected operations.
- **Preserve type safety.** Avoid unnecessary use of `any`, unsafe type assertions, or disabling TypeScript checks to bypass problems.
- **Update documentation.** If your change affects setup, configuration, behavior, or public interfaces, update the relevant documentation.
- **Test your work.** Verify the behavior you introduce and consider how your changes might affect existing functionality.

Do not submit code that you have not reviewed or do not understand.

## 4. AI-Assisted Development Policy

AI tools are allowed, including agentic coding tools. However, **vibe coding is not allowed**.

We do not prohibit AI-assisted development. We expect contributors to take responsibility for the code they submit, regardless of how it was produced.

### What is allowed?

- Using AI to explain unfamiliar code or concepts.
- Asking AI to help investigate bugs or compare implementation approaches.
- Using coding agents to implement features, refactor code, write tests, or improve documentation.
- Using AI to review code, identify edge cases, or suggest improvements.
- Using agentic tools to perform multi-step development tasks.

### What is not allowed?

- Accepting generated code without reviewing and understanding it.
- Submitting large amounts of AI-generated code simply because it appears to work.
- Merging changes without checking their behavior, correctness, and security implications.
- Trusting generated tests without verifying that they meaningfully test the intended behavior.
- Introducing unnecessary abstractions, dependencies, or complexity because an AI tool suggested them.
- Claiming to understand or have verified code that you have not actually reviewed.

### Contributor responsibility

If you use AI or a coding agent, you are responsible for its output.

You should be able to explain what your changes do, why the chosen approach is appropriate, and what limitations or risks they introduce. You should also be able to investigate and fix problems in the code you submit.

**Using an agent is fine. Delegating your responsibility to that agent is not.**

## 5. Issues and Bug Reports

Before opening an issue, search existing issues to avoid duplicates.

When reporting a bug, include as much relevant information as possible:

- A clear and descriptive title.
- A description of the problem.
- Steps to reproduce it.
- The expected behavior and the actual behavior.
- Relevant error messages, logs, or screenshots.
- Environment details when they are relevant.

For feature requests, explain the problem you want to solve, why it matters, and how the proposed feature might help.

Use the appropriate issue template whenever one is available. Please do not use issues for general support questions that belong in the project's designated communication channels.

## 6. Branches and Pull Requests

Create a separate branch for your contribution. Avoid making changes directly on the main branch.

For example:

```bash
git switch -c fix/description-of-fix
```

Use a descriptive branch name that reflects the work being done. Examples include:

- `feat/developer-profiles`
- `fix/authentication-error`
- `docs/setup-guide`
- `refactor/database-queries`

When your work is ready, commit your changes and push the branch:

```bash
git add .
git commit -m "fix: resolve authentication error"
git push -u origin fix/description-of-fix
```

Open a pull request against the appropriate target branch. Use the repository's pull request template and provide a clear description of your changes.

A good pull request should:

- Explain what changed and why.
- Reference the related issue, if applicable.
- Describe how the changes were tested.
- Include screenshots for relevant UI changes.
- Mention known limitations or important implementation decisions.
- Contain only changes relevant to the proposed work.

Make sure your pull request is complete, reviewable, and ready for feedback before requesting a review.

## 7. Review and Merging

Submitting a pull request does not guarantee that it will be merged.

Maintainers may request changes, ask questions, suggest a different approach, or close a contribution that does not fit the project's direction.

Please respond to review feedback constructively. If you disagree with a suggestion, explain your reasoning and discuss alternatives.

Keep your branch updated when necessary, resolve conflicts carefully, and rerun relevant checks after making changes.

Do not force changes into unrelated parts of the codebase merely to satisfy a review comment. Discuss significant design disagreements with the maintainers.

Maintainers make the final decision on whether a contribution is accepted.

## 8. Security Issues

Please do not report security vulnerabilities in public GitHub issues or pull requests.

Report suspected vulnerabilities privately at **admin@nexment.org**.

Include a description of the issue, its potential impact, and reproduction details where possible. Avoid including real user data, live credentials, or other sensitive information in your report.

Please allow the maintainers reasonable time to investigate before publicly disclosing a vulnerability.

## 9. Community Standards

Contributors are expected to communicate respectfully, provide constructive feedback, and help maintain a welcoming environment.

Harassment, personal attacks, discriminatory behavior, and deliberately disruptive conduct are not acceptable.

Please read the organization's [Code of Conduct](https://github.com/nexmentorg/.github/blob/main/CODE_OF_CONDUCT.md) before participating.

Additional repository-wide resources, including issue templates and pull request guidelines, are maintained in the [Nexment organization-wide community files](https://github.com/nexmentorg/.github).

Follow the relevant templates and guidelines when opening issues or submitting pull requests.

## 10. Questions and Contact

If you have questions about contributing, need clarification on a proposed change, or want to discuss an improvement, contact us at:

**General contact:** contact@nexment.org

**Security reports:** admin@nexment.org

For project-specific discussions, you can also use GitHub Issues and Pull Requests where appropriate.

Thank you for helping make Nexment better. We appreciate contributions from developers who care about the quality of their work and the people who will use it.

**Build. Learn. Connect. Grow.**
