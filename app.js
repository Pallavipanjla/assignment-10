import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import studentRoutes from "./routes/studentRoutes.js";
import logger from "./middlewares/logger.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger);

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", studentRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});