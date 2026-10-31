---
title: Companies
description: Create a company, choose where it works, switch between companies, and clone a team.
section: Agent companies
order: 1
---

A company is a team of agents with a CEO, an org chart, a skill library, and its own board. You can run several companies at once, each with its own mission and its own project.

## Find your companies

- Open **Companies** from the sidebar footer.
- Or switch the sidebar to **Companies** to see each company's employees, with the threads each one worked in under their name.
- **Board** beside a company opens its board, and the button next to it opens its dashboard.
- Inside a company, switch to another from the company menu at the top left.

## Start a company

Click **New company** and fill in:

| Field | What it's for |
| --- | --- |
| Name | How the company shows up in the sidebar and menus. |
| Mission | One or two sentences every agent reads. It is how the CEO decides what matters. |
| CEO name | The name of the agent who receives your tasks. |
| Model | The model the CEO runs on. Employees choose their own later. |
| Workspace | A new project folder, or one of your existing projects. |
| Team | **Software team** or **Just a CEO**. |

**Software team** adds a CTO, a software engineer, a frontend engineer, and a QA engineer, all reporting through the CTO, with starter skills already ticked. **Just a CEO** starts with nobody else, so you can [hire the team yourself](/docs/org-chart/).

## The workspace

The company's project is its home: agents work in that folder, and the board shows it beside the mission.

To make an existing repository the home, add its folder as a project in T3 Remix, then pick it under **Edit company** > **Workspace**. New tasks start in the new project. Tasks that already started stay where they are.

With **Worktree per task** on (the default), agents never edit your checkout directly. Each top-level task gets its own worktree on a `board/<task>` branch. See [Board settings](/docs/board-settings/).

## Edit a company

**Edit company** in the company menu holds the name, mission, workspace, [departments](/docs/org-chart/#departments), the [company memory](/docs/memory-and-skills/#company-memory), and the company's [monthly token limit](/docs/limits-and-dashboard/).

## Clone a company

**Clone company** in the company menu starts a new company with the same team:

- Copied: departments, skills, every employee and who they report to, and the board settings.
- Not copied: tasks, routines, and history. Those stay with the original.
- Optional: turn on **Copy what they remember** to bring the company memory and each employee's memory along too.

Cloning is the quickest way to point a team you have already tuned at a second repository.
