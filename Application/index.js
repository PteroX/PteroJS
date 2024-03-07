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
    return new Promise(async (res) => {
      return res(
        await fetch(`${this.hostUrl}/servers`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${this.apiKey}`,
          },
        }).then((response) => response.json())
      );
    });
  }
}