---
title: Memory and skills
description: How agents remember lessons between tasks, and how skills teach them the way your team works.
section: Agent companies
order: 6
---

Agents start every task fresh. Memory and skills are how a company gets better over time instead of rediscovering the same things.

## Employee memory

Each employee keeps a memory: short, self-contained lessons such as the project's test command, a gotcha in the build, or a preference you stated.

- Before finishing a task, an agent records anything worth keeping. Each entry is stamped with the date and the agent's name.
- Memory is for lasting lessons, not a log of the task.
- Read or edit an employee's memory in their editor on **Org chart**.

## Company memory

The CEO and managers also keep a **company memory** that every agent sees, for team-wide decisions like "we use pnpm" or "never touch the billing module without asking". Read or edit it under **Edit company** in the company menu.

## How memory stays small

Both memories are included in each agent's prompt and are capped in size. When one fills up, the agent condenses it: it merges duplicates, drops lessons that no longer hold, and keeps a short list. You can always rewrite a memory by hand in the editor.

## Searching past work

Agents can also search the company's earlier tasks (titles, descriptions, and comments) to see how similar work was done, and read the thread behind any result.

## Skills

A skill is a reusable playbook: when it applies, how to do the work, and how to check it.

1. Add skills on the **Skills** tab, or use **Add starter skills**.
2. Tick skills on each employee in their editor.

Agents receive the instructions of every skill they have on each task they work. When an employee's skills add up to more than a page, the prompt lists them by name instead, and the agent reads the ones that apply before it starts.

### Starter skills

| Skill | Use it for |
| --- | --- |
| Planning and delegation | Turning a goal into small, assignable tasks with a clear definition of done. |
| Code review | Approving only changes you would merge, with specific requested changes otherwise. |
| Testing | Proving behavior with automated tests and pasting the result. |
| Frontend | Building UI that matches the existing app, with loading, empty, and error states. |
| Backend and APIs | Changing servers, data, and APIs safely. |
| Writing | Clear docs, copy, and release notes. |

Edit them freely. A good skill is specific to your project: name the commands, the files, and the checks you actually expect.

### Memory or skill?

Use **memory** for facts the agents discover or you mention in passing. Use a **skill** for a procedure you want followed every time, written once and given to the people who need it.
