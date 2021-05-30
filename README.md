# WP-Gizmo
 Starter plugin and build process for making WordPress plugins, inspired by and intended to work in tandem with [WP Rig](https://wprig.io), or any theme using WP Rig as a boilerplate.

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
WP-Gizmo requires composer and npm to run properly for development. The bundled plugin will not require either.
## Step by Step Installation
1. Create a new repo from this template on GitHub, or clone this repo down to the plugins directory of your dev environment's WordPress installation.
2. Activate the plugin.
3. From the command line, run `composer install && npm install`.
4. Update `config.json` with your new plugin's name and slug, and update the plugin comment in `wp-gizmo.php` (the plugin name & slug will be replaced in the bundle process. The author name, plugin URI, etc. will not)

# Usage
At present, WP-Gizmo is essentially a single-file plugin with a linting setup, ready for you to hack on. Add your functionality to `wp-gizmo.php` and test in your local WordPress install. When you're ready to ship your plugin, doublecheck your plugin comment in the main file as well as the slug and name in `config.json`, then run `gulp bundle`. This will create a new directory in your WordPress plugins directory with your plugin name and slug switched in.

# Documentation
Currently, all documentation lives in this readme and in the [WP-Gizmo wiki](https://github.com/jacklowrie/wp-gizmo/wiki). There isn't much, but as WP-Gizmo gets built out, the docs will become more robust. So if you need help, please file an issue or get in touch!
