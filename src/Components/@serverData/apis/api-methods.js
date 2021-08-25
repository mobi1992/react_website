import axios from "axios"
import { apiBaseUrl, ENV} from "../utils/constants";

 axios.defaults.baseURL = apiBaseUrl[ENV];

export const GET = (route, data, guarded) => {
    console.log('[GET REQUEST]', route + (data ?? ""));
    return axios.get(route + (data ?? ""));
}

// export const _GET = () => {
//     axios.get(apiBaseUrl[ENV])
//     .then(data => console.log(data)
//     .catch(err => console.log(err)))
// }

// export const _POST = (route, data, guarded) => {
//     console.log('[POST REQUEST]', route, data);
//     return axios.post(route, data, {
//         headers: guarded ? {
//             "API_KEY": apiKey[REACT_NATIVE_ENV]
//         } : null
//     });
// }
