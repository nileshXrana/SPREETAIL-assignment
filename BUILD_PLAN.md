# Splitwise Clone Build Plan

A simple plan for building the Splitwise clone app.

## Architecture

The project has two folders:
- `backend/` for the server and database.
- `frontend/` for the React app.

The backend uses Prisma and PostgreSQL. Users, groups, expenses, split records, settlements, and messages are stored there.

The frontend uses React and Tailwind. It loads data per page and keeps auth state in a context.

## Roadmap

### Phase 1: Setup
- Create the backend and frontend folders.
- Install backend packages: Express, Prisma, JWT, bcryptjs, cors.
- Initialize Prisma and run migrations.
- Set up the frontend with Vite and Tailwind.

### Phase 2: Backend APIs
- Add auth endpoints for register and login.
- Add group endpoints for creating groups and managing members.
- Add expense endpoints for creating expenses and splits.
- Add settlement endpoints for recording payments.
- Add messages and chat support.

### Phase 3: Frontend
- Build login and register pages.
- Build a dashboard with groups and summary.
- Build group detail pages with members, expenses, and balances.
- Build expense detail pages with messages.

### Phase 4: Testing
- Check expense split logic.
- Check balance totals.
- Test adding groups, expenses, and chat.

### Phase 5: Deployment
- Deploy the backend service.
- Deploy the frontend app.
- Make sure routes and API calls work.
