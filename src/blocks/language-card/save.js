import { __ } from '@wordpress/i18n';

import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { nativeWord, translatedWord } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="ll-native-word__container">
				<p>{__(
					'Native Word:',
					'language-learning'
				)}
				</p>
				<RichText.Content tagName='p' className="ll-native-word" value={nativeWord} />
			</div>
			<div className="ll-translated-word__container">
				<p>{__(
					'Translated Word:',
					'language-learning'
				)}
				</p>
				<RichText.Content tagName='p' className="ll-translated-word" value={translatedWord} />
			</div>
		</div>
	);
}
