# Student Job Portal (Full Stack)

React + Node/Express + MySQL with JWT authentication.

## Prereqs
- Node.js 18+
- MySQL 8+

## 1) Backend
```bash
cd backend
npm install
cp .env.example .env
# edit .env with your DB credentials
# create schema
mysql -u root -p < schema.sql
npm run dev
# API runs on http://localhost:4000
```

## 2) Frontend
```bash
cd ../frontend
npm install
npm run dev
# open http://localhost:5173
```

### Test flow
1. Register an employer account, then post a job.
2. Register a student account, view job detail, apply with a cover letter.
3. View "My Applications" as the student.
```

### Notes
- Vite dev server proxies `/api` to the backend (port 4000).
- Auth: JWT stored in `localStorage`.
- Tables: `users`, `jobs`, `applications` (see `backend/schema.sql`).
