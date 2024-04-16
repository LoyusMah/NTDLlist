import express from "express";
const app = express();
import morgan from "morgan";

const PORT = process.env.PORT || 8000;

// middlewares
app.use(morgan("dev"));
app.use(express.json());
import taskrouter from "./router/taskrouter.js";
app.use("/api/v1/task", taskrouter);

//run the server
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
