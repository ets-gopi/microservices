FROM node:22.15.0-alpine3.20

WORKDIR /usr/auth

COPY package*.json .

RUN npm i

COPY ./ ./

CMD [ "npm","start" ]