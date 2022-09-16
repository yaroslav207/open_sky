import axios from "axios";

class HttpServices {
    constructor({baseUrl, username, password}) {

        this.instance = HttpServices.createInstance({
            baseURL: `https://${username}:${password}@${baseUrl}`,
        });
    }

    static createInstance() {
        return axios.create.apply(axios, arguments);
    }

    get() {
        return this.instance.get.apply(this.instance, arguments);
    }

    patch() {
        return this.instance.patch.apply(this.instance, arguments);
    }

    put() {
        return this.instance.put.apply(this.instance, arguments);
    }

    post() {
        return this.instance.post.apply(this.instance, arguments);
    }

    delete() {
        return this.instance.delete.apply(this.instance, arguments);
    }
}

export { HttpServices }