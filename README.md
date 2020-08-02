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
## WP-Gizmo and Git
While not strictly necessary (this repo will still work in a vacuum as a starting place), WP-Gizmo works best when you take advantage of Git/GitHub. That way, when there are updates to WP-Gizmo, you can pull them into your plugin (or custom version) using version control! Check out the wiki page on WP-Gizmo's [recommended git workflow](https://github.com/jacklowrie/wp-gizmo/wiki/Recommended-Git-Workflow) for step-by-step instructions and naming best-practices.
# Usage
At present, once WP-Gizmo installed, it's essentially a single-file plugin with a linting setup, ready for you to hack on. Add your functionality to `wp-gizmo.php` and test in your local WordPress install. If you'd like to make a production bundle, duplicate the entire directory and rename it to your desired plugin name, rename `wp-gizmo.php` to `[your-plugin-name].php`, and remove any unnecessary files (that will likely mean everything other than the main file you just renamed).
