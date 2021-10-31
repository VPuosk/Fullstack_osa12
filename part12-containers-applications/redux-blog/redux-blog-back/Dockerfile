FROM node:16-alpine

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only-production

CMD ["npm", "start"]