import { useSceneStorage } from '@/store';
import Link from 'next/link';
import React from 'react';

interface OptionProps {
	text: string;
	number: number;
}

export default function Option(props: OptionProps) {
	const { setType } = useSceneStorage();
	return (
		<div
			className='flex gap-6 items-center cursor-pointer'
			onClick={() => setType('dialogue')}>
			<div className='bg-zinc-500 px-8 py-6 font-cinzel'>{props.number}</div>
			<p className=' w-3/4'>{props.text}</p>
		</div>
	);
}
