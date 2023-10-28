# ----------------------------
# build app
# ----------------------------
FROM node:18.16.0-bullseye AS build

WORKDIR /app

COPY . .
RUN npm cache --force clean && npm install --force --loglevel verbose
RUN npm run build

# ----------------------------
# run with nginx
# ----------------------------
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist/photo-fetcher /usr/share/nginx/html

EXPOSE 80
