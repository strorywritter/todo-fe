FROM node:18-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@9.1.2

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
