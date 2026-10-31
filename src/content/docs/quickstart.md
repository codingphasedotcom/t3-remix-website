---
title: Your first company
description: Start a company, give the CEO a task, and follow it from the board to a pull request.
section: Get started
order: 3
---

This walkthrough takes about ten minutes of your time. The agents do the rest.

## 1. Create the company

1. Open **Companies** from the sidebar footer.
2. Click **New company**.
3. Give it a **name**, a **mission** (one or two sentences about what the company is for), a **CEO name**, and a **model** for the CEO.
4. Pick where the team works: a **new project folder**, or one of your existing projects. To point the company at an existing repository, add its folder as a project first.
5. Pick a team. **Software team** adds a CTO, two engineers, and a QA engineer, each with starter skills. **CEO recommends the team** has the CEO propose who to hire for the mission, and you approve each person on **Org chart**. **Just a CEO** lets you hire everyone yourself.

The company opens on its dashboard. Use **Board** to switch to the kanban board.

## 2. Check the board settings

Open the board's settings menu and look at three switches before you hand out work:

- **Auto-run agents** starts agents as soon as tasks are ready. Turn it off if you want to press **Start agent** yourself while you get comfortable.
- **Worktree per task** gives each top-level task its own git worktree and `board/<task>` branch, so agents never edit your checkout directly. Leave it on.
- **Agents at once** caps how many tasks run at the same time.

Also check each employee's permission mode on **Org chart**. Board agents run unattended, so any mode other than **Full access** means an agent will stop in its thread and wait for you to approve its prompts there.

## 3. Give the CEO a task

Click **New task**. Write a title and a description that says what done looks like, for example:

> **Add a dark mode toggle to the settings page.** It should remember the choice and follow the system setting by default.

Leave the assignee empty and the task goes to the CEO. Put it in **To do** and the CEO starts in a new thread.

## 4. Watch the work spread

The CEO reads the task and the codebase, then usually splits it into subtasks for the CTO, who may split them again for the engineers. The parent task moves to **Blocked** while its subtasks run, and every subtask works in the parent's worktree, so the parent's branch collects the whole result.

Open any task to see its activity, its runs, and a link to each agent's thread. You can read along, or comment on the task to steer it. The owner answers on the board right away.

## 5. Review and ship

As subtasks finish, each manager reviews its team's work and either approves it (**Done**) or sends it back (**To do**) with requested changes. When every subtask is done, the parent returns to its owner, and the finished top-level task lands in **Review** for you.

Open it, look at the diff and the linked work, then choose **Ship**:

- **Open pull request** pushes the branch and opens a pull request.
- **Merge** merges the branch into whatever branch your project folder has checked out.

Once the work lands, the task moves to **Done**. That's one full loop.

## Next steps

- Teach the team your conventions with [memory and skills](/docs/memory-and-skills/).
- Set a [spending limit](/docs/limits-and-dashboard/) before you leave a company running overnight.
- Add a [routine](/docs/routines/) for recurring work like a weekly review.
