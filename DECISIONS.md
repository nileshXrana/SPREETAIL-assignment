# Engineering Decisions

This document lists the main implementation choices made for the Splitwise clone.

## Database and Import Logs
- Added `Import` and `ImportAnomaly` models so imported CSV data and errors are saved in the database.
- This makes it easier to review imports later.

## Expense Split Logic
- Moved split calculation into a shared helper in `expenseController.js`.
- This keeps manual expense creation and CSV import using the same math.

## CSV Parsing
- Built a simple CSV parser in `csvParser.js` instead of adding a library.
- This reduces dependencies and keeps the code easier to control.

## Import UI
- Added the CSV import flow to the dashboard.
- Users can upload a file, see any import issues, and refresh the data.

## Local Database Setup
- Switched development to a local PostgreSQL instance.
- This avoids cloud connection issues during testing.

## Frontend Routing
- Added `vercel.json` to make SPA routes work on Vercel.
- This keeps deep links from returning 404 errors.

## Settlement Import Handling
- Flagged settlement-like CSV rows so they are reviewed before import.
- This keeps expense data from mixing with payment records.

