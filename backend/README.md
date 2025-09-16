# Student Job Portal – Backend (Node/Express/MySQL)

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill values.
3. Create database and tables:
   ```bash
   # In MySQL client
   SOURCE schema.sql;
   ```
4. Run server
   ```bash
   npm run dev
   # or
   npm start
   ```

## Endpoints
- `POST /api/auth/register` { name, email, password, role: 'student'|'employer' }
- `POST /api/auth/login` { email, password }
- `GET  /api/jobs` list jobs (public)
- `GET  /api/jobs/:id` job detail (public)
- `POST /api/jobs` create job (employer only, Bearer token)
- `POST /api/jobs/:id/apply` apply (student only, Bearer token)
- `GET  /api/jobs/me/applications` my applications (student)
- `GET  /api/jobs/:id/applicants` applicants for an employer's job
