# pull official base image
FROM node:14.17.0-alpine

# set working directory
WORKDIR /login

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /login/node_modules/.bin:$PATH

# install app dependencies
# copy package.json
COPY package.json ./
COPY package-lock.json ./
# install dependencies
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]