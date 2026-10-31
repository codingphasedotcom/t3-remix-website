---
title: Dev log
description: What changed in each T3 Remix release, newest first.
section: Reference
order: 4
---

Every T3 Remix release, newest first, with what it adds and the T3 Code release it is built on. Download any version from [GitHub Releases](https://github.com/codingphasedotcom/t3-remix/releases).

## 0.1.6

**October 31, 2026** · Built on T3 Code 0.1.5 · [Release notes and downloads](https://github.com/codingphasedotcom/t3-remix/releases/tag/v0.1.6)

The CEO helps you hire, finished work clears off the board, and the sidebar shows only what's still open.

### New

- **The CEO recommends the team.** Pick **CEO recommends the team** when you start a company, or use **Ask … who to hire** on the org chart, and the CEO proposes each role the company is missing. A proposed employee can report to another proposed one, so a CTO and their engineers arrive as one team, and you still approve every hire. See [Hire requests](/docs/org-chart/#hire-requests).
- **Archive finished tasks.** Archive a task from its sheet, or everything in Done with **Archive all**. Subtasks go with it, and **Restore** brings one back. See [Archive finished tasks](/docs/board/#archive-finished-tasks).
- **Only open threads in the sidebar.** Each employee's list in the Companies sidebar leaves out settled threads, and you can settle one from its row.

### Fixed

- **Needs attention** on the dashboard lists each thread whose latest run failed. It opens that thread and leaves the list once the thread runs again or settles, instead of staying there for good.
- A company whose project folder isn't a git repository, or has no commits yet, runs its agents in the folder instead of failing with "Failed to resolve the VCS driver".

### Changed

- The board, org chart, dashboard, and Companies sidebar use sentence-case labels, lighter headings, and corners that fit their panels.

### Downloads

- Installers for macOS (Apple silicon and Intel), Windows x64, and Linux x64.
- Builds are not signed. [Install](/docs/install/) shows how to open them the first time.

## 0.1.5

**October 31, 2026** · Built on T3 Code 0.1.5 · [Release notes and downloads](https://github.com/codingphasedotcom/t3-remix/releases/tag/v0.1.5)

The first public release of T3 Remix.

### New

- **Agent companies.** Start a company with a CEO, an org chart, departments, and hire requests that only you can approve. Clone a company's team into a new company, or move a company to another project.
- **The board.** Tasks move through Ideas, To do, In progress, Review, Blocked, and Done. A task with an assignee starts on its own, managers split work into subtasks and review what their team delivers, and you can assign a task to yourself.
- **Shipping.** Ship a finished task as a pull request, or merge its branch into your checkout. Nothing merges without you.
- **Comments and files.** Agents answer board comments right away and keep following the thread. Attach files to a task by their path.
- **Memory and skills.** Lessons carry over between tasks, and each employee keeps its own reusable playbooks.
- **Routines, spending limits, and a dashboard** for each company. Each routine shows when it last ran and has **Run now**.
- **Mentions.** Mention an employee by job, such as `@CTO`, in any chat to hand them a task.
- **Faces and Cobalt.** Employees get one of 20 AI-generated headshots, and Cobalt adds a light dashboard theme.

### Downloads

- Installers for macOS (Apple silicon and Intel), Windows x64, and Linux x64.
- Builds are not signed. [Install](/docs/install/) shows how to open them the first time.
- The Windows build cannot run agents inside WSL yet.
