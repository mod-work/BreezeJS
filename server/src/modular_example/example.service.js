// Service contains the business logic and can get messy
// Here you can define the model directly or utilize repository pattern that is shown below
export default (exampleRepository) => {
    const fetchSomePosts = async ({ params, query }) => {
        const result = await exampleRepository.find();
        return result;
    };

    Object.freeze({
        fetchSomePosts,
    });
};
