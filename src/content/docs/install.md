---
title: Install
description: Download T3 Remix for macOS, Windows, or Linux, open it the first time, and connect a provider.
section: Get started
order: 2
---

## Download

Download the installer for your computer from the [latest release](https://github.com/codingphasedotcom/t3-remix/releases/latest). Its file name ends in:

| Computer | File |
| --- | --- |
| Mac with Apple silicon | `mac-arm64.dmg` |
| Mac with an Intel processor | `mac-x64.dmg` |
| Windows, 64-bit | `windows-x64-setup.exe` |
| Linux, 64-bit | `linux-x86_64.AppImage` |

There are no builds for ARM-based Windows or Linux yet. On those, [build from source](/docs/build-from-source/).

## Open it the first time

T3 Remix release builds are not signed, so your computer warns you the first time you open one.

### macOS

Open the disk image and drag **T3 Remix** into **Applications**. The app is not notarized by Apple, so macOS blocks the first launch with a warning that it cannot check the app. Do one of the following once:

- Open **System Settings** > **Privacy & Security**, scroll to the message about T3 Remix, and choose **Open Anyway**.
- Or clear the download quarantine flag in Terminal:

```bash
xattr -dr com.apple.quarantine "/Applications/T3 Remix.app"
```

After that, T3 Remix opens like any other app.

### Windows

Run the installer. If Windows SmartScreen says it protected your PC, choose **More info**, then **Run anyway**. T3 Remix installs for your user account and opens when it finishes.

The Windows build runs agents on Windows itself. It cannot run them inside WSL yet.

### Linux

Make the AppImage executable, then run it:

```bash
chmod +x T3-Remix-*-linux-x86_64.AppImage
./T3-Remix-*-linux-x86_64.AppImage
```

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

- T3 Remix keeps its data in `.t3-remix` in your home folder. T3 Code keeps its data in `.t3`. Neither touches the other's database.
- T3 Remix has no automatic update feed. A new T3 Code release never replaces it. To update, download a newer T3 Remix release.
- Both apps answer `t3code://` links, so a link opened from outside either app may open either one.

## Updating

The [dev log](/docs/devlog/) lists what each release changes. To update, download the newer installer from [Releases](https://github.com/codingphasedotcom/t3-remix/releases/latest):

- **macOS:** replace the app in **Applications**.
- **Windows:** run the new installer.
- **Linux:** replace the AppImage.

Your companies, boards, and threads live in `.t3-remix` in your home folder, so they carry over.
