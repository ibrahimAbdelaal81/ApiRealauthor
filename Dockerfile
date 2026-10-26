FROM node:10 AS builder
ADD package*.json /root/apps/docker/
WORKDIR /root/apps/docker
RUN npm install --only=production
RUN mkdir -p /usr/src/app && cp -a /root/apps/docker/node_modules /usr/src/app
FROM node:10-slim
COPY . /usr/src/app
COPY --from=builder /usr/src/app /usr/src/app
WORKDIR /usr/src/app
EXPOSE 4200
CMD [ "node", "app.js" ]
