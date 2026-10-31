---
title: Troubleshooting
description: Fixes for the app not opening, agents not starting, and shipping that stops.
section: Reference
order: 3
---

## macOS says the app can't be opened

Release builds are not notarized. Open **System Settings** > **Privacy & Security** and choose **Open Anyway**, or run:

```bash
xattr -dr com.apple.quarantine "/Applications/T3 Remix.app"
```

## A task in To do never starts

Check, in order:

1. **Assignee.** A task with nobody assigned goes to the CEO. A task assigned to **You** never starts an agent.
2. **Column.** Tasks in **Ideas** never start on their own. Move it to **To do**.
3. **Auto-run agents** in the board settings. When it's off, use **Start agent** on the task.
4. **Agents at once.** If the board is full, the task waits for a free slot.
5. **Paused employee.** Unpause them in their editor on **Org chart**.
6. **Spending limit.** At 100% of the company's or the employee's monthly limit, agents are not started. Raise the limit under **Edit company** or in the employee's editor.

## An agent seems stuck

Open the task and follow the link to the agent's thread.

- If the thread is waiting for approval, the employee's permission mode is not **Full access**. Approve the prompt in the thread, or change their permissions.
- If the run failed, the task's runs list says so and the dashboard lists it under **Needs attention**. Comment on the task to tell the agent what to do, or use **Start agent** to retry.

## A task is waiting on work from another task

Each task only sees work that has been merged into the project. Ship the other task first, then comment on the waiting one so the agent picks up the change.

## Merge stops

- **Uncommitted changes**: commit or stash the changes in your project folder, then try again.
- **Conflicts**: nothing was merged. Comment on the task asking the agent to merge your branch into its own first, or choose **Open pull request** instead.

## Companies don't show on my phone

The mobile app does not show companies yet. Use the desktop app or the web app.

## Something else

Search or open an issue on [GitHub](https://github.com/codingphasedotcom/t3-remix/issues). Include what you expected, what happened, and the task's runs if an agent is involved.
