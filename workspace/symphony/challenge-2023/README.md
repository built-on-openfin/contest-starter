# OpenFin & Symphony Challenge 2023

This is a pre-configured workspace that lets you plug in your own applications in order to use the Symphony views and their intent support to develop a workflow using Symphony and the power of OpenFin. More information about the manifest settings and capabilities of this example workspace can be found here: [workspace-starter/how-to/customize-workspace](https://github.com/built-on-openfin/workspace-starter/blob/main/how-to/customize-workspace/README.md).

| Requirements                                                                  | Version                                                                                                      |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Node.js                                                                       | 16+                                                                                                              |

## Getting Started

To ensure you have OpenFin installed and to have a handy development tool start off by launching or downloading and installing:

- [OpenFin Process Manager](https://start.openfin.co/pm)

Once you have that up and running you can run the steps below and you will see your workspace platform show up on the desktop (the Home and Dock UI should appear) and it should also be listed in OpenFin Process Manager.

1. Install dependencies and do the initial build. Note that these examples assume you are in the sub-directory for the example.

```shell
npm run setup
```

2. Set Windows registry key for [Desktop Owner Settings](https://developers.openfin.co/docs/desktop-owner-settings).
   This example runs a utility [desktop-owner-settings.bat](./desktop-owner-settings.bat) that adds the Windows registry key for you, pointing to a local desktop owner
   settings file so you can test these settings. If you already have a desktop owner settings file, this script prompts to overwrite the location. Be sure to capture the existing location so you can update the key when you are done using this example.

   (**WARNING**: This script kills all open OpenFin processes. **This is not something you should do in production to close apps as force killing processes could kill an application while it's trying to save state/perform an action**).

```shell
npm run dos
```

3. Start the test server in a new window.

```shell
npm run start
```

4. Start Your Workspace Platform (this starts Workspace if it isn't already running).

```shell
npm run client
```

5. Type any character into the search box or hit enter to show the default list of Applications or use the launched dock.

6. If you modify the project and wish to rebuild you can run setup again or the build command below:

```shell
npm run build
```

## What's included

- We include two Symphony Views Focus & Collaboration that can be launched.
- We include a simple JavaScript View that is in the public folder that you can customize
- We include a simple TypeScript View that is in the public folder with the ts source file in the [client/src/views/template](./client/src/views/template/index.ts) folder. This view includes an example of publishing a notification and listening to notification events.
- We include Views that link to Symphony and OpenFin documentation.
- We include OpenFin Tools related to debugging, fdc3 context and intents and notifications.

## What Pod are you pointing at by default?

We are pointing to the Symphony develop pod.

## How do I change the pod that I want to use?

Go to the [public/apps.symphony.json](./public/apps.symphony.json) and update the symphony urls to your pod at lines 10 and 77.

## Where do I add my apps?

You have a json file for your own apps (it currently lists the JavaScript and TypeScript views for you to edit). It can be found in [public/apps.json](./public/apps.json).

## What are you using for app definitions?

We are using FDC3 2.0 App Definitions. <https://fdc3.finos.org/schemas/2.0/app-directory.html#tag/Application/paths/~1v2~1apps/get>

---

### Read more about [working with Workspace](https://developers.openfin.co/of-docs/docs/overview-of-workspace)
