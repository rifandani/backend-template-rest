# define from what image we want to build from
# This image comes with Node.js and NPM already installed
# node:14-alpine, node:lts
FROM node:14

# ENV NODE_ENV=production

# create a directory to hold the application code inside the image, this will be the working directory for your application
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./

# If you are building your code for PRODUCTION
# RUN npm ci --only=production
RUN npm install

# Copy our source code into Docker images
COPY . .

# build typescript
RUN npm run build

# have it mapped by the docker daemon
EXPOSE 8080

# tell Docker what command we want to run when our image is run inside of a container
CMD [ "node", "build/src/server.js"]