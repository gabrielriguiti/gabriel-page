# Etapa 1: build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: apenas para copiar o build (Nginx irá servir)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config será fornecida pelo container nginx principal

