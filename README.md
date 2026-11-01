# Nexment

**Build. Learn. Connect. Grow.**

Nexment is a developer-focused platform built to help developers showcase their work, share knowledge, learn new skills, and connect with other developers.

This repository contains the source code for the Nexment website and its web application.

## 1. Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Package Manager:** Bun

## 2. Features

Nexment aims to provide developers with a platform to:

- Create and customize developer profiles.
- Showcase projects and technical achievements.
- Write and publish blogs and articles.
- Discover developers and their work.
- Learn through educational resources.
- Participate in community activities.

Features will be introduced incrementally as the platform develops.

## 3. Project Structure

The project follows a modular structure to keep the codebase maintainable and scalable.

```text
nexment/
├── public/             # Static assets
├── src/
│   ├── app/            # Pages, layouts, and API routes
│   ├── components/     # Reusable UI components
│   ├── lib/            # Shared utilities and integrations
│   └── ...             # Additional application modules
├── package.json
├── bun.lock
├── tsconfig.json
└── README.md
```

The structure may evolve as the application grows.

## 4. Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- Git

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/nexmentorg/nexment-website.git
cd nexment-website
bun install
```

Create a `.env.local` file using the environment variables documented in the project's example environment file.

Start the development server:

```bash
bun run dev
```

Open `http://localhost:3000` in your browser.

## 5. Contributing and License

Contributions are welcome. Please read the repository's contribution guidelines before submitting pull requests. Report bugs and propose improvements through GitHub Issues.

This project is licensed under **Apache License 2.0**.

See the [LICENSE](LICENSE) file for full license text.

---

**Build. Learn. Connect. Grow.**
