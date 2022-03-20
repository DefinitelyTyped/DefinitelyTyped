import parse = require("parse-link-header");

const linkHeader =
    '<https://api.github.com/user/9287/repos?page=3&per_page=100>; rel="next", ' +
    '<https://api.github.com/user/9287/repos?page=1&per_page=100>; rel="prev"; pet="cat", ' +
    '<https://api.github.com/user/9287/repos?page=5&per_page=100>; rel="last"';

let links: parse.Links | null = parse(linkHeader);
links = parse(null);
links = parse(undefined);
