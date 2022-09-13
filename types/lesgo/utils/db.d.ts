import AuroraDbService from '../services/AuroraDbService';
import AuroraDbRDSProxyService from '../services/AuroraDbRDSProxyService';

declare const db: AuroraDbService | AuroraDbRDSProxyService;

export default db;
