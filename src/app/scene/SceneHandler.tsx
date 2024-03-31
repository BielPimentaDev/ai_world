'use client';
import React, { useState } from 'react';
import Dialogue from './sceneOptions/Dialogue';
import Selection from './sceneOptions/Selection';
import { motion } from 'framer-motion';
import Background from '/public/imgs/background.png';
import { useSceneStorage } from '@/store';
export default function SceneHandler() {
	const { type } = useSceneStorage();
	return (
		<div className='relative'>
			{type == 'dialogue' && <Dialogue />}
			{type == 'selection' && <Selection />}
		</div>
	);
}
