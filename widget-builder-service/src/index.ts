import express from "express";
import cors from "cors";
import * as path from "path";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(routes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Widget Builder Agent server running on http://localhost:${PORT}`);
    console.log(`📝 API Endpoints:`);
    console.log(`   - GET  http://localhost:${PORT}/`);
    console.log(`   - GET  http://localhost:${PORT}/health`);
    console.log(`   - POST http://localhost:${PORT}/generate`);
});
