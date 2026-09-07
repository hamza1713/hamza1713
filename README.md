<h1 align="center">Hi, I'm Hamza Ali 👋</h1>

<h3 align="center">AI/ML Engineer — RAG Systems · Multi-Agent Orchestration · Applied GenAI</h3>
<p align="center">I take AI systems from notebook to production: access control, retrieval scoping, evaluation, and a live URL — not just a demo.</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=00A8E8&center=true&vCenter=true&width=650&lines=RAG+pipelines+with+access+control%2C+not+just+retrieval;Multi-agent+systems+that+ship+to+a+live+URL;LLM+evaluation+%2B+deployment+%2B+scoping+%2B+observability" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/hamza-ali-b9b8b22a6"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:YOUR_EMAIL@example.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <a href="https://personalportfolio-theta-gules-56.vercel.app/"><img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <img src="https://komarev.com/ghpvc/?username=hamza1713&style=for-the-badge&color=blueviolet" alt="Profile views" />
</p>

---

### 👨‍💻 About Me

I build LLM-powered applications **end-to-end** — RAG pipelines, multi-agent systems, and the backend/deployment work most tutorials skip: access control, retrieval scoping, evaluation, and shipping to a live URL instead of a notebook.

Most "RAG demos" stop at vector search. I care about what happens after: *who's allowed to see this result, how do you know the answer is good, and how does it survive contact with real users.*

That mindset runs through my projects: a RAG workspace gated by role-based access control instead of open retrieval, a multi-agent PR reviewer that runs deterministic static analysis before ever calling an LLM, and a claim-verification app built with a 3-tier fallback so it stays up when one model call fails. I'm equally comfortable in the agent orchestration layer (CrewAI, prompt design, evaluation) and the backend that has to actually hold up in production (FastAPI, RBAC, queues, deployment).

---

### 🎯 Core Competencies

| Area | What I've built |
| --- | --- |
| **RAG Systems** | Document Q&A over enterprise-style content, with retrieval scoping, vector search, and role-based access control |
| **LLM Agents / Multi-Agent Orchestration** | 5-agent CrewAI pipeline automating a real workflow end-to-end (plan → create → review → engage → analyze) |
| **LLM App Development** | Full-stack apps (FastAPI/Express backends + React frontends) shipped and deployed, not just prototyped |
| **Applied Multimodal AI** | Gemini-powered image/media analysis for deepfake and content-authenticity detection |
| **ML Foundations** | Classical ML — EDA, feature engineering, model evaluation — the base layer under the GenAI work |

---

### 🚀 Featured Projects

*Five systems spanning RAG, multi-agent orchestration, applied multimodal AI, and the ML foundations underneath — each one shipped past the prototype stage.*

#### 🛡️ [AI Code Review Agent](https://github.com/hamza1713/AI-Code-Review-Agent) — Autonomous Multi-Agent PR Review Platform
A deterministic-first, multi-agent code intelligence platform that reviews pull requests end-to-end: static analysis (Semgrep, Bandit, Ruff) runs before any LLM call to keep costs down, a Tree-Sitter call graph gives agents repo-wide context instead of an isolated diff, and a codified `.code-review.yaml` governance layer enforces team rules deterministically instead of via prompt drift. Three CrewAI agents — Senior Developer, Security Engineer, Tech Lead — each work from an assigned skill set to produce a grounded verdict with confidence scoring, inline GitHub suggestion blocks, and auto-generated pytest regression tests. Ships with OASIS SARIF v2.1.0 export for GitHub Code Scanning, a durable SQLite-backed webhook queue with crash recovery, and a reusable GitHub Action for CI/CD. Backed by 66 passing tests.

`CrewAI` `Python` `FastAPI` `Gemini` `Semgrep` `Bandit` `Ruff` `Tree-sitter` `React` `TypeScript` `SARIF`

