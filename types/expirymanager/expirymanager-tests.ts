import { ExpiryManager } from "expirymanager";

const expiryManager = new ExpiryManager();

const keys = ['1', '2'];

expiryManager.expire(keys, 1);

expiryManager.unexpire(keys);

const expiry: number = expiryManager.getExpiry(keys[0]);

let expiredKeys = expiryManager.getExpiredKeys();
expiredKeys = expiryManager.getExpiredKeys(expiryManager.now());

expiredKeys = expiryManager.extractExpiredKeys();
expiredKeys = expiryManager.extractExpiredKeys(expiryManager.now());

expiryManager.clear();
