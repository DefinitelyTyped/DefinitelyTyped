cp -r node_modules/facebook-nodejs-business-sdk tmp && \
mv tmp/src/bundle.es6 tmp/src/bundle.js && \
npx flow-to-ts --write tmp/src/*.js tmp/src/**/*.js tmp/src/**/**/*.js && \
npx tsc -p tsconfig.generate-dts.json

rm -rf tmp && \
echo OK
