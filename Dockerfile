FROM node:21 as builder

WORKDIR /app

RUN curl -sL https://unpkg.com/@pnpm/self-installer | node

COPY package.json ./
COPY pnpm-lock.yaml ./

run pnpm install --frozen-lockfile

COPY . .

RUN node ace build \
    --ignore-ts-errors \
    && cd build \
    && pnpm install

FROM node:21

ARG APP_RELEASE

ENV TZ=UTC
ENV PORT=8080
ENV HOST=0.0.0.0
ENV LOG_LEVEL=info
ENV APP_KEY=OSqIxj_qEfJdb7pe-aQHFd5yzLZI_y8C
ENV NODE_ENV=production
ENV SESSION_DRIVER=cookie

WORKDIR /app

COPY --from=builder /app/build .

EXPOSE 8080

CMD ["node", "bin/server.js"]
