FROM --platform=linux/amd64 node:18-bullseye-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]