FROM node:14 as build-deps
WORKDIR /app
COPY package.json ./
RUN npm install
COPY src src
COPY public public
COPY config config
RUN npm run build
#CMD npm run start

FROM nginx:1.15-alpine
COPY --from=build-deps /app/dist /usr/share/nginx/html
COPY ./server/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]