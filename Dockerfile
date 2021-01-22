# define from what image we want to build from
# This image comes with Node.js and NPM already installed
FROM node:14

# create a directory to hold the application code inside the image, this will be the working directory for your application
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./

# If you are building your code for PRODUCTION
# RUN npm ci --only=production
RUN npm install

# Bundle app source inside Docker images
COPY . .

# have it mapped by the docker daemon
EXPOSE 8080

# command runtime
CMD [ "node", "server.js"]