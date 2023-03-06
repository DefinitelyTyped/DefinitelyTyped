import ElasticsearchService from '../services/ElasticsearchService';

declare function es(conn: string): ElasticsearchService;

export default es;
