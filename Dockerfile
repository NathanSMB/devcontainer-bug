FROM node:lts

RUN npm install -g pnpm
RUN pnpm config set store-dir /.pnpm-store

WORKDIR /root/devcontainer-bug

EXPOSE 3000
EXPOSE 4000

CMD ["pnpm", "devcontainer"]
