import { ReactNode } from "react";

export interface IOption {
	value: number;
	label: ReactNode;
}
export interface ITag {
	background?: string;
	color?: string;
	hoverBg?: string;
}
export interface IImage {
	background?: string;
}
export interface IStory {
	id: number;
	image: {
		background: string;
	};
	tags: { value: string; hoverBg: string; background: string; color: string }[];
	readTime: string;
	title: string;
	author: {
		authorImage: string;
		authorName: string;
		authorTitle: string;
	};
}
