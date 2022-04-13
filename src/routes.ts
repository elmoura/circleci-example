import { Router } from "express";
import { AppController } from "./controllers/app-controller";
import { AppService } from "./services/app-service";

const routes = Router()

const appService = new AppService();
const appController = new AppController(appService);

routes.get('/', appController.helloWorld);

export { routes }