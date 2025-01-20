rm -rf generated && \
cp -r node_modules/facebook-nodejs-business-sdk . && \
mv facebook-nodejs-business-sdk/src/bundle.es6 facebook-nodejs-business-sdk/src/bundle.js && \
npx flow-to-ts --write facebook-nodejs-business-sdk/src/*.js facebook-nodejs-business-sdk/src/**/*.js facebook-nodejs-business-sdk/src/**/**/*.js && \
npx tsc

rm -rf facebook-nodejs-business-sdk && \
echo OK

