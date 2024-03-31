import { useSceneStorage } from '@/store';
import React from 'react';

export default function DialogueBox() {
	const { setType } = useSceneStorage();
	return (
		<div>
			<div className=' relative bg-black px-16 py-4 flex flex-col gap-4  text-xl'>
				<p className='text-white font-cinzel'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
					adipisci quos maxime maiores eius expedita blanditiis aspernatur
					nesciunt voluptatem? Maiores modi numquam assumenda obcaecati
					aspernatur praesentium, nulla excepturi quia impedit! adipisci quos
					maxime maiores eius expedita blanditiis aspernatur nesciunt
					voluptatem? Maiores modi numquam assumenda obcaecati aspernatur
					praesentium, nulla excepturi quia impedit!
				</p>
				<div
					onClick={() => {
						setType('selection');
					}}
					className='cursor-pointer text-right text-white bg-orange-500 self-end px-6 py-2 '>
					Próxima
				</div>
			</div>
		</div>
	);
}
