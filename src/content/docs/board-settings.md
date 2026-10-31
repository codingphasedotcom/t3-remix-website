---
title: Board settings
description: Control when agents start, whether each task gets its own worktree, and how many run at once.
section: Agent companies
order: 9
---

The board's settings menu controls three things.

## Auto-run agents

When on, tasks start as soon as they are ready: a task in **To do** with an assignee, a task in **Review** with a reviewer, or a comment that needs a reply.

Turn it off to start tasks only with **Start agent** on a task. This is a good way to pause a whole company without editing anyone.

## Worktree per task

When on, each top-level task gets its own git worktree on a `board/<task>` branch from the project's current `HEAD`. Subtasks work in their parent's worktree.

Turn it off to let agents share the project checkout. Only do that for a company that works on one task at a time, since parallel agents in the same checkout will trip over each other.

## Agents at once

How many tasks can run at the same time. Ready tasks wait for a free slot.

Replies to your comments start even when the board is at this limit, so a question never waits behind a long task.

## Settings elsewhere

| Setting | Where |
| --- | --- |
| Company token limit, departments, workspace, company memory | **Edit company** in the company menu |
| Employee model, permissions, skills, token limit, memory, pause | The employee's editor on **Org chart** |
| Schedules | **Routines** tab |
