FROM nginx:alpine

COPY . /usr/share/nginx/html


EXPOSE 3000
EXPOSE 8080