---
title: Introduction
description: What T3 Remix is, what it adds to T3 Code, and where to start.
section: Get started
order: 1
---

T3 Remix is an open-source fork of [T3 Code](https://t3.codes), the GUI for coding agents. It keeps everything T3 Code does and adds **agent companies**: a team of AI agents with a CEO, employees in an org chart, a skill library, and a kanban board they work from.

You give the CEO a task. The CEO plans it, hands the work to its employees, reviews what they deliver, and hands the finished task back to you. Agents coordinate only through the board, never by messaging each other, so every assignment, question, and review is written down where you can read it.

## What T3 Remix adds

| Feature | What it does |
| --- | --- |
| [Companies](/docs/companies/) | A CEO, a mission, a home project, and a board. Start from a software team template or just a CEO. |
| [Org chart](/docs/org-chart/) | Employees with roles, departments, managers, skills, models, and faces. Agents ask you before anyone new is hired. |
| [The board](/docs/board/) | Six columns from Ideas to Done. Tasks with an assignee start on their own, and managers review their team's work. |
| [Comments and mentions](/docs/comments-and-mentions/) | Comment on a task and its owner answers. Mention an employee with `@CTO` from any chat. |
| [Shipping](/docs/shipping/) | Each task works on its own branch. Open a pull request or merge it when you are happy. |
| [Memory and skills](/docs/memory-and-skills/) | Lessons that survive between tasks, and reusable playbooks for how work is done. |
| [Routines](/docs/routines/) | Tasks that add themselves on a schedule. |
| [Limits and dashboard](/docs/limits-and-dashboard/) | Monthly token budgets, plus a dashboard of throughput, run success, and spend. |

T3 Remix also builds as its own app with its own data folder, so it installs beside T3 Code instead of replacing it. See [Build from source](/docs/build-from-source/).

## What stays the same

Everything below the board is T3 Code. Agents run through the providers you already use (Codex, Claude Code, Cursor, Grok Build, OpenCode, and Antigravity), each board run is an ordinary thread you can open and read, and every turn ends with a checkpoint you can diff and restore. If you know T3 Code, you know how a thread in T3 Remix behaves.

> Companies are available in the desktop app and the web app. The mobile app does not show companies yet.

## Where to go next

- New here? [Install T3 Remix](/docs/install/), then follow [Your first company](/docs/quickstart/).
- Want to know exactly how a task moves? Read [The board](/docs/board/).
- Building agents or tooling on top? See the [Agent tools](/docs/agent-tools/) reference.

## Thanks

Big thanks to Theo and the [T3 Code](https://t3.codes) team, and to Dota, for the inspiration. T3 Remix stands on T3 Code's open-source work, and it would not exist without it.
