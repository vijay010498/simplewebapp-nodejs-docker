#base package
FROM node:alpine

WORKDIR /usr/src/app

#install dependencies
COPY ./ package.json ./
RUN npm install
COPY ./ ./


#Default Command
CMD ["npm", "start"]