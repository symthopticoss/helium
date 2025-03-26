const axios = require('axios');

class Helium {
  constructor(apiBaseUrl, apiKey) {
    this.apiBaseUrl = apiBaseUrl;
    this.apiKey = apiKey;
  }

  async makeRequest(endpoint, reqBody) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}${endpoint}`, reqBody, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error calling ${endpoint}:`, error.message);
      throw error;
    }
  }

  async setPackage(reqBody) {
    return this.makeRequest('/api/setpackage', reqBody);
  }

  async setResources(reqBody) {
    return this.makeRequest('/api/setresources', reqBody);
  }

  async applyCoupon(reqBody) {
    return this.makeRequest('/api/applycoupon', reqBody);
  }

  async checkCoins(reqBody) {
    return this.makeRequest('/api/checkcoins', reqBody);
  }

  async addCoins(reqBody) {
    return this.makeRequest('/api/addcoins', reqBody);
  }

  async addResources(reqBody) {
    return this.makeRequest('/api/addresources', reqBody);
  }

  async setPlan(reqBody) {
    return this.makeRequest('/api/setplan', reqBody);
  }

  async userInfo(reqBody) {
    return this.makeRequest('/api/userinfo', reqBody);
  }

  
  async setCoins(reqBody) {
    return this.makeRequest('/api/setcoins', reqBody);
  }

  async createCoupon(reqBody) {
    return this.makeRequest('/api/createcoupon', reqBody);
  }
}


module.exports = Helium;
