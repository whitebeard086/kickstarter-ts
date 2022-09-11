import * as express from "express";
import { PORT } from "./utils/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/projects", require("./routes/projectRoutes"));

app.listen(PORT, () => console.log(`Server started on port:${PORT}`));
