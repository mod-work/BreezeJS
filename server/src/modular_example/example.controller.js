// write controller logic here with the try catch elements
// pass down the request in the service block to keep the controller http logic clean
export default (exampleService) => {
    const getSomePosts = async (req, res, next) => {
        try {
            const request = await exampleService.fetchSomePosts(req);
            res.status(200).json({
                request,
                success: true,
                message: "here is your Posts!",
            });
            next();
        } catch (error) {
            res.status(404).json({
                message: "Data not found!",
                success: false,
            });
        }
    };

    return Object.freeze({
        getSomePosts,
    });
};
