#!/bin/bash -e

if git diff --diff-filter=DR --name-only HEAD^1 | grep -q 'package.json'; then
    pnpm install
    exit 0
fi

# Workaround for https://github.com/pnpm/pnpm/issues/7283
# After installing everything the first time, reread the graph and see if anything was missing..
# If something was missing, we install that again and repeat until nothing is missing.

echo pnpm install --filter . --filter ...[HEAD^1]...
pnpm install --filter . --filter ...[HEAD^1]...

FILTERS=('--filter' '...@types/**[HEAD^1]...')

while true; do
    OLD_FILTERS=("${FILTERS[@]}")
    FILTERS=()

    set +e
    OUTPUT=$(pnpm ls --depth Infinity --parseable "${OLD_FILTERS[@]}")
    CODE=$?
    set -e

    if [ $CODE -ne 0 ]; then
        echo "pnpm ls failed while looking for missing deps; giving up and installing everything"
        echo "$OUTPUT"
        exec pnpm install
    fi

    for i in $(echo "$OUTPUT" | grep -v node_modules | awk NF | sort -u); do
        i=${i#*$PWD/}

        if [ -d "$i/node_modules" ]; then
            continue
        fi

        echo "$i is a transitive dep that resolves to the workspace and must be manually installed"
        FILTERS+=("--filter")
        FILTERS+=("{./$i}...")
    done

    if [ ${#FILTERS[@]} -eq 0 ]; then
        break
    fi

    echo pnpm install "${FILTERS[@]}"
    pnpm install "${FILTERS[@]}"
done
