import { connectDB } from './database/db';
import * as express from "express";
import { errorHandler } from './middlewares/errorMiddleware';
import { PORT } from "./utils/config";
import * as Colors from "colors.ts";
Colors.colors("","")

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/projects", require("./routes/projectRoutes"));

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port:${PORT}`));
