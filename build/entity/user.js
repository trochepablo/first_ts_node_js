"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var post_1 = require("./post");
var User = /** @class */ (function () {
    function User(fullName, nickName, birthDate) {
        this.fullName = fullName;
        this.nickName = nickName;
        this.birthDate = birthDate;
        this.posts = [];
    }
    User.prototype.post = function (content) {
        this.posts.push(new post_1.Post(content, this.nickName, new Date()));
    };
    return User;
}());
exports.User = User;
