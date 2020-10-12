import express from 'express';
import probe from 'kube-probe';

// import express
const app = express();

// add kube-probe to express app
probe(app, {
    readinessUrl: '/api/ready',
    livenessUrl: '/api/live',
    readinessCallback: () => console.log('ready'),
    livenessCallback: () => console.log('live'),
    bypassProtection: false,
    protectionConfig: {},
});
