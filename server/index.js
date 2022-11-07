// import api from "./src/routes/index.routes.js";
import express from "express";
import httpAdapter from "./src/app.js"
//express app listener
(async () => {
    // connect to database

    // mount app routes
    // let the application know what adapter to mount
    const http = httpAdapter.expressAdapter(express());
    
    http.listen(
        3000, () =>
        console.log(
            `${new Date().toISOString()} [info] Running On Port ${3000}`
        )
    );
})();
