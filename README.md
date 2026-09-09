# CareerMatch AI

CareerMatch AI is a production-quality full-stack web application designed to help job seekers track applications, parse resumes, analyze job descriptions, and use AI to find the perfect match.

## Features
- **Application Tracking:** Kanban board with drag-and-drop capability.
- **Resume Parsing:** Upload PDF or DOCX files and extract structured data using AI.
- **Job Analysis:** Paste a job description and automatically extract requirements.
- **AI Matching Engine:** Deterministic scoring combined with semantic similarity (embeddings) to evaluate your resume against job requirements.
- **Analytics:** Track application counts, interview conversion, and offer rates.
- **Interview Tracking:** Manage upcoming and past interviews linked to your applications.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Database:** PostgreSQL via Prisma ORM
- **Authentication:** Auth.js (NextAuth v5 beta) with Custom Credentials
- **AI Integration:** Vercel AI SDK (@ai-sdk/openai), OpenAI gpt-4o-mini & text-embedding-3-small
- **File Storage:** AWS SDK for S3 (with local filesystem fallback for development)

## Getting Started

1. **Clone and Install**
   ```bash
   git clone ...
   cd career-match-ai
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root based on `.env.example`:
   ```env
   # PostgreSQL connection string
   DATABASE_URL="postgresql://user:password@localhost:5432/careermatch"
   
   # NextAuth Secret
   AUTH_SECRET="your-secret-key"

   # AI Provider API Key (OpenAI)
   AI_API_KEY="sk-..."

   # Optional S3 Storage Configuration (leave blank for local storage)
   STORAGE_ENDPOINT=""
   STORAGE_REGION=""
   STORAGE_ACCESS_KEY=""
   STORAGE_SECRET_KEY=""
   STORAGE_BUCKET=""
   ```

3. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Testing**
   ```bash
   npm run test
   ```

## Architecture Notes
- The AI parsing uses structured extraction (`generateObject` with Zod schemas) to guarantee the output format.
- Resume matching avoids the "black box LLM scoring" issue by using a deterministic engine that combines exact skill matching with vector embeddings (Cosine Similarity) for experience evaluation.
