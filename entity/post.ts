import {User} from './user'

export class Post {
    content: String;
    author: String;
    date: Date;

    constructor(content: String, author: String, date: Date) {
        this.content = content;
        this.author = author;
        this.date = date;
    }
}