import { Request, Response } from "express";
import { AppService } from "../services/app-service";

export class AppController {
  constructor(private appService: AppService) { }

  helloWorld = (request: Request, response: Response) => {
    const message = this.appService.helloMessage();

    return response
      .status(200)
      .send(message)
  }
}