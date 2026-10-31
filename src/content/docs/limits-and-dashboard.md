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

At the top:

- Open and finished tasks
- Who is working now
- How often runs succeed
- How long tasks take from creation to done
- Tokens spent

Below that:

- Daily activity for the last 14 days
- A **Needs attention** list: blocked or unassigned tasks, hire requests, and failed runs
- A breakdown by model and by department
- A row for every employee

## How tokens are counted

Tokens are counted from each employee's board threads and credited to the model that thread ran. A running agent's tokens appear when its run ends. Days start at midnight in your time zone.
