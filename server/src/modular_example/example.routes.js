import express from "express";

const router = express.Router();

export default (module) => {
    router.route("/").get(module.getSomePosts);

    return router;
};
