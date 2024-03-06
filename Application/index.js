import axios from "axios";

export default class Application {

  /**
   * @param host
   * @param key
   */
  constructor(host, key) {
    this.hostUrl = host + "/api/application";
    this.apiKey = key;
  }

  /**
   * @returns {Promise}
   */
  async getServerList() {
    return new Promise((res) => {
      (async () => {
        const response =
          await axios(`${this.hostUrl}/servers`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${this.apiKey}`,
            },
          });
        return res(response.data);
      })();
    });
  }

}