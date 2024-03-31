'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Background from '/public/imgs/background.png';
import SceneHandler from './SceneHandler';
import AudioHandler from './AudioHandler';
import { AnimatePresence, motion } from 'framer-motion';

export default function Scene() {
	const [refresh, setRefresh] = useState(false);
	return (
		<main className=' max-w-[1600px] mx-auto relative overflow-hidden h-screen'>
			<motion.img
				src={Background.src}
				alt={'Background'}
				className='w-full max-h-[700px] overflow-hidden '
				initial={{ scale: 1, opacity: 1 }}
				animate={{ scale: [1, 1.3, 1], opacity: 1 }}
				transition={{ duration: 30, repeat: Infinity }}
			/>

			<SceneHandler />
			<AudioHandler />
			<button
				className='text-white'
				onClick={() => setRefresh((prev) => !prev)}>
				Refresh
			</button>
		</main>
	);
}
