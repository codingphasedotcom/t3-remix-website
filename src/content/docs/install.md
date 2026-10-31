---
title: Install
description: Download the macOS app, open it the first time, and connect a provider.
section: Get started
order: 2
---

## Download the Mac app

Download the latest `.dmg` from [GitHub Releases](https://github.com/codingphasedotcom/t3-remix/releases/latest). Builds are for Apple silicon Macs. Open the disk image and drag **T3 Remix** into **Applications**.

On other platforms, or on an Intel Mac, [build from source](/docs/build-from-source/).

## Open it the first time

T3 Remix release builds are not notarized by Apple, so macOS blocks the first launch with a warning that it cannot check the app. Do one of the following once:

- Open **System Settings** > **Privacy & Security**, scroll to the message about T3 Remix, and choose **Open Anyway**.
- Or clear the download quarantine flag in Terminal:

```bash
xattr -dr com.apple.quarantine "/Applications/T3 Remix.app"
```

After that, T3 Remix opens like any other app.

## Connect a provider

T3 Remix drives the coding agents already installed on your computer, the same way T3 Code does. Install and sign in to at least one before you start a company:

| Provider | Setup |
| --- | --- |
| Codex | Install the [Codex CLI](https://developers.openai.com/codex/cli) and run `codex login` |
| Claude | Install [Claude Code](https://claude.com/product/claude-code) and run `claude auth login` |
| Cursor | Install the [Cursor CLI](https://cursor.com/cli) and run `agent login` |
| Grok Build | Install the [Grok Build CLI](https://x.ai/cli) and run `grok login` |
| OpenCode | Install [OpenCode](https://opencode.ai) and run `opencode auth login` |
| Antigravity | Enable it in **Settings**, then use **Install Antigravity** and **Sign in with Google** |

Every employee in a company picks its own model, so one company can mix providers.

## Running beside T3 Code

T3 Remix and T3 Code are separate apps. They can be installed and open at the same time:

- T3 Remix keeps its data in `~/.t3-remix`. T3 Code keeps its data in `~/.t3`. Neither touches the other's database.
- T3 Remix has no automatic update feed. A new T3 Code release never replaces it. To update, download a newer T3 Remix release.
- Both apps answer `t3code://` links, so a link opened from outside either app may open either one.

## Updating

Download the newer `.dmg` from Releases and replace the app in **Applications**. Your companies, boards, and threads live in `~/.t3-remix`, so they carry over.
