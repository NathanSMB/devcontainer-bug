# Use an official Node.js runtime as a parent image (using the LTS tag)
FROM node:lts AS builder

# Use a second stage to install Java, keeping the final image as clean as possible
FROM ubuntu:latest

# Copy the Node.js environment from the builder stage
COPY --from=builder /usr/local/bin/node /usr/local/bin/
COPY --from=builder /usr/local/lib/node_modules /usr/local/lib/node_modules

# Create a symbolic link to node and npm
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm && \
    ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx && \
    ln -s /usr/local/bin/node /usr/local/bin/nodejs

# Install pnpm package manager
RUN npm install -g pnpm
RUN pnpm config set store-dir /.pnpm-store
