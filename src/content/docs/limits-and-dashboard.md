---
title: Limits and dashboard
description: Cap how many tokens a company or employee spends each month, and see how the company is doing.
section: Agent companies
order: 8
---

## Spending limits

Set a monthly token limit for the whole company under **Edit company**, or for one employee in their editor. Type a number like `5M`, `250k`, or `1,500,000`. Leave it empty for no limit.

- Limits count input plus output tokens per calendar month (UTC), the same total the dashboard shows.
- From **80%**, the org chart and board warn you.
- At **100%**, agents are not started until you raise the limit or the month ends.
- An agent already running finishes its run.

## Dashboard

**Dashboard** shows how the company is doing.

At the top, a one-line summary and four tiles: open tasks, who is working now, tasks finished, and how often runs succeed. Their arrows jump to the board or org chart.

Below that:

- **Token budget**: used, limit, and remaining when the company has a monthly limit, or the last 14 days when it doesn't, with a trend line
- **Tasks**: your most urgent open tasks, with agents at work first, then blocked, in review, and queued. Click one to open it.
- Daily activity for the last 14 days
- A **Needs attention** list: blocked or unassigned tasks, hire requests, and every employee thread whose latest run failed
- **Recent runs**: who ran what, newest first
- A breakdown by model, department, and column
- A row for every employee

A failed run in **Needs attention** opens its thread. It leaves the list once that thread runs again without failing, whether the board restarts it or you continue it from the thread itself, or once the thread settles.

## How tokens are counted

Tokens are counted from each employee's board threads and credited to the model that thread ran. A running agent's tokens appear when its run ends. Days start at midnight in your time zone.
