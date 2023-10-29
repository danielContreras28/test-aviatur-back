FROM node:18-bullseye

WORKDIR /app

COPY . .

RUN npm install
RUN npm run tsc

EXPOSE 3001

CMD [ "npm", "start" ]