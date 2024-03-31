'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
	const [toggle, setToggle] = useState(true);
	return (
		<div className='text-white'>
			<button onClick={() => setToggle((prev) => !prev)}>Click</button>
			<AnimatePresence>
				<div>
					{toggle && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium recusandae sint dolore dolorem maxime magnam, corrupti
							ipsa suscipit assumenda minima labore natus, sapiente error nam
							minus saepe atque sunt nobis.
						</motion.div>
					)}
				</div>
			</AnimatePresence>
		</div>
	);
}
