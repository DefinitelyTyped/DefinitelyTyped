import {
    applyKeyMocks, applyLoginMocks, applyPlatformMocks, applyRoleMocks,
    applySourceMocks,applyStatusMocks, applyTypeMocks
} from "kyc-tools";
import axios from "axios";
import MockAdapter = require('axios-mock-adapter')

var mock = new MockAdapter(axios);

applyKeyMocks(mock); // $ExpectType void
applyLoginMocks(mock); // $ExpectType void
applyPlatformMocks(mock); // $ExpectType void
applyRoleMocks(mock); // $ExpectType void
applySourceMocks(mock); // $ExpectType void
applyStatusMocks(mock); // $ExpectType void
applyTypeMocks(mock); // $ExpectType void