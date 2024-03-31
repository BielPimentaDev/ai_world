import { create } from 'zustand';

interface SceneStore {
	text: string;
	setText: (text: string) => void;
	// image: any;
	type: 'dialogue' | 'selection';

	setType: (param: 'dialogue' | 'selection') => void;
	// options?: string[]
}

export const useSceneStorage = create<SceneStore>()((set) => ({
	text: '',
	type: 'dialogue',
	setText: (by: string) => set((state) => ({ ...state, text: by })),
	setType: (by: 'dialogue' | 'selection') =>
		set((state) => ({ ...state, type: by })),
}));
