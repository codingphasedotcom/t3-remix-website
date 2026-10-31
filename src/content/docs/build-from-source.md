---
title: Build from source
description: Run T3 Remix in development, build the desktop app, and give your own fork its own identity.
section: Reference
order: 2
---

T3 Remix is a fork of [T3 Code](https://github.com/pingdotgg/t3code) and builds the same way. The source lives at [codingphasedotcom/t3-remix](https://github.com/codingphasedotcom/t3-remix).

## Prerequisites

T3 Remix uses Vite+. Install the global `vp` command, which also provides the pinned Node version:

```bash
curl -fsSL https://vite.plus | bash
```

Then clone and install:

```bash
git clone https://github.com/codingphasedotcom/t3-remix.git
cd t3-remix
vp i
```

## Run in development

```bash
vp run dev
```

This starts the server and the web app. Open the pairing URL the dev runner prints; the bare address does not sign in a new browser. Use `vp run dev:desktop` for the Electron app instead.

## Build the Mac app

```bash
vp run dist:desktop:remix
```

This builds a `.dmg` named T3 Remix into the `release/` folder. It is the same as T3 Code's desktop build with a fork identity applied:

| Variable | T3 Remix value | Purpose |
| --- | --- | --- |
| `T3CODE_DESKTOP_PRODUCT_NAME` | `T3 Remix` | The app's name. |
| `T3CODE_DESKTOP_APP_ID` | `com.codingphase.t3office` | The macOS app ID. It keeps the fork's original name so macOS treats renamed builds as the same app. |
| `T3CODE_DESKTOP_HOME_DIR` | `.t3-remix` | The data folder in your home directory. |
| `T3CODE_DESKTOP_USER_DATA_DIR` | `t3remix` | The Electron profile folder. |
| `T3CODE_DESKTOP_ICON_PNG` | `assets/fork/t3-remix-macos-1024.png` | A 1024px app icon. |
| `T3CODE_DESKTOP_ICON_ICO` | `assets/fork/t3-remix-windows.ico` | The Windows app icon. |

Leave `GITHUB_REPOSITORY` unset so the build has no update feed and never replaces itself with an upstream release.

For Windows or Linux, set the same variables and run `vp run dist:desktop:win` or `vp run dist:desktop:linux`. Linux builds need a Linux machine.

## Publish a release

The **T3 Remix desktop builds** workflow in the repository's GitHub Actions builds all four installers. Run it with a release tag such as `v0.1.6`, matching the version in `apps/desktop/package.json`. It attaches the installers to that GitHub Release, creating the release if it does not exist. Then add the release to the [dev log](/docs/devlog/).

## Make your own fork

A plain build is named T3 Code, uses `~/.t3`, and uses T3 Code's app ID, so installing it replaces the official app and shares its database. To ship your own fork beside both T3 Code and T3 Remix, set your own values for the variables above, in your environment or the repository's `.env.local`, and build with `vp run dist:desktop:artifact`. Pick a new app ID and data folder so nothing collides.

All builds still answer `t3code://` links, so a link opened from outside the apps may open any of them.

## Employee faces

Employee faces come from `apps/web/src/components/board/faces-custom/`. When that folder has any images (`.jpg`, `.jpeg`, `.png`, `.webp`, or `.svg`), the app uses them instead of the bundled illustrations in `faces/`.

Everything in that folder is committed and ships in every build, so add only images you may share. The twenty headshots T3 Remix ships are AI-generated and show no real people.

## Themes

T3 Remix adds **Cobalt**, a light dashboard theme, to T3 Code's built-in themes. Pick it in the app's appearance settings.

## Staying current with T3 Code

T3 Remix tracks upstream by merging T3 Code's `main` into the fork, not by rebasing, so fork features are re-applied on top of upstream changes rather than replaced. To do the same in your own fork:

```bash
git remote add upstream https://github.com/pingdotgg/t3code.git
git fetch upstream
git merge upstream/main
```

## Contributing

Issues and pull requests are welcome on [GitHub](https://github.com/codingphasedotcom/t3-remix/issues). For changes to T3 Code itself, contribute upstream to [pingdotgg/t3code](https://github.com/pingdotgg/t3code) and follow its contributing guide.
