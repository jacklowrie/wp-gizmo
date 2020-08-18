# WP-Gizmo
 Starter plugin and build process for making WordPress plugins, inspired by and intended to work in tandem with [WP Rig](https://wprig.io).

# Table of Contents
- [Installation](#installation)
  * [Dependencies](#dependencies)
  * [Step by Step Installation](#step-by-step-installation)
  * [Naming your Project Repository](#naming-your-project-repository)
- [Usage](#usage)
- [Documentation](#documentation)

# Installation
WP-Gizmo is meant to run in the plugins directory of a WordPress Installation. If you plan to use github for version control on your new plugin, the easiest way to do this is to click the green `Use This Template` button from the homepage of this repo, choose a new name, and then pull it down to the plugins directory of your development environment's WordPress installation. However, you can also clone or download this repo into the plugins directory of your development environment's wordpress installation go from there.
## Dependencies
WP-Gizmo requires composer and npm to run properly.
## Step by Step Installation
1. Create a new repo from this template on GitHub, or clone this repo down to the plugins directory of your dev environment's WordPress installation and name it `[your-plugin-name]-gizmo`.
2. From the WordPress dashboard, activate the WP-Gizmo development plugin.
3. From the command line, run `composer install && npm install`.
4. Update `config.json` with your new plugin's name and slug, and update the plugin comment in `wp-gizmo.php` (the plugin name & slug will be replaced in the bundle process. The author name, plugin URI, etc. will not)
## Naming your Project Repository
This project doesn't have a build/bundle process yet, so if you're only worried about the short-term, you can name your project anything you like without a problem. However, the plan is to create a bundle process that will output a new directory named after your plugin, so I strongly recommend _against_ naming your repo after your plugin. Instead, consider suffixing your desired plugin name with `gizmo` or prefixing with `wp-gizmo`, though really any name that is different than your final plugin name will do:
- `wp-gizmo-[plugin-name]`
- `[plugin-name]-gizmo`

So, if you were making the omniwrench as a WordPress plugin, you might call your repo `wp-gizmo-omniwrench` or `omniwrench-gizmo`. That way, when the bundle process is added to WP-Gizmo, its output will be a plugin directory called `omniwrench`, with a corresponding `omniwrench.php` inside.
## WP-Gizmo and Git
While not strictly necessary (this repo will still work in a vacuum as a starting place), WP-Gizmo works best when you take advantage of Git/GitHub. That way, when there are updates to WP-Gizmo, you can pull them into your plugin (or custom version) using version control! Check out the wiki page on WP-Gizmo's [recommended git workflow](https://github.com/jacklowrie/wp-gizmo/wiki/Recommended-Git-Workflow) for step-by-step instructions and naming best-practices.
# Usage
At present, WP-Gizmo is essentially a single-file plugin with a linting setup, ready for you to hack on. Add your functionality to `wp-gizmo.php` and test in your local WordPress install. When you're ready to ship your plugin, doublecheck your plugin comment in the main file as well as the slug and name in `config.json`, then run `gulp bundle`. This will create a new directory in your WordPress plugins directory with your plugin name and slug switched in.
# Documentation
Currently, all documentation lives in this readme and in the [WP-Gizmo wiki](https://github.com/jacklowrie/wp-gizmo/wiki). There isn't much, but as WP-Gizmo gets built out, the docs will become more robust. So if you need docs for something, please file an issue or get in touch!
