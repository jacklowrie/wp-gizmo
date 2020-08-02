# WP-Gizmo
 Starter plugin and build process for making WordPress plugins, inspired by and intended to work in tandem with [WP Rig](https://wprig.io).

# Table of Contents
- [Installation](#installation)
  * [Step by Step Installation](#step-by-step-installation)
  * [Naming your Project Repository](#naming-your-project-repository)
  * [Recommended Git Workflow](#recommended-git-workflow)
    + [For Individuals (and Individual Projects)](#for-individuals--and-individual-projects-)
    + [For Teams (agencies, organizations, any group of people that will build more than one plugin together)](#for-teams--agencies--organizations--any-group-of-people-that-will-build-more-than-one-plugin-together-)
      - [Naming Individual Plugin repositories for Teams](#naming-individual-plugin-repositories-for-teams)
- [Usage](#usage)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Installation
WP-Gizmo is meant to run in the plugins directory of a WordPress Installation. If you plan to use github for version control on your new plugin, the easiest way to do this is to click the green `Use This Template` button from the homepage of this repo, choose a new name, and then pull it down to the plugins directory of your development environment's WordPress installation. However, you can also clone or download this repo into the plugins directory of your development environment's wordpress installation go from there.
## Step by Step Installation
1. Create a new repo from this template on GitHub, or clone this repo down to the plugins directory of your dev environment's WordPress installation and name it `[your-plugin-name]-gizmo`.
2. From the WordPress dashboard, activate the WP-Gizmo development plugin.
## Naming your Project Repository
This project doesn't have a build/bundle process yet, so if you're only worried about the short-term, you can name your project anything you like without a problem. However, the plan is to create a bundle process that will output a new directory named after your plugin, so I strongly recommend _against_ naming your repo after your plugin. Instead, consider suffixing your desired plugin name with `gizmo` or prefixing with `wp-gizmo`, though really any name that is different than your final plugin name will do:
- `wp-gizmo-[plugin-name]`
- `[plugin-name]-gizmo`
So, if you were making the omniwrench as a WordPress plugin, you might call your repo `wp-gizmo-omniwrench` or `omniwrench-gizmo`. That way, when the bundle process is added to WP-Gizmo, its output will be a plugin directory called `omniwrench`, with a corresponding `omniwrench.php` inside.
## Recommended Git Workflow
While not strictly necessary (this repo will still work without git/github), the following workflow is recommended for setting up new projects with WP-Gizmo.
### For Individuals (and Individual Projects)
This project is based on WP Rig, so our recommended git workflow is nearly identical to [their git workflow](https://github.com/wprig/docs/blob/master/documentation/git-workflow.md#recommended-git-workflow). The bird's eye view is to follow the instructions in the step-by-step above to set up your project, then set the upstream to this repo. That way, as improvements are made to WP-Gizmo, you can merge them into your own project(s) as they make sense. So `wp-gizmo` is upstream of `[your-plugin]-gizmo`.
### For Teams (agencies, organizations, any group of people that will build more than one plugin together)
Chances are if you're building plugins as part of a team, you'll want some boilerplate/build process features that are unique to you and your workflow. The recommended process for using WP-Gizmo in that case is largely the same as the git workflow for individuals, however instead of setting this repository as the  upstream for your plugins, you'll have your own (differently named) version of WP-Gizmo to spin new projects off of. In other words, use this template repo to create a template repo of your own! 
For a name, I recommend replacing 'wp' with your team's name or abbreviation (so MegaCorp's template becomes `megacorp-gizmo` or `mc-gizmo`). Publish the repo to your team's github organization, then set the upstream to this repo. Now, when it's time to build a new plugin, your repeat the process, but set the upstream for your new plugin to your organization's version of Gizmo. That way, you can pull in updates to `wp-gizmo` to your organization's copy and adapt them for your workflow first, before pulling them into individual plugins. 
So, if MegaCorp was an organization that built plugins, and they wanted to use a customized version of WP-Gizmo to create many plugins including a plugin called Deplanitizer, then they'd set up their git-flow so that `wp-gizmo` is upstream of `megacorp-gizmo`. MegaCorp can make modifications to `megacorp-gizmo` and merge them into all their plugins, and if they see an update to `wp-gizmo` that they like, they can merge it into `megacorp-gizmo`, integrate it with all their customizations, and then send everything down to their plugins
#### Naming Individual Plugin repositories for Teams
Just like for individuals, I recommend _against_ naming individual plugin repos after the desired plugin name, and instead prefixing your plugin slug with your team's slug or the slug of your team's version of WP-Gizmo. I would advise _against_ prefixing with `gizmo`, `wp-gizmo`, etc. in order to distinguish between gizmos that are downstream of your organization's version of WP-Gizmo and gizmos that are directly downstream of WP-Gizmo (especially if you have both!). That said, it's more important to follow a naming convention that is consistent and makes sense to everyone on your team.
So if MegaCorp was making the Deplanitizer as a wordpress plugin, they'd call their repo `megacorp-deplanitizer`, and set its upstream to `megacorp-gizmo`.
# Usage
At present, once WP-Gizmo installed, it's essentially a single-file plugin with a linting setup, ready for you to hack on. Add your functionality to `wp-gizmo.php` and test in your local WordPress install. If you'd like to make a production bundle, duplicate the entire directory and rename it to your desired plugin name, rename `wp-gizmo.php` to `[your-plugin-name].php`, and remove any unnecessary files (that will likely mean everything other than the main file you just renamed).
