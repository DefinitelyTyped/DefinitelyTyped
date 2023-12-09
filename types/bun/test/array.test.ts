async function* listReleases() {
    for (let page = 1; ; page++) {
        const response = await fetch(`https://api.github.com/repos/oven-sh/bun/releases?page=${page}`);
        const releases: Array<{ data: string }> = (await response.json()) as any;
        if (!releases.length) {
            break;
        }
        for (const release of releases) {
            yield release;
        }
    }
}

Array.fromAsync(listReleases());
