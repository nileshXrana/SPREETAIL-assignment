# Splitwise Clone (Shared Expenses App)

A simple app to manage shared expenses in groups. It lets users create groups, add expenses, split costs, and track who owes whom.

## Features
- User signup and login.
- Group expense tracking.
- Splits by equal, unequal, percentage, or share.
- Group balance summaries.
- CSV import with checks for bad rows.

## Tech Stack
- Backend: Node.js, Express, Prisma, PostgreSQL.
- Frontend: React, Vite, Tailwind CSS.

## Local Setup

### 1. Start PostgreSQL
Run locally or use Docker:
```bash
docker run --name splitwise-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=splitwise -p 5432:5432 -d postgres
```

### 2. Backend
```bash
cd backend
npm install
```
Create a `.env` file with:
```env
PORT=5000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/splitwise?schema=public"
JWT_SECRET="dev_secret_key_change_me_in_production"
```
Run migrations:
```bash
npx prisma migrate dev --name init
```
Start the backend:
```bash
npm run dev
```

### 3. Frontend
```bash
cd ../frontend
npm install
```
Create a `.env` file with:
```env
VITE_API_URL=http://localhost:5000/api
```
Start the frontend:
```bash
npm run dev
```
Then open `http://localhost:5173`.
