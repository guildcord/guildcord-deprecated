import { APIEmbed, APIEmbedAuthor, APIEmbedField, APIEmbedFooter, APIEmbedImage, APIEmbedThumbnail } from "guilded-api-types";
import { isURL } from "../util/Util";


export class Embed {

    /**
     * The title for the embed
     * @type {string}
     */
    public title: string | null;

    /**
     * The description for the embed
     * @type {string}
     */
    public description: string | null;

    /**
     * The color for the embed
     * @type {string}
     */
    public color: number;

    /**
     * The image for the embed
     * @type {APIEmbedImage}
     */

    public image: APIEmbedImage;

    /**
     * The thumbnail for the embed
     * @type {APIEmbedThumbnail}
     */
    public thumbnail: APIEmbedThumbnail;

    /**
     * The author details for the embed
     * @type {APIEmbedAuthor}
     */
    public author: APIEmbedAuthor;

    /**
     * The title url for the embed
     * @type {string}
     */
    public url: string | undefined;

    /**
     * The footer for the embed
     * @type {APIEmbedFooter}
     */
    public footer: APIEmbedFooter;

    /**
     * The fields for the embed
     * @type {APIEmbedField}
     */
    public fields: APIEmbedField[];

    constructor(data = Object.assign({}) as APIEmbed) {

        this.title = data.title ?? null;

        this.description = data.description ?? null;

        this.fields = [];

        this.color = data.color ?? null;

        this.image = data.image 
            ? {
                url: data.image.url,
                proxy_url: data.image.proxy_url,
                height: data.image.height,
                width: data.image.width,
            } : {} as any;

        this.thumbnail = data.thumbnail
            ? {
                url: data.thumbnail.url,
                proxy_url: data.thumbnail.proxy_url,
                height: data.thumbnail.height,
                width: data.thumbnail.width,
            } : {} as any;

        this.author = data.author
            ? {
                url: data.thumbnail.url,
                proxy_icon_url: data.thumbnail.proxy_url,
                height: data.thumbnail.height,
                width: data.thumbnail.width,
            } : {} as any;

        this.footer = data.footer 
            ? {
                text: data.footer.text,
                icon_url: data.footer.icon_url,
                proxy_icon_url: data.footer.proxy_icon_url
            } : { text: "a"} as any;
    };
    /**
     * Set the author
     * @param author Author name
     * @param iconUrl Author icon url
     * @returns 
     */
    public assignAuthor(author: string, iconUrl: string) {

        if (author) {
            this.author = {
                name: author
            };
        };

        if (iconUrl) {
            this.author = {
                icon_url: iconUrl
            };
        };

        return this;
    };

    /**
     * Set the embed title
     * @param title Title
     */
    public assignTitle(title?: string): this {

        if (!title) {
            return this;
        };

        this.title = title ?? null;

        return this;
    };

    /**
     * Set the embed description
     * @param desc Description
     * @type {string}
     */
    public assignDescription(desc?: string): this {

        if (!desc) {
            return this;
        };

        if (desc.length > 4000) {
            throw new TypeError("Embed - description cannot be more than 4000 characters.");
        };

        this.description = desc ?? null;

        return this;

    };

    private formatColor(color?: any) {

        if (typeof color !== "number") {

            if (color == "Blue") {
                return 5814783;
            };

            if (color == "Green") {
                return 6225233;
            };

            if (color == "Grey") {
                return 6514275;
            };

            if (color == "Red") {
                return 16727100;
            };

            if (color == "Pain") {
                return 16578551;
            };

            return 3290173;
        };

        return color;
    };

    /**
     * Set the embed color
     * @param color Color number
     * @type {number}
     */
    public assignColor(color?: number): this {

        if (typeof color !== "number") {
            color = this.formatColor(color);
        };

        this.color = color;

        return this;
    };

    /**
     * Set the embed thumbnail
     * @param url Url
     * @param width Width
     * @param height Height
     */
    public assignThumbnail(url?: string, width?: number, height?: number): this {

        if (url) {
            this.thumbnail.url = url;
        };

        if (width || typeof (width) == "number") {
            this.thumbnail.width = width;
        };

        if (height || typeof(height)) {
            this.thumbnail.height = height;
        };

        return this;
    };

    /**
     * Set the embed image
     * @param url Url
     * @param width Width
     * @param height Height
     * @returns 
     */
    public assignImage(url?: string, width?: number, height?: number): this {

        if (!this.image) {
            this.image = {} as any;
        }

        if (url) {
            this.image.url = url;
        };

        if (width || typeof (width) == "number") {
            this.image.width = width;
        };

        if (height || typeof(height)) {
            this.image.height = height;
        };

        return this;
    };

    public assignTitleUrl (url: string): this {

        if (isURL(url) !== true) {
            throw new ReferenceError("Embed - url should be correct");
        };

        this.url = url;

        return this;
    };

    public assignFooter (text?: string, iconUrl?: string): this {

        if (text) {
            this.footer.text = text;
        };

        if (iconUrl) {
            this.footer.icon_url = iconUrl;
        };

        return this;
    };

    public addField (name: string, value: string, inline?: boolean): this {

        if (this.fields.length > 25) {
            throw new ReferenceError("Embed - fields cannot be more than 25");
        };

        this.fields.push({
            name: name,
            value: value,
            inline: inline ?? false
        });

        return this;
    };
};