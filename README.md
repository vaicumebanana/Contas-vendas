# Digital Accounts Marketplace - Scaffold

This repository contains a production-ready scaffold for a digital accounts marketplace built with Next.js, TypeScript, TailwindCSS, Prisma, PostgreSQL and Redis.

What is included
- Next.js (App Router) starter
- Prisma schema (prisma/schema.prisma)
- Docker Compose for local development (Postgres + Redis + App)
- TailwindCSS config and basic styles
- Basic Prisma client helper
- Environment example

Quick start (local with Docker)
1. Copy .env.example to .env and set values (POSTGRES_PASSWORD, NEXTAUTH_SECRET, etc.)
2. docker-compose up --build
3. In another terminal: npx prisma generate
4. Run migrations: npx prisma migrate dev --name init
5. Start dev server: npm run dev

If you want me to push more features (auth, payments, UI), tell me and I'll continue.
