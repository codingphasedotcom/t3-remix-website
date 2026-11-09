---
title: Dev log
description: What changed in each T3 Remix release, newest first.
section: Reference
order: 4
---

Every T3 Remix release, newest first, with what it adds and the T3 Code release it is built on. Download any version from [GitHub Releases](https://github.com/codingphasedotcom/t3-remix/releases).

## 0.1.8

**November 9, 2026** · Built on T3 Code 0.1.7 · [Release notes and downloads](https://github.com/codingphasedotcom/t3-remix/releases/tag/v0.1.8)

See your project over time, let an agent finish the merge, and take a whole company with you as a file.

### New

- **Timeline.** A new page beside the board. **Tasks** charts two weeks at a time, with each task as a bar from creation to done and the faces of who worked on it. **Updates** lists what happened day by day, and **Git** shows commits, merges, and what's still waiting to merge.
- **Merge and finish.** A task in **Review** can have its agent merge its pull request or branch and fix any conflicts; the task moves to **Done** when it lands. **Mark done** moves it there without merging.
- **Long conversations stay readable.** A task's **Activity** tab opens on the newest message with the comment box pinned below it. Older messages load when you ask, and runs of board updates fold into one line.
- **Agents can ask for skills.** An agent can request a skill from the library, or one installed on your computer, for itself or someone it manages. The request lands in your **Inbox**, where **Add skill** or **Decline** settles it.
- **Share a company as a file.** **Export company** saves the team, skills, routines, and instructions. **Import a company** starts it on any computer running T3 Remix. Installed skills match by name, and you pick a model for anyone whose model isn't set up there.
- **Finished tasks clean up their worktrees.** A task's worktrees are removed at the next cleanup once its main task and every subtask are done, or the main task is archived. Worktrees with uncommitted changes stay, and branches are kept so a reopened task gets its checkout back. An **Open worktrees** card on the dashboard shows which tasks are holding them open.

### Changed

- **Archive all** now clears finished subtasks of open tasks too, and one failure no longer stops the rest. A finished subtask can be archived on its own.
- The **Inbox** button is just its icon and count.
- Primary buttons use the spray-paint lime.

### Downloads

- Installers for macOS (Apple silicon and Intel), Windows x64, and Linux x64.
- Builds are not signed. [Install](/docs/install/) shows how to open them the first time.

## 0.1.7

**November 6, 2026** · Built on T3 Code 0.1.7 · [Release notes and downloads](https://github.com/codingphasedotcom/t3-remix/releases/tag/v0.1.7)

A new colorful look, a fuller dashboard, and your agents can use the skills you already have installed.

### New

- **Installed skills.** The **Skills** tab lists the skills your coding agents already have on the computer, such as Claude Code skills and plugins or Codex skills. Add one to the library and tick it on employees like any other skill. Agents read it from where it's installed, so they always follow the current version.
- **A new dashboard.** A greeting with today's date and a one-line summary, large stat tiles that jump to the board and org chart, a token budget card with a trend line, a table of your most urgent open tasks, and a feed of recent runs.
- **Inbox.** One place for everything waiting on you, across every company: tasks to review, stuck tasks, hire requests, and your own to-dos.
- **Tasks that wait on other tasks.** Pick what must finish first under **Waits on**, and the task starts on its own once they're done.
- **Pictures on comments.** Paste, drop, or attach screenshots and files in a comment. Claude and Codex agents see pictures as images.

### Changed

- The company pages have a new colorful look: a pale background, color for each board column, speech-bubble titles, soft outlines, and small drawings.
- The Activity chart has values on its bars.
- T3 Remix now has its own `t3` server downloads, so `t3 update` and the installer stay on T3 Remix.
- Built on T3 Code 0.1.7, with more than 1,300 changes from T3 Code.

### Downloads

- Installers for macOS (Apple silicon and Intel), Windows x64, and Linux x64.
- Builds are not signed. [Install](/docs/install/) shows how to open them the first time.

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
