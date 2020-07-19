# WP-Gizmo
 Starter plugin and build process making WordPress plugins

# Recommended Git Workflow
## For Individuals (and Individual Projects)
This project is based on WP Rig, so the recommended git workflow is nearly
identical. The bird's eye view is to make a clone of this repo for your project
and set the upstream to this repo. That way, as improvements are made to `wp-gizmo`,
you can pull them into your own dev environments as they make sense. **Do not
name your repo the same as your final plugin**. When you're ready to publish
your plugin or use it in a production environment, WP-Gizmo will take care of
that for you. Like WP Rig, I recommend prefixing or suffixing your plugin slug
with `wp-gizmo` or just `gizmo` to make your repo name (so if you were making
the omniwrench as a WordPress plugin, you might call your repo
`wp-gizmo-omniwrench` or `omniwrench-gizmo`). When you run the bundle process,
(as long as you set a project name), the bundled plugin directory will be called
`omniwrench`, with an optional zip archive `omniwrench.zip`. So,
`wp-gizmo -> wp-gizmo-omniwrench -> omniwrench.zip`.
## For Teams (Agencies, Organizations, any group of people that will build more than one plugin)
The recommended process for making new plugins is largely the same as the git
workflow for individuals, however instead of setting this repository as your
upstream, you'll have your own fork of this repository that you'll spin new
projects off of. So, download a copy of this repository and rename it. I
recommend replacing 'wp' with your team's name or abbreviation (so MegaCorp's
version of this project becomes `megacorp-gizmo` or `mc-gizmo`). Publish the
repo to your team's github organization, then set the upstream to this repo.
Now, when it's time to build a new plugin, your repeat the process, but set the
upstream for your new plugin to your organization's version of gizmo. That way,
you can pull in updates to `wp-gizmo` to your organization's copy and adapt them
for your workflow first, before pulling them into individual plugins. So,
`wp-gizmo -> megacorp-gizmo -> megacorp-deplanitizer -> deplanitizer.zip`.
### Naming Individual Plugin repositories
Just like for individuals, **do not name your plugin repo the same as your
plugin slug.** I recommend prefixing or suffixing your plugin slug with your
team's slug or the slug of your team's version of WP-Gizmo. I would advise
_against_ prefixing with `gizmo`, `wp-gizmo`, etc. in order to distinguish
between gizmos that are downstream of your organization's version of WP-Gizmo
and gizmos that are directly downstream of WP-Gizmo. So if MegaCorp was making
the Deplanitizer as a wordpress plugin, they'd call their repo
`megacorp-deplanitizer`, `mc-deplanitizer`, `mc-deplanitizer-gizmo`, etc. They
would _not_ name it `gizmo-deplanitizer` or `deplanitizer-gizmo`. That said, it's
more important to follow a naming convention that is consistent and makes sense
to everyone on your team.
# Using WP-Gizmo with WP Rig
Gizmo draws a lot of inspiration from WP Rig, and can be used in tandem with it.
This is especially useful if you're building a fully custom WordPress install
and want to stay organized from the get-go, or need to separate features from a Rig
theme into a plugin. To do so on an individual project, you'll need to use git
submodules, which are essentially nested repositories. Structuring a project
this way, you can still take advantage of upstream improvements from both Rig
and Gizmo, without needing to have multiple repositories for a single custom
build.
## Moving components from WP Rig to WP-Gizmo (and back again)
Because Gizmo's component class is modeled after Rig's component class,
individual components can be moved back and forth relatively quickly -- it's as
simple as updating the namespace registering the component, and (if you have any)
adding any composer dependencies to your Gizmo. Adding components to Rig is
largely the same, though at the time of writing Rig does not offer an easy way to
include composer packages in it's bundled theme. This makes for a pretty good
litmus test for where your code belongs: if you _need_ a composer dependency for
a component, chances are you're doing something that should probably go in a
plugin anyway. If what you're doing doesn't require composer dependencies
(and/or includes a lot of frontend assets), it may be better to put that component
in a theme.
# Gizmo CLI
Gizmo comes with a wp-cli extension that is inspired by Laravel's artisan cli.
the root command is `wp gizmo`. These commands are not included in your bundled
plugin by default. with wp-gizmo-cli, you can rapidly scaffold new plugin
components (`wp gizmo make:compoment`), tests (`wp gizmo make:test --component=NAME`),
and even cli commands (`wp gizmo make:cli`) for use in your dev environment
## Including CLI commands in your plugin
WP Gizmo's cli commands can be extended and included in your bundled plugin. You can
create new cli commands for your plugin from the command line:
`wp gizmo make:cli --bundled=TRUE`. If you choose to extend gizmo's wpcli commands
with additional commands, add the filepath to your `config.json`. During the bundle
process, the root command will be rewritten to the name of your plugin (so in your dev
environment, you run `wp gizmo refresh-opengraph-metadata`, but in your bundled plugin
called `1440`, you'd run `wp 1440 refresh-opengraph-metadata`).
