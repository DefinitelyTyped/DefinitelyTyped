import { parse, CommandEntry, ParseOptions } from 'docker-file-parser';

const file = `
FROM node:8

ADD . /opt/
WORKDIR /opt

RUN npm install --production

EXPOSE 8080
VOLUME /opt/scripts

CMD ["npm", "start"]
`;

const options: ParseOptions = {
    includeComments: false
};

const result: CommandEntry[] = parse(file, options);
const line1Name = result[0].name;
const line1Number = result[0].lineno;
const line1Args = result[0].args;
const line1Raw = result[0].raw;
