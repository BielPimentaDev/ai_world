import MainContainer from '@/components/containers/MainContainer';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '/public/imgs/avatar.png';
import Background1 from '/public/imgs/background1.png';

export default function Home() {
	return (
		<main className='text-white max-w-[1240px] w-full mx-auto px-16 '>
			<header className='py-3 mb-8 flex items-center justify-between'>
				<h1 className='font-bold text-xl font-cinzel '>
					AI/WOR<span className='text-orange-500'>LD</span>
				</h1>
				<div className='flex items-center gap-4'>
					<p>Ola, Guilherme</p>
					<Image src={Avatar} alt='avatar' className='w-10 h-10 rounded-full' />
				</div>
			</header>
			<h1 className='font-cinzel font-bold text-4xl mb-12'>
				Comece sua jornada
			</h1>
			<div className='relative'>
				<Image src={Background1} alt='background' className='brightness-95' />
				<Link href='/scene'>
					<button className='bg-orange-500 font-medium px-8 py-2 text-xl absolute top-1/2 left-1/2 -translate-x-1/2'>
						Iniciar uma nova partida
					</button>
				</Link>
			</div>
		</main>
	);
}
