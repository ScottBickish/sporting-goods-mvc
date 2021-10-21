import { ValuesController } from "./Controllers/ValuesController.js";
import {StoresController} from "./Controllers/StoresController.js";
class App {
  // valuesController = new ValuesController();
  storesController = new StoresController()
}

window["app"] = new App();
