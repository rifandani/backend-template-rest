# define from what image we want to build from
# This image comes with Node.js and NPM already installed
# node:14-alpine, node:lts
FROM node:14 as base

# ENV NODE_ENV=production

# create a directory to hold the application code inside the image, this will be the working directory for your application
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./

### DEV stage
FROM base as dev
# install deps + devDeps
RUN npm install
# copy prisma schema
COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate
COPY . .
ENV NODE_ENV=development
# build typescript
RUN npm run build
EXPOSE 8000
# tell Docker what command we want to run when our image is run inside of a container
CMD [ "node", "build/src/server.js"]

### TEST stage
FROM base as test
RUN npm ci
# Copy our source code into Docker images
COPY . .
ENV NODE_ENV=testing
RUN npm run test

### PROD stage
FROM base as prod
# install only deps
RUN npm ci --production
COPY . .
ENV NODE_ENV=production
RUN npm run build
EXPOSE 8000
CMD [ "node", "build/src/server.js"]