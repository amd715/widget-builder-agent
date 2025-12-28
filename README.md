# Widget Builder

Lightweight AI agent to generate User Interfaces using HTML and Tailwindcss.

## Overview

- `widget-builder-client/`: A Vite + React (TypeScript) frontend that hosts the widget playground and UI components used to build and preview widgets.
- `widget-builder-service/`: A TypeScript service and tooling for generating widget code and templates (includes `WidgetGenerator.tsx` AI agent and service-side routes).

## Project structure (top-level)

- `widget-builder-client/` — frontend app

  - `src/` — React source (components, playground, editor)
  - `index.html`, `vite.config.ts`, `package.json` — app entry and build config

- `widget-builder-service/` — generator / service

  - `src/agent/` — agent-related templates, tools, and designs
  - `WidgetGenerator.tsx`, `WidgetGeneratorAxios.tsx` — generator entrypoints
  - `package.json`, `tsconfig.json` — service config

- `LICENSE` — repository license

## Getting started

Pick a workspace and follow its README or run the typical commands:

```bash
cd widget-builder-client
npm install
npm run dev

# or for the service
cd widget-builder-service
npm install
npm run dev
```

## Notes

- This README is intentionally brief — expand sections if you want setup details, environment variables, or contributor guidelines.
