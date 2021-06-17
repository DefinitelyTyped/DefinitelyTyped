import ElasticsearchService from "Services/ElasticsearchService";

declare function es(conn: string): ElasticsearchService;

export default es;
