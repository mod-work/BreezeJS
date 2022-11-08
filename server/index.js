// import api from "./src/routes/index
import expressAdapter from "./src/httpAdapter/express/express.adapter.js";
import api from "./src/index.routes.js";
//express app listener
(async () => {
    // connect to database

    // mount app routes
    // let the application know what adapter to mount
    const http = expressAdapter(api);

    http.listen(3000, () =>
        console.log(
            `${new Date().toISOString()} [info] Running On Port ${3000}`
        )
    );
})();
