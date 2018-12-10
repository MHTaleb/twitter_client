export class ITweet {

    id: {
        text: string,
        name: string
    };
    tag: string;

    userImage: string;
    country: string;
    placeFullName: string;

    constructor(name?: string, text?: string, tag?: string, userImage?: string, country?: string, placeFullName?: string) {
        this.id = { name: name, text: text };
        this.userImage = userImage;
        this.country = country;
        this.placeFullName = placeFullName;
        this.tag = tag;
    }
}
