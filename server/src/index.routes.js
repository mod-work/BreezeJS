// import routes of all the available endpoints here
// then use router.use() to make global routes
// then export the router object to the app.js mount point and register the api
import express from "express";
import exampleModule from "./modular_example/example.module.js"
const router = express.Router();

router.use('/example ',exampleModule);

export default router;