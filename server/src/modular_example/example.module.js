import exampleRepository from "./example.repository.js";
import exampleController from "./example.controller.js";
import exampleService from "./example.service.js";
import exampleRoutes from "./example.routes.js";

const repository = exampleRepository();
const service = exampleService(repository);
const module = exampleController(service);

export default exampleRoutes(module);
