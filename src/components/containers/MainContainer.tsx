import React from 'react';
import { ContainerProps } from './type';
import { twMerge } from 'tailwind-merge';

export default function MainContainer(props: ContainerProps) {
	const defaultClass = 'max-w-[1240px] w-full mx-auto px-16 overflow-hidden';
	const mergedClass = twMerge(defaultClass, props.className);
	return <div className={mergedClass}>{props.children}</div>;
}
