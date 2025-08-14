# Etapa 1 - Dependências
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./ 
RUN npm ci

# Etapa 2 - Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa 3 - Produção
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./   
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN npm ci --omit=dev   

EXPOSE 3000
CMD ["npm", "start"]
