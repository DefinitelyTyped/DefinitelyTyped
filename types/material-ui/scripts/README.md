# Generator for material-ui

## Usage

```sh
node scripts/material-ui/generate.js
```

### GitHub API Limitation

The error `GitHub response: 401 Unauthorized` is due to [Rate Limiting | GitHub API v3 \| GitHub Developer Guide](https://developer.github.com/v3/#rate-limiting). In order to avoid this, it is necessary to publish [Personal access token](https://github.com/settings/tokens) and specify it as an environment variable.

```sh
GITHUB_ACCESS_TOKEN=XXXXX node scripts/material-ui/generate.js
```
