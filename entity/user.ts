import {Post} from './post';

export class User {
    fullName: String;
    nickName: String;
    birthDate: Date;
    posts: Array<Post>;

    constructor(fullName: String, nickName: String, birthDate: Date) {
        this.fullName = fullName;
        this.nickName = nickName;
        this.birthDate = birthDate;
        this.posts = [];
    }

    post(content: String) {
        this.posts.push(new Post(content, this.nickName, new  Date()))
    }
}