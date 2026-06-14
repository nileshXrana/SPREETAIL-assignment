# Splitwise Clone AI Context

This file explains the main goals and design of the Splitwise clone.

## Product Goal
Build a working app for shared group expenses.

## Main Use Cases
- Roommates splitting bills.
- Friends sharing trip costs.
- Small groups tracking shared spending.

## Core Features
- Email and password login.
- Create groups and add members.
- Add expenses and split them.
- Show group balances.
- Save chat messages for expenses.
- Record payments made between users.

## Not Included
- Recurring expenses
- Multiple currency support
- Receipt OCR
- Real payment processing
- Advanced analytics

## Tech Stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Realtime: Socket.IO
- Database: PostgreSQL with Prisma
- Auth: JWT

## Data Model
The app uses these main objects:
- Users
- Groups
- Group members
- Expenses
- Expense splits
- Settlements
- Messages
- CSV import records
- Import error logs

## API Routes
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/groups`
- `GET /api/groups`
- `GET /api/groups/:id`
- `POST /api/groups/:id/members`
- `DELETE /api/groups/:id/members/:userId`
- `POST /api/expenses`
- `GET /api/expenses/:id`
- `DELETE /api/expenses/:id`
- `POST /api/settlements`
- `GET /api/settlements/group/:groupId`
- `GET /api/messages/expense/:expenseId`
- `POST /api/import/csv`
- `GET /api/import/report/:id`

## How It Works
- Users log in and receive a JWT token.
- The token is used for API calls.
- Balances are based on expenses and payments.
- Messages are saved per expense.

## Deployment Notes
- Frontend can run on Vercel.
- Backend can run on a web server.
- Use PostgreSQL for data.

## Testing
- Check auth routes.
- Check expense split math.
- Check CSV import rules.
