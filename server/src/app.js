// import the api routes here and mount it in the express adapter
import { expressAdapter } from "./httpAdapter/express/express.adapter.js";
import api from "./index.routes.js";
export default () => {
    // connect to database here

    // ------------x------------x----------

    //mount api in the app
    const app = expressAdapter(api).listen(3000, () =>
        console.log(
            `${new Date().toISOString()} [info] Running On Port ${3000}`
        )
    );
};
