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
      fetch(`${this.hostUrl}/servers`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
        },
      }).then((response) => response.json())
        .then((data) => {
          return res(data);
        })
    });
  }

}