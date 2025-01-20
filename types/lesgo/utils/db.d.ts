import AuroraDbRDSProxyService from "../services/AuroraDbRDSProxyService";
import AuroraDbService from "../services/AuroraDbService";

declare const db: AuroraDbService | AuroraDbRDSProxyService;

export default db;
