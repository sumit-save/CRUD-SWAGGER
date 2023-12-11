const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yaml");
const fs = require("fs");
require("dotenv/config");
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(express.json());

// Swagger Ui
const file = fs.readFileSync("./swagger.yaml", "utf8");
const data = yaml.parse(file);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(data));

// Routes
const postsRoutes = require("./routes/posts");
app.use("/", postsRoutes);

// Database Connection Using Mongoose ORM
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, (error) => {
    if (error) throw error;
    console.log("MongoDB Database Connected Successfully");
});

// Create Server On Localhost:8000
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server Started On Localhost:${PORT}`);
});