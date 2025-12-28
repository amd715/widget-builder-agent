# Widget Builder Client

React + TypeScript + Vite frontend application for building and designing UI widgets with an interactive playground environment.

## Overview

The Widget Builder Client is a full-featured web application that enables users to:

- Create and configure UI widgets through an intuitive code editor
- Test widgets in a live playground environment
- Interact with an AI-powered chat interface for design assistance
- Manage and organize widget projects

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **ESLint** - Code quality and style checking

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Application header
│   ├── Layout.tsx      # Main layout wrapper
│   ├── icons/          # SVG icon components
│   └── playground/     # Interactive playground components
│       ├── Playground.tsx    # Main playground container
│       ├── chat/            # Chat interface
│       ├── editor/          # Code editor
│       └── navbar/          # Side navigation
├── App.tsx             # Root component
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
cd widget-builder-client
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Features

- **Interactive Code Editor** - Write and edit widget code with syntax highlighting
- **Live Playground** - Test widgets in real-time as you develop
- **Chat Interface** - Get AI-powered suggestions and assistance
- **Responsive Design** - Works seamlessly on different screen sizes
- **Type Safety** - Full TypeScript support for robust development

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks

## Contributing

For development guidelines and contribution standards, see the main project documentation.
