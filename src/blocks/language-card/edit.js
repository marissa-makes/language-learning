import { __ } from '@wordpress/i18n';

import { RichText, useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { nativeWord, translatedWord } = attributes;
	return (
		<div {...useBlockProps()}>
			<div className="ll-native-word__container">
				<p>{__(
					'Native Word:',
					'language-learning'
				)}
				</p>
				<RichText
					tagName='p'
					className="ll-native-word"
					value={nativeWord}
					onChange={(nativeWord) => setAttributes({ nativeWord })}
					onRemove={(nativeWord) => setAttributes({ nativeWord })}
					placeholder={__('Enter native word')}
					aria-label={__('Native word')}
					preserveWhiteSpace
				/>
			</div>
			<div className="ll-translated-word__container">
				<p>{__(
					'Translated Word:',
					'language-learning'
				)}
				</p>
				<RichText
					tagName='p'
					className="ll-translated-word"
					value={translatedWord}
					onChange={(translatedWord) => setAttributes({ translatedWord })}
					onRemove={(translatedWord) => setAttributes({ translatedWord })}
					placeholder={__('Enter translated word')}
					aria-label={__('Translated word')}
					preserveWhiteSpace
				/>
			</div>
		</div>
	);
}
