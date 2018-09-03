export class Post {

    like: number;

    constructor(public name: string,
                public content: string,
                public date: number) {
        this.like = 0;

    }

}