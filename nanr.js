import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config({ path: './config/.env' });

const app = express();

connectDB();

import indexRouter from "./routes/index.js";
import urlRouter from "./routes/urls.js";

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlRouter);

// Server setup
const PORT = process.env.PORT || 4011
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
