import * as api from "./api-methods";

function EndPoint(route, type, guarded) {
    this.call = (data) => api[`${type}`](route, data, guarded);
}

export const endPoints = {
    home: new EndPoint("/", "GET", false),
    aboutUs: new EndPoint("/AboutUs", "GET", false),
    shop: new EndPoint("/shop/", "GET", false),
    contact: new EndPoint("/contact", "GET", false),
    items: new EndPoint("/items/", "GET", false),
}