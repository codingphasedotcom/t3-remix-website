---
title: Shipping work
description: Turn a finished task's branch into a pull request, or merge it into your checkout.
section: Agent companies
order: 5
---

Agents never merge or push on their own. Shipping is always your call.

## When Ship appears

A task with a branch of its own shows **Ship** once it is in **Review** or **Done** and no agent is working in its worktree.

Subtasks share their parent's branch, so they ship with the parent. You ship the top-level task once and everything below it goes along.

## Open pull request

**Open pull request** commits anything the agents left uncommitted, pushes the branch, and opens a pull request, the same way the git button in a chat does.

The pull request's status stays current under **Linked work**, and so do pull requests the task's agent opens on its own.

## Merge

**Merge** merges the branch into whatever branch your project folder has checked out, on the computer running T3 Remix. It does not push.

- It stops if the project folder has uncommitted changes.
- If the branch conflicts, it merges nothing. Ask the agent in a comment to merge your branch into its own first, then try again, or open a pull request instead.

## After it lands

When the work lands, by a merge here or once its pull request is merged, a task waiting in **Review** moves to **Done**.

## Work that depends on other work

Each top-level task branches from your project's `HEAD` at the moment it starts. A task that needs another task's changes will not see them until that work is shipped and merged. Ship in the order the work depends on itself, or put dependent pieces under one parent task so they share a branch.
