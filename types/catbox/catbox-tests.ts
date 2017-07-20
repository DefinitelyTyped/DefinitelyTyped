import Catbox = require("catbox");
import Memory = require("catbox-memory");

const client = new Catbox.Client(Memory);

const cache = new Catbox.Policy({
    expiresIn: 5000,
}, client, 'cache');
