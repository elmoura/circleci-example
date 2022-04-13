import { AppService } from "../app-service";

const appService = new AppService()

describe('AppService tests', () => {
  test('should return a hello world message', () => {
    expect(appService.helloMessage()).toBeTruthy();
  })
})