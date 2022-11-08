import express from "express";

const router = express.Router();

export default (exampleModule) => {
    router.route("/").get(exampleModule.getSomePosts);

    return router;
};
