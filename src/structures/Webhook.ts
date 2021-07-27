import { APIEmbed } from "guilded-api-types";
import fetch from "node-fetch";

export interface WebhookAuth {

    /**
     * The url of the webhook
     */
    url?: string;
};

export interface WebhookOps {

    /**
     * The content to send with the webhook
     */
    content?: string | null;

    /**
     * The embeds to send with the webhook
     */
    embeds?: APIEmbed[];
};

export class Webhook {
    /**
     * The url of the webhook
     */
    public url: string | null;

    constructor (auth: WebhookAuth) {
        this.url = auth.url ?? null;
    };

    /**
     * @param WebhookContent The content to send with the webhook
     * @type {string | WebhookOps}
     */
    async send(WebhookContent: string | WebhookOps) {

        if (!this.url || this.url == undefined || null) {
            throw new TypeError("Webhook - url is required");
        }; 

        var content: string | null | undefined = null;
        var embed: APIEmbed[] = [];

        if (typeof WebhookContent !== "string") {
            content = WebhookContent.content;

            if (typeof WebhookContent.embeds !== "undefined" && WebhookContent.embeds?.length > 0) {
                embed = WebhookContent.embeds;
            };

        } else {
            content = WebhookContent;
        };

        if (content && content?.length > 4000) {
            throw new ReferenceError("Webhook - content cannot be more than 4000 chars.");
        };

        if (embed && embed.length > 10) {
            throw new ReferenceError("Webhok - embeds cannot be more than 10");
        };

        return new Promise(async (resolve, reject) => {
            await fetch(this.url as any, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: content,
                    embeds: embed
                })
            }).then(res => {
                res.json().then(data => {
                    if (res.status == 400 || 500) {
                        if (data.message) {
                            throw new ReferenceError(data.message);
                        };
                    };
                })
            });
        });
    };
};
