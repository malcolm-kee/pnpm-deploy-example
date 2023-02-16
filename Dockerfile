FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY node_modules node_modules
COPY dist dist
COPY server-dist server-dist

ENTRYPOINT [ "node", "./server-dist/index.js" ]