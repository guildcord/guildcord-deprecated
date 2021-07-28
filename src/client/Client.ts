import { RestManager } from "../rest/RestManager";
import { WebSocket } from "../socket/WebSocket";
import { ClientUser } from "../structures/ClientUser";
import { validateCookie } from "../util/Util";
import { BaseClient } from "./BaseClient";

export class Client extends BaseClient {

    /**
     * The rest manager for the client
     * @private
     */
    public readonly rest: RestManager = new RestManager();

    /**
     * The timestamp when the client get ready on ws
     */
    private readyAt: string | null | any;

    /**
     * The client user
     */
    public user: ClientUser | null;

    /**
     * The websocket for the client
     */
    public ws: WebSocket | null;

    /**
     * The token of the client
     */
    public token: string | null;

    constructor() {
        super();

        /**
         * The timestamp when the client got ready
         * @type {string}
         */
        this.readyAt = null;

        /**
         * The client user
         * @type {ClientUser}
         */
        this.user = null;

        /**
         * The websocket for the client
         */
        this.ws = null;

        /**
         * The token of the client
         */
        this.token = null;
    };

    get uptime() {
        return Date.now() - this.readyAt ?? Date.now();
    };

    async login (email: string, password: string) {

        if (!email) {
            throw new TypeError("Guildcord - client email is missing.");
        };

        if (!password) {
            throw new TypeError("Guildcord - client password is missing.")
        };

        this.debug("Email and Password received!");

        this.rest.request(
            "/login",
            "POST",
            false,
            {
                email: email,
                password: password
            }
        ).then(res => {

            if (res.ok !== true) {
                this.debug("Authorization failed");

                return res.json().then(error => {
                    throw new ReferenceError("Guildcord - " + error.message);
                });
            };

            res.json().then(data => {
                this.debug("Client User set");

                this.token = validateCookie(res.headers["get"]("set-cookie") as any);
                this.ws = new WebSocket(this);
                this.rest.assignCookie(this.token);
                this.user = new ClientUser(data.user);
            });
        });
    };
};