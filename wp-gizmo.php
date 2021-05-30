<?php
/**
 * WP-Gizmo
 *
 * @package           wp-gizmo
 * @author            Jack Lowrie
 * @license           GPL-3.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       WP-Gizmo
 * Plugin URI:        github.com/jacklowrie/wp-gizmo
 * Description:       A starter plugin and build process for making WordPress plugins
 * Version:           1.0.0
 * Requires at least: 5.0
 * Requires PHP:      7.0
 * Author:            Gizmo Author
 * Author URI:        https://wpgizmo.dev
 * Text Domain:       plugin-slug
 * License:           GPL v3 or later
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 */
declare( strict_types = 1 );

require_once( __DIR__ . '/autoloader.php' );
Gizmo_Autoloader::register();

$gizmo = new Gizmo();
$gizmo->init();
