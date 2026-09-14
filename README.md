<a id="top"></a>

<p align="center">
  <a href="https://personalportfolio-theta-gules-56.vercel.app/">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="assets/hero-light.svg">
      <img src="assets/hero-dark.svg" width="100%" alt="Hamza Ali — AI engineer. From an AI idea to a system you can explore. RAG systems, AI agents, and evaluation.">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://personalportfolio-theta-gules-56.vercel.app/"><img src="assets/portfolio.svg" width="190" alt="Explore my interactive portfolio"></a>
  <a href="https://personalportfolio-theta-gules-56.vercel.app/assets/Hamza_Ali_Resume_GenAI_Engineer.pdf"><img src="assets/resume.svg" width="190" alt="Read my CV"></a>
  <a href="mailto:hamza1713@gmail.com"><img src="assets/contact.svg" width="190" alt="Email Hamza Ali"></a>
</p>

<p align="center">
  <a href="#choose-your-route">Start here</a> · <a href="#selected-work">Selected work</a> · <a href="#the-lab">The lab</a> · <a href="#toolkit">Toolkit</a> · <a href="#lets-build">Contact</a>
</p>

### AI / GenAI engineer building useful, inspectable applications.

I connect language models to **documents, tools, data, and interfaces**. My projects explore the engineering around the model: retrieval, access boundaries, agent workflows, evaluation, and how people actually use the result.

Based in **Pakistan** · Open to **AI/ML & GenAI roles**, remote collaboration, and scoped client projects.

## Choose your route

<details>
<summary><b>01 · I’m hiring — show me the strongest engineering work</b></summary>

