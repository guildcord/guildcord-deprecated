import { ApiURL } from "guilded-api-types";
import fetch from "node-fetch";
import { RequestMethods } from "../typings";

export class RestManager {
    private cookie: string | undefined | null;

    constructor() {};

    /**
     * Assign the cookie and use it with request
     * @param cookie The session token from cookie
     */
    public assignCookie (cookie: string): this {

        this.cookie = "hmac_signed_session=" + cookie;

        return this;
    };

    /**
     * Make a request to the api
     * @param endpoint The endpoint of the api
     * @param method The method for the api
     * @param json If `true` returns json
     * @param body The body to pass to the api
     * @returns 
     */
    public request (endpoint: string, method: RequestMethods, json?: boolean, body?: Record<string, any>): Promise<Response> {

        const data = {
            headers: {
                "Content-Type": "application/json",
                cookie: this.cookie ?? ""
            }
        } as any;

        if (method) {
            data.method = method;
        };

        if (body) {
            data.body = JSON.stringify(body);
        };

        return new Promise(async (resolve, reject) => {
            
            await fetch (ApiURL + endpoint, {
                ...data
            }).then(res => {
                
                if (json == true) {
                    return res.json().then(data => {
                        resolve(res as any);
                    });
                };
                resolve(res as any);
            });
        });
    };
};