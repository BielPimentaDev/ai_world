'use client';
import React, { useState } from 'react';
import Shadow from '../../components/Shadow';
import Image from 'next/image';
import Avatar from '/public/imgs/avatar.png';
import Option from './Option';
import { motion, AnimatePresence } from 'framer-motion';

export default function Options() {
	const text =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet excepturi voluptatem dolores possimus asperiores atque ea voluptatibus placeat sint. Cumque, debitis? Aperiam vero velit laudantium officiis dicta ipsa nostrum.';
	const optionsArray = [
		{ text, index: 1 },
		{ text, index: 2 },
		{ text, index: 3 },
	];
	const [isClicked, setIsClicked] = useState(false);
	const [selectedOption, setSelectedOption] = useState<number | null>(1);

	const optionClick = (index: number) => {
		console.log('clicked');
		setIsClicked(true);
		setSelectedOption(index);
	};

	return (
		<div className='bg-black absolute w-full -top-72 text-white  '>
			<Shadow />
			<div className='flex px-12 gap-12'>
				<Image src={Avatar} alt='Avatar' className='h-[500px] w-[350px]' />
				<div className=''>
					<h1 className='text-white font-cinzel font-bold  text-5xl mb-12  '>
						O que voce faz?
					</h1>
					<div className='flex flex-col gap-10 '>
						{optionsArray.map((option) => {
							return (
								<motion.div
									onClick={() => optionClick(option.index)}
									key={option.index}
									initial={{ x: 0, y: 20, opacity: 0 }}
									animate={{ x: 0, y: 0, opacity: 1 }}
									transition={{
										duration: 0.5,
										delay: option.index * 0.5,
									}}>
									<Option number={option.index} text={option.text} />
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
