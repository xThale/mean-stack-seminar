FROM node:12

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN yarn
RUN cd frontend && yarn 
RUN yarn build

CMD ["yarn", "serve"]
