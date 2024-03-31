'use client';
import React, { useEffect } from 'react';
import Shadow from '../../components/Shadow';
import DialogueBox from '../../components/DialogueBox';
import { motion, AnimatePresence } from 'framer-motion';
export default function Dialogue() {
	useEffect(() => {
		console.log('montou');
	}, []);
	return (
		<div className='bg-black'>
			<Shadow />

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0 }}
				className='bg-black'
				transition={{ duration: 1.25, delay: 0.5 }}>
				<DialogueBox />
			</motion.div>
		</div>
	);
}
