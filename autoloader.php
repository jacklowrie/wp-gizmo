<?php

/**
 * Autoloads MyPlugin classes using PSR-0 standard.
 *
 * @link https://awhitepixel.com/blog/autoloader-namespaces-theme-plugin/ autoload with namespaces
 * @link https://carlalexander.ca/organizing-files-object-oriented-wordpress-plugin/#psr-0-example
 *
 */
class Gizmo_Autoloader {
	/**
	 * Registers MyPlugin_Autoloader as an SPL autoloader.
	 *
	 * @param boolean $prepend
	 */
	public static function register( $prepend = false ) {
		if ( version_compare( phpversion(), '5.3.0', '>=' ) ) {
			spl_autoload_register( [ new self, 'autoload' ], true, $prepend );
		} else {
			spl_autoload_register( [ new self, 'autoload' ] );
		}
	}

	/**
	 * Handles autoloading of plugin classes.
	 *
	 * @param string $class
	 */
	public static function autoload( $class ) {

		$namespace = 'WP_Gizmo\Gizmo';

		if ( 0 !== strpos( $class, $namespace ) ) {
			return;
		}

		$class = str_replace( $namespace, '', $class );
		$class = str_replace( '\\', DIRECTORY_SEPARATOR, $class ) . '.php';

		$directory = plugin_dir_path( __FILE__ );
		$path = $directory . DIRECTORY_SEPARATOR . 'inc' . DIRECTORY_SEPARATOR . $class;

		if ( file_exists( $path ) ) {
			require_once( $path );
		}
	}
}
