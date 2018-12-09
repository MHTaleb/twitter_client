export class ITweet {

    id: {
        text: string,
        name: string
    };
    tag: string;

    constructor(name?: string, text?: string, tag?: string) {
        this.id = { name: name, text: text };

        this.tag = tag;
    }
}
