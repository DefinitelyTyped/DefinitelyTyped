import { stringify, parse } from 'querystring';

stringify({name: 'Kyle', language: 'Javascript'});

parse("name=Kyle&language=Javascript");
