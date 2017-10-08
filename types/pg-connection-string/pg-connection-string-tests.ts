import { parse } from 'pg-connection-string';

const parts = parse('postgres://user:password@host:port/dbname');

parts.application_name;
parts.client_encoding;
parts.database;
parts.fallback_application_name;
parts.host;
parts.password;
parts.port;
parts.ssl;
parts.user;
