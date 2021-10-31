FROM node:16-alpine

RUN npm install --global nodemon

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

CMD ["npm", "run", "dev"]