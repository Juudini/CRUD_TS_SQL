import express, { Application } from "express";
import bodyParser from "body-parser";
import router from "./routes/usuario";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.use("/api", router);
