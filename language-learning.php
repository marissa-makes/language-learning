<?php
/**
 * Plugin Name:       Language Learning
 * Description:       Collection of blocks for showcasing language learning within WordPress.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            marissa-makes
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       language-learning
 *
 * @package           language-learning
 */


function language_learning_blocks_init() {
	$blocks_build_dir = __DIR__ . '/build/blocks';

	// Cycle through block directory and register blocks via their respective block.json files
	foreach ( scandir( $blocks_build_dir ) as $result ) { 
		$block_location = $blocks_build_dir . '/' . $result;
		if ( ! is_dir( $block_location ) || '.' === $result || '..' === $result ) {
			continue;
		}
		register_block_type( $block_location );
	}
}
add_action( 'init', 'language_learning_blocks_init' );
