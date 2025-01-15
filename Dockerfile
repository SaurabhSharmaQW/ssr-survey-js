FROM node:20.18.1-slim

WORKDIR /app

# COPY package.json ./
# COPY src ./src
# COPY public ./public
# COPY config.yaml ./config.yaml
# COPY .env ./
# COPY jsconfig.json ./

# RUN npm install --production

# COPY node_modules ./
COPY . .

# Install dependencies
RUN npm install

# Build your Next.js app (this will create the `.next` folder)
RUN npm run build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Set the environment variable to specify the production build
ENV NODE_ENV=production

# Run Next.js in production mode
CMD ["npm", "start"]