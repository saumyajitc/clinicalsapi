import express from "express";
import properties from "./config/properties";
import MONGODB from "./config/db";
import bodyParser, { json } from "body-parser";
import ROUTES from "./routes";

MONGODB.connectToServer();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(json());

let clinicalsRouter = express.Router();
ROUTES(clinicalsRouter);
app.use('/clinicalsapi', clinicalsRouter);


app.listen(properties.PORT, (err) => {
    if(err) console.log(err);
    console.log(`Application started on port ${properties.PORT} in ${process.env.NODE_ENV} mode`)
})