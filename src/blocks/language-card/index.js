import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

registerBlockType( 'language-learning/language-card', {
	edit: Edit,
	save: Save,
} );