Start with **[AI Code Review Agent](#ai-code-review-agent)** for agent orchestration and backend design, then **[FinSight](#finsight)** for retrieval, data access, and security boundaries.

**Look for:** architecture decisions, tests, evaluation reports, and documented limitations. [Watch project walkthroughs](https://personalportfolio-theta-gules-56.vercel.app/#work) or [read my CV](https://personalportfolio-theta-gules-56.vercel.app/assets/Hamza_Ali_Resume_GenAI_Engineer.pdf).

</details>

<details>
<summary><b>02 · I have a project — show me what we could build</b></summary>

I can help scope a **document assistant**, an **AI workflow**, or an **evaluation and reliability review**. FinSight demonstrates document and SQL workflows; Factscope demonstrates a complete interface around claim analysis; the Brand Manager explores coordinated agent workflows.

Tell me your users, data sources, constraints, and desired outcome. [Start a project conversation](mailto:hamza1713@gmail.com?subject=AI%20project%20inquiry).

</details>

<details>
<summary><b>03 · I’m reviewing the technology — take me to the evidence</b></summary>

| Explore | Inspect |
| :--- | :--- |
| Agent design | [Architecture and structure](https://github.com/hamza1713/AI-Code-Review-Agent/blob/main/docs/ARCHITECTURE_AND_STRUCTURE.md) |
| Evaluation | [Code review benchmark report](https://github.com/hamza1713/AI-Code-Review-Agent/blob/main/BENCHMARK_REPORT.md) |
| Access boundaries | [FinSight security regression tests](https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-/blob/main/verification/test_security.py) |
| Deployment readiness | [FinSight readiness report](https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-/blob/main/PRODUCTION_READINESS_REPORT.md) |
| Full-stack delivery | [Portfolio source and CI](https://github.com/hamza1713/Portfolio/actions) |

</details>

## Selected work

Three projects that show how I approach AI application engineering. **Select a card to explore its repository; expand the notes to go deeper.**

<a id="ai-code-review-agent"></a>

[![AI Code Review Agent — repository context and structured review](assets/code-review.svg)](https://github.com/hamza1713/AI-Code-Review-Agent)

**Make code changes easier to investigate.** Combines static analysis, repository context, governance rules, and three CrewAI review roles. Includes a React dashboard, durable webhook queue, SARIF export, and MCP tools.

`Python` `FastAPI` `CrewAI` `React` `SQLite`

**[Source](https://github.com/hamza1713/AI-Code-Review-Agent) · [Architecture](https://github.com/hamza1713/AI-Code-Review-Agent/blob/main/docs/ARCHITECTURE_AND_STRUCTURE.md) · [Tests](https://github.com/hamza1713/AI-Code-Review-Agent/tree/main/tests)**

<details>
<summary><b>Inside the build → workflow, evaluation, and tradeoffs</b></summary>

**Workflow:** gather code context → combine analysis and agent reviews → apply governance → present findings for human review.

**Engineering focus:** durable webhook processing, structured results, context retrieval, and multiple ways to inspect or export findings.

**Evidence:** the checked-in [benchmark report](https://github.com/hamza1713/AI-Code-Review-Agent/blob/main/BENCHMARK_REPORT.md) records **84.2% finding-level F1** and **100% verdict accuracy across 14 curated cases**. These are distinct metrics on a small benchmark; they do not establish general accuracy. Generated tests and execution support depend on the configured review path and tools.

</details>

<br>

<a id="finsight"></a>

[![FinSight — role-aware retrieval and structured data](assets/finsight.svg)](https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-)

**Ask questions across documents and structured data.** A RAG + SQL workspace with department-scoped retrieval, six roles, and restricted SQL execution.

`Python` `FastAPI` `LangChain` `ChromaDB` `DuckDB` `React`

**[Source](https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-) · [Security tests](https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-/blob/main/verification/test_security.py) · [Readiness](https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-/blob/main/PRODUCTION_READINESS_REPORT.md)**

<details>
<summary><b>Inside the build → retrieval, access controls, and readiness</b></summary>

**Workflow:** identify role → route the question → retrieve scoped documents or query structured data → stream the response.

**Engineering focus:** authorization boundaries, retrieval filters, SQL restrictions, response streaming, and regression checks.

**Current scope:** documented as a **staging candidate**, with remaining deployment and evaluation gates. The readiness report and security tests are the useful starting points for assessing suitability for a real environment.

</details>

<br>

[![Factscope AI — explore claims and supporting sources](assets/factscope.svg)](https://github.com/hamza1713/Factscope-AI)

**Turn news content into claims people can examine.** Extracts claims and requests search-grounded assessments with citations, delivered through web and Electron desktop interfaces.

`TypeScript` `React` `Express` `Gemini` `Electron`

**[Source](https://github.com/hamza1713/Factscope-AI) · [Analysis endpoint](https://github.com/hamza1713/Factscope-AI/blob/main/api/analyze.ts) · [Watch walkthroughs](https://personalportfolio-theta-gules-56.vercel.app/#work)**

<details>
<summary><b>Inside the build → grounding, caching, and provider fallbacks</b></summary>

**Workflow:** extract claims → request analysis and supporting sources → return structured assessments for review.

**Engineering focus:** a shared analysis flow, desktop packaging, caching, and fallback paths when provider quotas are reached.

**Tradeoff:** the final fallback runs without search grounding. Citation availability and human review matter; a generated assessment is not a guarantee that a claim is true or false.

</details>

## The lab

More ways I explore agents, multimodal AI, machine learning, and product delivery.

| Project | What to explore |
| :--- | :--- |
| **[Social Media Brand Manager ↗](https://github.com/hamza1713/Autonomous-Social-Media-Brand-Manager)** | Five CrewAI agents for strategy, content, brand review, engagement drafts, and analytics. Final year project with simulated social APIs and sample metrics. |
| **[Deep-Fake Detection ↗](https://github.com/hamza1713/Deep-Fake-Detection)** | Multimodal analysis with a React interface. Experimental media assessment; confidence scores are not calibrated forensic accuracy. [Open demo](https://deep-fake-detection-pi.vercel.app). |
| **[Airline Customer Satisfaction ↗](https://github.com/hamza1713/DS-ML-PROJECTS)** | Data preparation, XGBoost tuning with cross-validation, held-out metrics, and feature importance. Includes the notebook and dataset. |
| **[Interactive Portfolio ↗](https://github.com/hamza1713/Portfolio)** | React/TypeScript application with project videos, an AI assistant, and an inquiry flow. [Explore the website](https://personalportfolio-theta-gules-56.vercel.app/). |

## Toolkit

**Click any badge to see where I use it.** Expand a category to explore the stack behind my projects.

<details open>
<summary><b>Languages</b></summary>

The languages behind my APIs, interfaces, and data workflows.

<p>
  <a href="https://github.com/hamza1713/AI-Code-Review-Agent"><img alt="Python — explore project" title="Python: see it in my work" src="https://img.shields.io/badge/Python-183B33?style=for-the-badge&amp;logo=python&amp;logoColor=FFD43B" height="28"></a>
  <a href="https://github.com/hamza1713/Portfolio"><img alt="TypeScript — explore project" title="TypeScript: see it in my work" src="https://img.shields.io/badge/TypeScript-183B33?style=for-the-badge&amp;logo=typescript&amp;logoColor=76B7FF" height="28"></a>
  <a href="https://github.com/hamza1713/Factscope-AI"><img alt="JavaScript — explore project" title="JavaScript: see it in my work" src="https://img.shields.io/badge/JavaScript-183B33?style=for-the-badge&amp;logo=javascript&amp;logoColor=F7DF1E" height="28"></a>
  <a href="https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-"><img alt="SQL — explore project" title="SQL: see it in my work" src="https://img.shields.io/badge/SQL-183B33?style=for-the-badge" height="28"></a>
  <a href="https://github.com/hamza1713/Portfolio/blob/main/client/index.html"><img alt="HTML5 — explore project" title="HTML5: see it in my work" src="https://img.shields.io/badge/HTML5-183B33?style=for-the-badge&amp;logo=html5&amp;logoColor=FF906B" height="28"></a>
  <a href="https://github.com/hamza1713/Portfolio/blob/main/client/src/index.css"><img alt="CSS3 — explore project" title="CSS3: see it in my work" src="https://img.shields.io/badge/CSS3-183B33?style=for-the-badge&amp;logo=css&amp;logoColor=BBA7FF" height="28"></a>
</p>

</details>

<details open>
<summary><b>AI & agent engineering</b></summary>

Agent orchestration, retrieval workflows, and model integration.

<p>
  <a href="https://github.com/hamza1713/Autonomous-Social-Media-Brand-Manager"><img alt="CrewAI — explore project" title="CrewAI: see it in my work" src="https://img.shields.io/badge/CrewAI-183B33?style=for-the-badge" height="28"></a>
  <a href="https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-"><img alt="LangChain — explore project" title="LangChain: see it in my work" src="https://img.shields.io/badge/LangChain-183B33?style=for-the-badge&amp;logo=langchain&amp;logoColor=CEF47D" height="28"></a>
  <a href="https://github.com/hamza1713/Factscope-AI"><img alt="Gemini — explore project" title="Gemini: see it in my work" src="https://img.shields.io/badge/Gemini-183B33?style=for-the-badge&amp;logo=googlegemini&amp;logoColor=86D9E3" height="28"></a>
  <a href="https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-"><img alt="RAG — explore project" title="RAG: see it in my work" src="https://img.shields.io/badge/RAG-183B33?style=for-the-badge" height="28"></a>
</p>

</details>

<details>
<summary><b>Frontend & application frameworks</b></summary>

Interfaces for exploring AI results on the web and desktop.

<p>
  <a href="https://github.com/hamza1713/Portfolio"><img alt="React — explore project" title="React: see it in my work" src="https://img.shields.io/badge/React-183B33?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" height="28"></a>
  <a href="https://github.com/hamza1713/Portfolio"><img alt="Tailwind CSS — explore project" title="Tailwind CSS: see it in my work" src="https://img.shields.io/badge/Tailwind%20CSS-183B33?style=for-the-badge&amp;logo=tailwindcss&amp;logoColor=38BDF8" height="28"></a>
  <a href="https://github.com/hamza1713/Portfolio"><img alt="Vite — explore project" title="Vite: see it in my work" src="https://img.shields.io/badge/Vite-183B33?style=for-the-badge&amp;logo=vite&amp;logoColor=C4A5FF" height="28"></a>
  <a href="https://github.com/hamza1713/Factscope-AI/tree/main/electron"><img alt="Electron — explore project" title="Electron: see it in my work" src="https://img.shields.io/badge/Electron-183B33?style=for-the-badge&amp;logo=electron&amp;logoColor=9FEAF9" height="28"></a>
  <a href="https://github.com/hamza1713/AI-Code-Review-Agent"><img alt="FastAPI — explore project" title="FastAPI: see it in my work" src="https://img.shields.io/badge/FastAPI-183B33?style=for-the-badge&amp;logo=fastapi&amp;logoColor=6BE5C3" height="28"></a>
  <a href="https://github.com/hamza1713/Portfolio"><img alt="Node.js — explore project" title="Node.js: see it in my work" src="https://img.shields.io/badge/Node.js-183B33?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=8DD58A" height="28"></a>
  <a href="https://github.com/hamza1713/Factscope-AI"><img alt="Express — explore project" title="Express: see it in my work" src="https://img.shields.io/badge/Express-183B33?style=for-the-badge&amp;logo=express&amp;logoColor=FFFFFF" height="28"></a>
</p>

</details>

<details>
<summary><b>Databases & retrieval</b></summary>

Structured storage, analytical queries, and vector search.

<p>
  <a href="https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-"><img alt="ChromaDB — explore project" title="ChromaDB: see it in my work" src="https://img.shields.io/badge/ChromaDB-183B33?style=for-the-badge" height="28"></a>
  <a href="https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-"><img alt="DuckDB — explore project" title="DuckDB: see it in my work" src="https://img.shields.io/badge/DuckDB-183B33?style=for-the-badge&amp;logo=duckdb&amp;logoColor=FFF000" height="28"></a>
  <a href="https://github.com/hamza1713/AI-Code-Review-Agent"><img alt="SQLite — explore project" title="SQLite: see it in my work" src="https://img.shields.io/badge/SQLite-183B33?style=for-the-badge&amp;logo=sqlite&amp;logoColor=86D9E3" height="28"></a>
</p>

</details>

<details>
<summary><b>Data science & machine learning</b></summary>

Data preparation, model tuning, and evaluation in my airline satisfaction project.

<p>
  <a href="https://github.com/hamza1713/DS-ML-PROJECTS"><img alt="pandas — explore project" title="pandas: see it in my work" src="https://img.shields.io/badge/pandas-183B33?style=for-the-badge&amp;logo=pandas&amp;logoColor=C4A5FF" height="28"></a>
  <a href="https://github.com/hamza1713/DS-ML-PROJECTS"><img alt="NumPy — explore project" title="NumPy: see it in my work" src="https://img.shields.io/badge/NumPy-183B33?style=for-the-badge&amp;logo=numpy&amp;logoColor=86D9E3" height="28"></a>
  <a href="https://github.com/hamza1713/DS-ML-PROJECTS"><img alt="scikit-learn — explore project" title="scikit-learn: see it in my work" src="https://img.shields.io/badge/scikit--learn-183B33?style=for-the-badge&amp;logo=scikitlearn&amp;logoColor=F5AD62" height="28"></a>
  <a href="https://github.com/hamza1713/DS-ML-PROJECTS"><img alt="XGBoost — explore project" title="XGBoost: see it in my work" src="https://img.shields.io/badge/XGBoost-183B33?style=for-the-badge" height="28"></a>
  <a href="https://github.com/hamza1713/DS-ML-PROJECTS"><img alt="Jupyter — explore project" title="Jupyter: see it in my work" src="https://img.shields.io/badge/Jupyter-183B33?style=for-the-badge&amp;logo=jupyter&amp;logoColor=F5AD62" height="28"></a>
</p>

</details>

<details>
<summary><b>Developer tools, testing & delivery</b></summary>

Version control, automated checks, packaging, and deployment.

<p>
  <a href="https://github.com/hamza1713/Portfolio"><img alt="Git — explore project" title="Git: see it in my work" src="https://img.shields.io/badge/Git-183B33?style=for-the-badge&amp;logo=git&amp;logoColor=F68A76" height="28"></a>
  <a href="https://github.com/hamza1713/Portfolio/actions"><img alt="GitHub Actions — explore project" title="GitHub Actions: see it in my work" src="https://img.shields.io/badge/GitHub%20Actions-183B33?style=for-the-badge&amp;logo=githubactions&amp;logoColor=86D9E3" height="28"></a>
  <a href="https://github.com/hamza1713/Enterprise-RAG-Chatbot-with-Role-Base-Access-Control-"><img alt="Docker — explore project" title="Docker: see it in my work" src="https://img.shields.io/badge/Docker-183B33?style=for-the-badge&amp;logo=docker&amp;logoColor=86D9E3" height="28"></a>
  <a href="https://github.com/hamza1713/Portfolio"><img alt="Vercel — explore project" title="Vercel: see it in my work" src="https://img.shields.io/badge/Vercel-183B33?style=for-the-badge&amp;logo=vercel&amp;logoColor=FFFFFF" height="28"></a>
  <a href="https://github.com/hamza1713/AI-Code-Review-Agent/tree/main/tests"><img alt="pytest — explore project" title="pytest: see it in my work" src="https://img.shields.io/badge/pytest-183B33?style=for-the-badge&amp;logo=pytest&amp;logoColor=F5AD62" height="28"></a>
</p>

</details>

<details>
<summary><b>Learning and foundations</b></summary>

My learning includes the Machine Learning Specialization (Stanford Online / DeepLearning.AI), Deep Learning Specialization (DeepLearning.AI), multi-agent systems with CrewAI, and retrieval-augmented generation coursework.

My [GitHub Copilot agent mode exercise](https://github.com/hamza1713/skills-build-applications-w-copilot-agent-mode) contains course material and setup instructions.

</details>

## Let’s build

**Have a role, a useful problem, or an idea worth testing?** I’d like to hear about it.

[Email me](mailto:hamza1713@gmail.com) · [Connect on LinkedIn](https://www.linkedin.com/in/hamza-ali-b9b8b22a6) · [Explore the interactive portfolio](https://personalportfolio-theta-gules-56.vercel.app/)

<sub>Project descriptions reviewed against public source in September 2026. Linked repositories, tests, and reports provide current implementation context.</sub>

[Back to top ↑](#top)
