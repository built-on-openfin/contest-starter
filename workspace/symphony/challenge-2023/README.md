# OpenFin & Symphony Challenge 2023

This is a pre-configured workspace that lets you plug in your own applications in order to use the Symphony views and their intent support to develop a workflow using Symphony and the power of OpenFin. More information about the manifest settings and capabilities of this example workspace can be found here: [workspace-starter/how-to/customize-workspace](https://github.com/built-on-openfin/workspace-starter/blob/main/how-to/customize-workspace/README.md).

| Requirements                                                                  | Version                                                                                                      |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Node.js                                                                       | 16+                                                                                                              |

## Getting Started

To check to see if you can access everything you will need for this contest please visit our health check page:

- [OpenFin Health Check](https://cdn.openfin.co/health/deployment/index.html)

If the health check page flags a problem it may be that your organization has [Desktop Owner Settings](https://developers.openfin.co/docs/desktop-owner-settings) configured. Please reach out on Symphony chat that has been setup for this challenge.

To have a handy development tool and ensure you have OpenFin installed start off by launching or downloading and installing:

- [OpenFin Process Manager](https://start.openfin.co/pm)

Once you have that up and running you can run the steps below and you will see your workspace platform show up on the desktop (the Home and Dock UI should appear) and it should also be listed in OpenFin Process Manager.

1. Install dependencies and do the initial build. Note that these examples assume you are in the sub-directory for the example.

```shell
npm run setup
```

2. Start the test server in a new window.

```shell
npm run start
```

3. Start Your Workspace Platform (this starts Workspace if it isn't already running).

```shell
npm run client
```

4. Type any character into the search box or hit enter to show the default list of Applications or use the launched dock.

5. If you modify the project and wish to rebuild you can run setup again or the build command below:

```shell
npm run build
```

### Optional

If you wish to ensure you are targeting version 12 of OpenFin Workspace then there is an NPM dos command you can run. If a warning mentions an existing DOS entry then we recommend not replacing it (as it may include details of an internal CDN for OpenFin runtimes that is required for your organization).

Set Windows registry key for [Desktop Owner Settings](https://developers.openfin.co/docs/desktop-owner-settings).
This example runs a utility [desktop-owner-settings.bat](./desktop-owner-settings.bat) that adds the Windows registry key for you, pointing to a local desktop owner settings file so you can test these settings. If you already have a desktop owner settings file, this script prompts to overwrite the location. We do not recommend doing that.

(**WARNING**: This script kills all open OpenFin processes. **This is not something you should do in production to close apps as force killing processes could kill an application while it's trying to save state/perform an action**).

```shell
npm run dos
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

## What if I want to host my platform somewhere other than localhost?

The pre-configured platform: <https://github.com/built-on-openfin/workspace-starter/tree/workspace/v12.0.0/how-to/customize-workspace> is configured to support manifests launched from localhost or OpenFin recognised domains.

To host it on an internal server (or your own machine but not using localhost as the address) you will need to clone and build the platform and add it to your public folder.

- git clone https://github.com/built-on-openfin/workspace-starter.git
- switch to the workspace/v12.0.0 branch
- cd to how-to/customize-workspace
- type: npm run setup
- type: npm run prepare-package (this will generate a packaged folder)
- copy the contents of the packaged/dist folder to your contest starter public folder
- copy the folder "schemas" from packaged to your contest starter public folder
- update manifest-hosts.json to include your intended domain
- in your manifest.fin.json (or a copy you intend to deploy) replace "https://built-on-openfin.github.io/workspace-starter/workspace/v12.0.0/" with the path of your intended domain (the path that hosts your public folder) 
- when you launch the manifest from the internal server it should now load like it does when run from localhost.
---

### Read more about [working with Workspace](https://developers.openfin.co/of-docs/docs/overview-of-workspace)
