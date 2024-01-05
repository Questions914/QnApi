export type QnaException = {
    fetchApiExp: boolean;
    status: number;
    msg: string;
}

export type Handlers = { [key:number]: (exception: QnaException) => any }

class UtilsClass {
    async fetchApi(verb: string, path: string, requestBody?: any, requestContentType?: string) {
        let api_url_root = this.getApiUrlRoot();
        let url = api_url_root + path;

        // cache busting
        url += (url.indexOf('?') > 0 ? '&' : '?') 
                + "cacheBuster=" + Math.round((new Date()).getTime());

        console.log(`Fetch: ${verb} ${url}`);

        let options: any = {
            method: verb,
            cache: "no-store", // don't cache cache busted cache busters
            headers: { 
                "accept": "*/*",
                'pragma': 'no-cache',
                'cache-control': 'no-cache',
            },
        };
        if (requestBody) {
            if (requestContentType != "none") {
                if (!requestContentType) 
                     requestContentType = "application/json";
                options.headers["content-type"] = requestContentType;
            }
            options.body = 
                (requestContentType == "application/json") ? JSON.stringify(requestBody) : requestBody;
        }
        console.log(`Headers sans-bearer: ${JSON.stringify(options, null, 2)}`);
        
        let request_token = this.getBearerToken();
        if (request_token)
            options.headers["Authorization"] = "Bearer " + request_token;

        const response = await fetch(url, options);
        console.log(`Fetch Status: ${response.status}`);
    
        if (response.status == 401) {
            this.setBearerToken("");
        } else {
            const new_bearer_token = response.headers.get("set-bearer-token");
            if (new_bearer_token)
                this.setBearerToken(new_bearer_token);
        }

        if (!response.ok)
            throw response;

        const responseContentType = response.headers.get("content-type");
        if (!responseContentType) {
            console.log("Fetch Content-Type: (missing)");
            return await response.text();
        }

        console.log(`Fetch Content-Type: ${responseContentType}`);
        if (responseContentType.includes("json"))
            return await response.json();
        else if (responseContentType.includes("text"))
            return await response.text();
        else
            return await response.blob();
    }

    setBearerToken(token: string) {
        window.localStorage.setItem("bearerToken", token);
    }

    getBearerToken() {
        let bearer_token = window.localStorage.getItem("bearerToken");
        if (bearer_token == "null")
            bearer_token = null;
        return bearer_token;
    }

    setApiUrlRoot(root: string) {
        window.localStorage.setItem("apiUrlRoot", root);
    }

    getApiUrlRoot() {
        let apiUrlRoot = window.localStorage.getItem("apiUrlRoot");
        if (apiUrlRoot == "null")
            apiUrlRoot = null;
        if (!apiUrlRoot)
            apiUrlRoot = "https://api.smickr.com/";
        return apiUrlRoot;
    }

    async handleExp(exp: any, handlers: Handlers) {
        const response = exp instanceof Response ? exp as Response : null;
        const status = response && response.status ? response.status : 0;

        let msg;
        if (status && response != null)
        {
            switch (status)
            {
                case 401: msg = "Access denied"; break;
                case 403: msg = "Not allowed"; break;
                case 415: msg = "Unsupported content type"; break;
                case 500: msg = "Server error"; break;
                default: 
                    msg = await response.text(); 
                    console.log(`Raw error msg: ${msg}`);
                    if (msg.length > 0 && msg[0] == '{') {
                        try {
                            const msg_obj = JSON.parse(msg);
                            if (msg_obj && msg_obj.errors) {
                                const errors = msg_obj.errors[Object.keys(msg_obj.errors)[0]];
                                if (errors && errors.length)
                                    msg = errors[0];
                            }
                        }
                        catch {}
                    }
                    break;
            }
            console.log(`handleExp (response): ${status}: ${msg}`);
        } else {
            msg = exp.toString();
            console.log(`handleExp (not response): ${msg}`);
        }
        
        const our_exp: QnaException = { 
            fetchApiExp: true, 
            status: status, 
            msg: msg 
        };

        if (!handlers) {
            console.log("No handlers, returning error");
            return our_exp;
        }

        if (response) {
            const status_handler = handlers[status];
            if (status_handler) {
                console.log("Specific status handler found");
                return status_handler(our_exp);
            } else {
                const default_handler = handlers[0];
                if (default_handler) {
                    console.log("Default status handler found");
                    return default_handler(our_exp);
                }
            }
        }

        const exp_handler = handlers[-1];
        if (exp_handler) {
            console.log("Exception handler found");
            return exp_handler(our_exp);
        }
        
        console.log("No matching handler found, returning error");
        return our_exp;
    }
}
export const Utils = new UtilsClass();

export function encu(param: any) {
    return encodeURIComponent(param.toString());
}

export function ench(param: string) {
    const p = document.createElement('P');
    p.textContent = param;
    let str = p.innerHTML;
    str = replaceAll(str, '\n', "<br>")
    str = replaceAll(str, '\t', "&nbsp;&nbsp;")
    str = replaceAll(str, ' ', "&nbsp;");
    return str;
}

function replaceAll(str: string, toFind: string, replaceWith: string) {
    while (str.includes(toFind))
        str = str.replace(toFind, replaceWith);
    return str;
}
