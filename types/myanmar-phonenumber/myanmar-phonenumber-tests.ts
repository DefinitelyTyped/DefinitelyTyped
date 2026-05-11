import myanmarPhoneNumber = require("myanmar-phonenumber");

myanmarPhoneNumber.normalizeInput("+959784123456");
myanmarPhoneNumber.isValidMMPhoneNumber("09978412345");
myanmarPhoneNumber.getTelecomName("09978412345");
myanmarPhoneNumber.getPhoneNetworkType("09978412345");
