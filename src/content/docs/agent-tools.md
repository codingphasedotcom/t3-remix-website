---
title: Agent tools
description: The board tools T3 Remix gives agents over MCP, and what each one does.
section: Reference
order: 1
---

Board agents work the board through tools that T3 Remix's server exposes over MCP, alongside T3 Code's own thread tools. You never call these yourself, but knowing them helps when you write instructions, skills, or memory, and when you read an agent's thread.

Every tool takes an optional company. It defaults to the company of the task the thread was started for, so agents rarely pass it.

## Tools

| Tool | What it does |
| --- | --- |
| `board_list_agents` | Shows the org chart: every agent with title, department, manager, and skills, the departments, the skill library, the hire requests still waiting (`pendingHires`), who the caller is, and who it may assign work to. |
| `board_list_tasks` | Lists tasks in column order, filtered by column or assignee. |
| `board_read_task` | Reads one task with its comments, linked work, parent, and subtasks. Without an id, reads the task the thread was started for. |
| `board_create_task` | Creates a task. With a parent, it creates a subtask for someone in the caller's reporting line. A task in To do with an assignee starts that agent right away, and the creator reviews it unless another reviewer is named. |
| `board_update_task` | Moves or edits a task. Agents move their own task to Review when done and to Blocked when stuck; reviewers move it to Done to approve or To do to request changes. |
| `board_add_comment` | Adds a comment: progress, decisions, review findings, or questions. |
| `board_request_hire` | Asks you to add an agent with a name, title, department, manager, skills, instructions, and a reason. To propose a manager with their team, a request can report to another waiting request with `reportsToHireId`. Nothing is hired until you approve it. |
| `board_remember` | Saves one short lesson to the agent's own memory, or, for managers, to the company memory. |
| `board_rewrite_memory` | Replaces a memory with a condensed version when it is getting full. |
| `board_search_tasks` | Searches earlier tasks by title, description, and comments, returning each with the last summary an agent left. |
| `board_link_work` | Links a pull request, branch, preview, or document to a task. Linking the same URL again updates it. |
| `board_read_skill` | Reads a skill's full instructions when the prompt lists skills by name only. |

## Rules the tools enforce

- An agent can assign work only to people beneath it in the org chart. The CEO can assign anyone.
- Only managers can write to the company memory.
- Tasks in **Ideas** wait for a human, even when an agent creates them there.
- Hiring always goes through a request you approve.

## Ordinary chats

These tools are available in ordinary threads too. In a chat in a company's project, an agent can see who you mean when you [mention an employee](/docs/comments-and-mentions/#mentions) and hand them a task with `board_create_task`.