#### 🔍 [FinSight](https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-) — Enterprise RAG Workspace
Document Q&A + SQL analytics over enterprise data, gated by role-based access control so each user only retrieves what they're permissioned to see — the access-control layer most RAG tutorials skip entirely.

`FastAPI` `LangChain` `Gemini` `ChromaDB` `DuckDB` `React` `TypeScript`

#### 🤖 [Autonomous Social Media Brand Manager](https://github.com/hamza1713/Autonomous-Social-Media-Brand-Manager) — Multi-Agent System
5 specialized CrewAI agents (strategy, copywriting, review, engagement, analytics) running as a sequential pipeline that automates a full social campaign workflow, end to end. *(Final Year Project)*

`CrewAI` `Python` `Streamlit` `Gemini`

#### 📰 [Factscope-AI](https://github.com/hamza1713/Factscope-AI) — AI Claim Verification App
Desktop + web app that verifies news credibility with a 3-tier AI fallback engine and search-grounded fact-checking, so it stays available even when a primary model call fails.

`Electron` `React` `Express` `TypeScript` `Gemini`

#### 🕵️ Deep-Fake Detection — Multimodal AI App
Uses Gemini's multimodal reasoning to flag AI-generated or manipulated media — a practical, deployed application of multimodal AI for content authenticity.

`React` `TypeScript` `Vite` `Gemini`

#### 📊 [DS-ML-PROJECTS](https://github.com/hamza1713/DS-ML-PROJECTS) — Classical ML & Data Science Foundations
EDA, feature engineering, and model evaluation work — the supervised-learning groundwork built before moving into the GenAI projects above.

`scikit-learn` `Pandas` `Jupyter`

---

### 🧠 Tech Stack

**Languages**  
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white)

**GenAI / LLM**  
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![CrewAI](https://img.shields.io/badge/CrewAI-multi--agent-FF6B6B?style=flat-square)
![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-pipelines-0A66C2?style=flat-square)
![ChromaDB](https://img.shields.io/badge/ChromaDB-vector--search-FF6F00?style=flat-square)
![Prompt Engineering](https://img.shields.io/badge/Prompt%20Engineering-LLM%20eval-6E56CF?style=flat-square)

**Backend**  
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![DuckDB](https://img.shields.io/badge/DuckDB-FFF000?style=flat-square&logo=duckdb&logoColor=black)
![REST APIs](https://img.shields.io/badge/REST%20APIs-RBAC-025E8C?style=flat-square)
![Semgrep](https://img.shields.io/badge/Semgrep-SAST-00D26A?style=flat-square)
![SARIF](https://img.shields.io/badge/SARIF-v2.1.0-4A90E2?style=flat-square)

**Frontend**  
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)

**ML Foundations**  
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)
![Deep Learning](https://img.shields.io/badge/Deep%20Learning-EDA%20%26%20FE-blue?style=flat-square)

**Tools**  
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

### 📜 Certifications

- 🎓 Machine Learning Specialization — Stanford Online / DeepLearning.AI
- 🎓 Deep Learning Specialization — DeepLearning.AI
- 🎓 Design & Deploy Multi-Agent Systems with CrewAI — DeepLearning.AI (Coursera)
- 🎓 Retrieval-Augmented Generation (RAG) — Coursera

---

### 🌱 Currently Exploring

Agentic AI architectures, LLM evaluation frameworks, and production-grade RAG patterns — observability, retrieval quality, and access control at scale.

---

### 📊 GitHub Stats

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=hamza1713&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=hamza1713&layout=compact&theme=tokyonight&hide_border=true" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=hamza1713&theme=tokyonight&hide_border=true" alt="GitHub Streak" />
</p>

---

### 🤝 Connect With Me

<p align="center">
  <a href="https://www.linkedin.com/in/hamza-ali-b9b8b22a6"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:YOUR_EMAIL@example.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <a href="https://your-portfolio-link.com"><img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" /></a>
</p>

<p align="center"><i>I ship the production layers most GenAI tutorials ignore.</i></p>
