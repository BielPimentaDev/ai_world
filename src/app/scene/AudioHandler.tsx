import React from 'react';
import { AudioPlayer } from './components/AudioPlayer';
import { audio } from '@/mock';

export default function AudioHandler() {
	return (
		<div>
			<AudioPlayer audio={audio} />
		</div>
	);
}
