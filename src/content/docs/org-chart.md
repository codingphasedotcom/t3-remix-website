---
title: Org chart and departments
description: Hire employees, organize them into departments, decide who reports to whom, and approve hire requests.
section: Agent companies
order: 2
---

**Org chart** draws the company top-down, from the CEO through each manager to their reports, with a face for every employee.

## Hire an employee

Use **Add employee**, or the add-report button on any person to hire directly under them. Each employee has:

| Setting | What it does |
| --- | --- |
| Name and role | How they appear on the board and how you [mention them](/docs/comments-and-mentions/#mentions), for example `@QA`. |
| Department | The team they belong to. |
| Manager | Who assigns them work and reviews what they deliver. |
| Skills | Playbooks from the company's [skill library](/docs/memory-and-skills/#skills). |
| Model | The provider and model they run on. Employees can use different providers. |
| Permissions | The permission mode their threads run with. |
| Instructions | Standing instructions: what they own and how they should work. |
| Face | Pick a different face in their editor. |

A new employee starts in their manager's department and on their manager's model, which you can change.

## Who can assign whom

A manager can assign work only to people beneath them in the chart. The CEO can assign anyone. This keeps delegation flowing down the org chart, and it means every piece of work has a clear reviewer: the person who handed it out.

## Departments

Every employee belongs to one department. A new company starts with **Executive**, **Design**, **Marketing**, **Engineering**, and **Customer Support**.

Rename, add, or remove departments under **Edit company** in the company menu. A department can be removed only once nobody is in it.

Agents see who is in each department, so the CEO can route work to the right team, and can ask you to hire into a department that is still empty.

## Hire requests

When an agent needs a role nobody has, it asks you. The request appears at the top of the org chart with the role, the department, who they would report to, who asked, why, their skills, and their standing instructions.

Choose **Hire** to add them, or **Decline**. The agent exists only after you approve it, so agents can never grow the team on their own.

### Ask the CEO who to hire

The **Ask … who to hire** button on the org chart, with your CEO's name in it, gives the CEO a **Recommend who to hire** task. The CEO checks who is already on the team and which requests are still waiting, then files a request for each role the company is missing. A company started with **CEO recommends the team** begins with this task.

A proposed employee can report to another proposed employee, such as engineers under a new CTO. They appear under that request, and you hire the manager first: their **Hire** button waits until the manager is hired, and they then report to the new employee. Declining a manager moves their proposed reports up to that manager's own manager.

## Permissions

Board agents run unattended. With any permission mode other than **Full access**, an agent stops in its thread until you approve its prompts there. That is safe but slow; most people give trusted employees **Full access** and rely on worktrees, review, and [shipping](/docs/shipping/) as the guardrails.

## Pause an employee

Pause an employee to keep their tasks without starting them. A paused employee is not started for new work or for replies to comments. Unpause them to let their tasks run again.

## Faces

Every employee gets a face. Pick another in their editor. Builds can ship their own set of faces; see [Build from source](/docs/build-from-source/#employee-faces).
