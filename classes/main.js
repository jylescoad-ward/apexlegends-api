const axios = require("axios");
const pkJSON = require("./../package.json");

class API {
	constructor(APIKey) {
		this.key = APIKey || "bruh"
	}
	async _req(linkThing) {
			const options = {
				method: 'get',
				url: `https://api.mozambiquehe.re/bridge?version=4&platform=PC&auth=${this.key}&${linkThing}`,
				headers: {
					'user-agent': `DARiOX-apexAPI-${pkJSON.version}`
				}
			}
			const res = await axios(options)
			if (res.status !== 200) {
				return {
					error: true,
					errorText: res.statusText,
					errorCode: res.status,
					response: res
				}
			} else {
				return {
					error: false,
					data: res.data,
					response: res
				};
			}
		
	}

	async fetchUser(g_userName) {
		var response = await this._req(`player=${g_userName}`);
		return response;
	}
}

module.exports = API;

