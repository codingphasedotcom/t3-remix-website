---
title: The board
description: The six columns, what starts an agent, how managers delegate and review, and what happens when work gets stuck.
section: Agent companies
order: 3
---

Each company has one kanban board. The column a task sits in decides what happens to it next.

## The columns

| Column | Meaning |
| --- | --- |
| **Ideas** | Waits for a human to schedule it. Tasks here never start on their own. |
| **To do** | Tasks with an assignee start automatically. |
| **In progress** | An agent is working the task. |
| **Review** | The reviewer starts when one is set. Without a reviewer, the task waits here for you. |
| **Blocked** | Needs a decision or is waiting on its subtasks. |
| **Done** | Approved work. |

## What starts an agent

- A task in **To do** with an assignee starts that agent in a new thread.
- New tasks go to the CEO unless you pick someone else.
- A task in **Review** with a reviewer starts the reviewer.

Starts respect the board settings: nothing starts while **Auto-run agents** is off, ready tasks wait for a free slot under **Agents at once**, and paused employees are skipped. See [Board settings](/docs/board-settings/).

## Delegation and subtasks

A manager given a large task splits it into **subtasks** for its reports and moves its own task to **Blocked**.

- Subtasks work in the parent task's worktree, so the parent's branch collects the whole result.
- When every subtask is done, the parent returns to **To do** and the manager continues: it checks the combined result, fixes loose ends, and moves the task on.
- Subtasks can have subtasks of their own, as deep as the org chart goes.

## Review

Work a manager delegates comes back to that manager for review:

- **Done** approves it.
- **To do** sends it back with requested changes. The employee continues in its own thread with the feedback.

A manager reviews each finished subtask in its own thread for the parent task, so delegating adds no extra thread per review.

A task with no reviewer stops in **Review** for you. Top-level tasks you assign usually end here, ready to [ship](/docs/shipping/).

## When work gets stuck

When a subtask sits in **Blocked**, its manager is started to unblock it. The manager answers the question, reassigns the subtask, or narrows it, and asks you on its own task when only you can help.

A subtask that is only waiting on its own subtasks does not count as stuck.

## Tasks for yourself

Pick **You** as the assignee to keep a task for yourself, like a card on your own kanban board. No agent works on it, reviews it, or answers its comments; it moves only when you move it. Assign an employee whenever you want to hand it off.

## What every agent is told

Every agent is told where it works: the folder, the branch, the base it started from, which other tasks share that folder, and that work from other tasks is only there once it is merged.

Branches are not merged for you, so a task that needs another task's work waits until you ship it.

## Threads and runs

Each employee keeps **one thread per task**. Replies, work, rework, and repeat reviews all continue that thread, so agents keep their context and each new message carries only what changed.

Open a task to see its activity, its runs, and links to each agent's thread. A run is one start of an agent on the task: work, a review, or a reply to a comment. Each finishes as completed, failed, or cancelled.

If an agent is not running and should be, use **Start agent** on the task (or **Start review** for a task in Review).
