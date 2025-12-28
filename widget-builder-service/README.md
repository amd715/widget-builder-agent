# Widget Builder Agent

An AI-powered UI/UX design generator built with Node.js, Express, and OpenAI Agents SDK.

## Features

- 🎨 AI-powered widget design generation
- 🚀 Express REST API
- 📝 File creation and management tools
- 🌐 Web interface for easy interaction

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

## Available Scripts

- `npm run dev` - Run the development server with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled production server
- `npm run server` - Build and run the production server

## API Endpoints

### GET /

Returns API information

### GET /health

Health check endpoint

### POST /generate

Generate widget designs

**Request Body:**

```json
{
  "prompt": "Create designs for a dashboard with header, search bar, and product grid"
}
```

**Response:**

```json
{
  "success": true,
  "result": "...",
  "timestamp": "2025-12-23T..."
}
```

## Usage

1. Start the server:

```bash
npm run dev
```

2. Open your browser to `http://localhost:3000`

3. Enter your widget requirements and click "Generate Widget"

4. The agent will create HTML files with your designs

## Tools Available to the Agent

- **get_time_stamp**: Generate unique timestamps for file naming
- **create_file**: Create HTML/CSS/JS files
- **read_file**: Read existing template files
- **list_files**: List files in a directory
- **create_directory**: Create new directories

## Project Structure

```
widget-builder/
├── src/
│   ├── index.ts                    # Main Express server
│   ├── agent/
│   │   ├── agent.ts                # AI agent implementation
│   │   ├── tools.ts                # Agent tools (file operations, etc.)
│   │   ├── index.ts
│   │   └── templates/
│   │       └── index.html          # HTML template for designs
│   └── routes/
│       └── index.ts                # API routes
├── WidgetGenerator.tsx             # React widget generator component
├── WidgetGeneratorAxios.tsx        # Axios-based widget generator
├── REACT_COMPONENT_README.md       # React component documentation
├── package.json
├── tsconfig.json
└── README.md
```

## License

ISC
