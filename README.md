# pnpm-deploy-example

## Build

```bash
pnpm run build
pnpm run deploy
docker build -f Dockerfile -t pnpm-app dist
```

## Run

```bash
docker run -p 3000:3000 -d pnpm-app
```
