# Stage 1: Build the React app
FROM node:18-alpine as build
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies and build the app
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with a lightweight server
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# When the container starts, nginx starts automatically
CMD ["nginx", "-g", "daemon off;"]
