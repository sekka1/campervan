# Campervan AI Assistant

An Electron-based desktop application powered by the GitHub Copilot SDK that serves as your intelligent campervan knowledge assistant. Available for Windows and macOS.

## Overview

This application provides a conversational interface where users can ask questions about all things related to campervans—from vehicle specifications and maintenance tips to travel advice and DIY modifications. The AI agent combines structured knowledge stored in this repository with information from the web to deliver comprehensive, helpful answers.

## Tech Stack

- **Electron** — Cross-platform desktop application framework
- **TypeScript** — Primary language for all application code
- **GitHub Copilot SDK** — AI agent integration for natural conversation
- **Vitest** — Unit and integration testing
- **Playwright** — End-to-end testing

## Features

- **Cross-Platform Desktop App** — Built with Electron for Windows and macOS
- **TypeScript Throughout** — Fully typed codebase for reliability and maintainability
- **GitHub Copilot SDK Integration** — Leverages advanced AI capabilities for natural conversation
- **Structured Knowledge Base** — Local repository of campervan information the agent can reference
- **Web-Enhanced Responses** — Supplements local knowledge with up-to-date web information

## Project Structure

```
campervan/
├── src/                    # Electron application source code
│   ├── main/               # Main process (Node.js)
│   ├── renderer/           # Renderer process (UI)
│   └── preload/            # Preload scripts
├── data/                   # Structured campervan knowledge base
│   ├── models/             # Campervan models and specifications
│   ├── maintenance/        # Maintenance guides and schedules
│   ├── tips/               # Travel tips and best practices
│   ├── diy/                # DIY modifications and upgrades
│   └── glossary/           # Campervan terminology definitions
├── AGENTS.md               # AI agent guidelines and configuration
├── README.md
└── LICENSE
```

## Knowledge Base

The `/data` directory contains structured information about campervans in Markdown and YAML formats:

- **Markdown files** — Articles, guides, and descriptive content
- **YAML files** — Structured specifications, checklists, and metadata

This dual approach allows the AI agent to access both human-readable content and machine-parseable data for accurate responses.

## Getting Started

*Coming soon — Installation and development instructions will be added once the Electron app scaffolding is in place.*

### Prerequisites

- Node.js 18+
- npm or yarn
- TypeScript 5.x
- GitHub Copilot CLI installed and authenticated

### Installation

```bash
# Clone the repository
git clone https://github.com/sekka1/campervan.git
cd campervan

# Install dependencies
npm install

# Start the application
npm start
```

## Documentation

- [AGENTS.md](AGENTS.md) — Guidelines for how the AI agent uses the knowledge base and responds to queries
- [DEVELOPMENT.md](DEVELOPMENT.md) — Development best practices, testing strategies, and security guidelines

## Contributing

Contributions are welcome! You can help by:

1. **Adding campervan knowledge** — Submit Markdown or YAML files to the `/data` directory
2. **Improving the app** — Enhance the Electron application and AI integration
3. **Reporting issues** — File bugs or suggest features via GitHub Issues

Please review [DEVELOPMENT.md](DEVELOPMENT.md) for coding standards and [AGENTS.md](AGENTS.md) for knowledge base conventions.

## License

This project is licensed under the Apache License 2.0 — see the [LICENSE](LICENSE) file for details.