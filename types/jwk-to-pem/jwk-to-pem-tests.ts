import { jwkToPem, JWK } from 'jwk-to-pem';

const jwk: JWK = {
    kty: 'RSA',
    n:
        'oPuGyYsl8LAAgWJo_3yUkWRxsWlwn1IPlAgUlWzZUfwaqh-XxU8b9G8JKowz7ogeUo_9ks4lQAvsHxOzNBNKQBCpghQsgp8xoEH-eHuaduj5G6_hpKhPBkRdJRzVuFyDxEJGtr6x7oStFrbtfWhuAM3Mnu8NA0gAFffPOTEKKg07PbrM5kapnv1M0wlNc_3X4FUMocCjTTfXEG4fQmiPKNQz5U80zfjRiiKAMNVeWGS3IaR74ioOHM1emCzwLYVRpHyaFA6AxYG2GNfuVcwazxVRqhI3tws8gswZLZt475aOSWROluhawn307cqxJMUYVpf51ciBrdTIhQaywbWU2Q',
    e: 'AQAB',
};

jwkToPem(jwk); // $ExpectType string
