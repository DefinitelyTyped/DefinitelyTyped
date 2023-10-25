#!/bin/zsh

export COREPACK_ENABLE_STRICT=0

TMP_OUT=$(mktemp -d)

(rm -f *.tgz) &> /dev/null


timeout 10 corepack pnpm@8 pack &> /dev/null || echo pnpm@8 timed out
mv *.tgz $TMP_OUT/pnpm8.tgz

timeout 10 corepack yarn@1 pack &> /dev/null || echo yarn@1 timed out
mv *.tgz $TMP_OUT/yarn1.tgz

touch yarn.lock

timeout 10 corepack yarn@2 pack &> /dev/null || echo yarn@2 timed out
mv *.tgz $TMP_OUT/yarn2.tgz

timeout 10 corepack yarn@3 pack &> /dev/null || echo yarn@3 timed out
mv *.tgz $TMP_OUT/yarn3.tgz

timeout 10 corepack yarn@4 pack &> /dev/null || echo yarn@4 timed out
mv *.tgz $TMP_OUT/yarn4.tgz

rm yarn.lock

timeout 10 corepack npm@6 pack &> /dev/null || echo npm@6 timed out
mv *.tgz $TMP_OUT/npm6.tgz

timeout 10 corepack npm@7 pack &> /dev/null || echo npm@7 timed out
mv *.tgz $TMP_OUT/npm7.tgz

timeout 10 corepack npm@8 pack &> /dev/null || echo npm@8 timed out
mv *.tgz $TMP_OUT/npm8.tgz

timeout 10 corepack npm@9 pack &> /dev/null || echo npm@9 timed out
mv *.tgz $TMP_OUT/npm9.tgz

timeout 10 corepack npm@10 pack &> /dev/null || echo npm@10 timed out
mv *.tgz $TMP_OUT/npm10.tgz



pushd $TMP_OUT &> /dev/null

# place multiline expected content into expected.txt
cat << EOF > expected.txt
package/adapter.d.ts
package/adapters/errors.d.ts
package/adapters/json-api.d.ts
package/adapters/rest.d.ts
package/attr.d.ts
package/index.d.ts
package/model.d.ts
package/package.json
package/relationships.d.ts
package/serializer.d.ts
package/serializers/embedded-records-mixin.d.ts
package/serializers/json-api.d.ts
package/serializers/json.d.ts
package/serializers/rest.d.ts
package/store.d.ts
package/transform.d.ts
package/transforms/boolean.d.ts
package/transforms/date.d.ts
package/transforms/number.d.ts
package/transforms/string.d.ts
package/transforms/transform.d.ts
package/types/registries/adapter.d.ts
package/types/registries/model.d.ts
package/types/registries/serializer.d.ts
package/types/registries/transform.d.ts
EOF

for i in *.tgz; do
    echo $i
    tar -zxvf $i | sort > $i.txt
    diff expected.txt $i.txt
done

popd

rm -rf $TMP_OUT
