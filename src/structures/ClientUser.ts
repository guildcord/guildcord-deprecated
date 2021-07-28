import { APIClientUser } from "../typings";

export class ClientUser {

    /**
     * The id of the client
     * @type {string}
     */
    public id: string;

    /**
     * The name of the client
     * @type {string}
     */
    public name: string;

    /**
     * The subdomain of the client
     * @type {string}
     */
    public subdomain: string | null;

    /**
     * The aliases of the client
     * @type {string[]}
     */
    public aliases: string[];

    /**
     * The profile picture of the client as Sm
     * @type {string}
     */
    public profilePictureSm: string;

    /**
     * The profile picture of the client as Lg
     * @type {string}
     */
    public profilePictureLg: string;

    /**
     * The profile picture of the client as blur
     * @type {string}
     */
    public profilePictureBlur: string;

    /**
     * The profile banner of the client as blur
     * @type {string}
     */
    public profileBannerBlur: string;

    /**
     * The profile banner of the client as lg
     * @type {string}
     */
    public profileBannerLg: string;

    /**
     * The date when the joinedAt
     * @type {string}
     */
    public joinedAt: string;

    /**
     * The steamId that is linked with the client
     * @type {string}
     */
    public steamId: string;

    /**
     * The mod status of the client
     * @type {string}
     */
    public modStatus: string

    /**
     * The aboutInfo of the client
     * @type {string}
     */
    public aboutInfo: string;

    /**
     * The date when the client was last online
     * @type {string}
     */
    public lastOnline: string;

    constructor(data: APIClientUser) {
        
        this.id = data.id;
        this.name = data.name;
        this.subdomain = data.subdomain;
        this.aliases = data.aliases;
        this.profilePictureSm = data.profilePictureSm;
        this.profilePictureLg = data.profileBannerLg;
        this.profilePictureBlur = data.profilePictureBlur;
        this.profileBannerBlur = data.profileBannerBlur;
        this.profileBannerLg = data.profileBannerLg;
        this.joinedAt = data.joinDate;
        this.steamId = data.steamId;
        this.modStatus = data.moderationStatus;
        this.aboutInfo = data.aboutInfo;
        this.lastOnline = data.lastOnline;
    }; 
};