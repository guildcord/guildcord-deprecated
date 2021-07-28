export type EmbedColors = "Blue" | "Green" | "Grey" | "Red" | "Pain";
export type RequestMethods = "GET" | "POST" | "PUT" | "DELETE";

export const ClientEvents = {
    Hello: "ready"
};

export interface APIClientUser {
    id: string;
    name: string;
    subdomain: string | null;
    aliases: string[] | [];
    profilePictureSm: string;
    profilePicture: string;
    profilePictureLg: string;
    profilePictureBlur: string;
    profileBannerBlur: string;
    profileBannerLg: string;
    joinDate: string;
    steamId: string;
    moderationStatus: string;
    aboutInfo: string;
    lastOnline: string;
};