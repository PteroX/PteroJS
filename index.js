import Application from "./Application/index.js";

export class PteroJS {
  constructor(host, key) {
    this.application = new Application(host, key);
  }
}