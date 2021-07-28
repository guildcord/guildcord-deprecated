import { Client } from "../client/Client";
import { ClientEvents } from "../typings";
import { SocketManager } from "./SocketManager";


export class WebSocket extends SocketManager {
    constructor(client: Client) {
        super(client);

        this.connect(client);
    };

    public connect (client: Client) {
        
        client.debug("Websocket: connecting to server.");

        this.addEventListener("open", () => {
            client.emit(ClientEvents["Hello"]);
        })
    };
};