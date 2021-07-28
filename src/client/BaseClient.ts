import EventEmitter from "events";

export class BaseClient extends EventEmitter {
    constructor() {
        super();
    };

    debug (text: string) {

        if (!text) {
            text = "Unknown debug";
        };

        this.emit("debug", text);
    };
};