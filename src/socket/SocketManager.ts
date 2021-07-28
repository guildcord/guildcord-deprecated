import { Client } from "../client/Client";
import { GatewayUrl } from "guilded-api-types";
import WebSocket from "ws";

export class SocketManager extends WebSocket {

    constructor(client: Client) {
        super(GatewayUrl + `/socket.io/?jwt=undefined&EIO=3&transport=websocket&guildedClientid=${client.user?.id}`, {
            headers: {
                cookie: client.token ?? ""
            }
        });
    };

    get gateway () {
        return GatewayUrl;
    };
};