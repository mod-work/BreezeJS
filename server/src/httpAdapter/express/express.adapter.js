import express from "express";
// import expressRouter from "./router.interface.js";

export default (api) => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    // register middlewares

    // register routes | mount api;

    app.use('/api', api);
    // logging
    // error handling
    return app;
};
