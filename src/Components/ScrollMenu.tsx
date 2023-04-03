import { useEffect, useRef, useState, ReactNode } from "react";
import styled from "styled-components";

export const ScrollMenu = ({ children }: { children: ReactNode }) => {
	const [currentScroll, setCurrentScroll] = useState(0);

	const ref = useRef<any>();

	const onScroll = () => {
		var scrolled = ref.current.scrollLeft;
		setCurrentScroll(scrolled);
	};

	useEffect(() => {
		const el = ref.current;
		if (el) {
			const onWheel = (e: any) => {
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY,
					behavior: "smooth",
				});
			};
			el.addEventListener("wheel", onWheel);

			return () => el.removeEventListener("wheel", onWheel);
		}
	}, []);

	const sliderLeft = () => {
		const el = ref.current;
		el.scrollLeft = el.scrollLeft - 260;
	};
	const sliderRight = () => {
		const el = ref.current;
		el.scrollLeft = el.scrollLeft + 260;
	};

	return (
		<Wrapper>
			{currentScroll > 0 && (
				<svg
					onClick={sliderLeft}
					style={{ marginRight: "15px" }}
					width="18"
					height="16"
					viewBox="0 0 18 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M12.9644 1.5L6.46436 8L12.9644 14.5" stroke="#4545F5" strokeWidth="1.5" />
				</svg>
			)}

			<TagsMenu onScroll={onScroll} ref={ref}>
				{children}
			</TagsMenu>
			<svg
				onClick={sliderRight}
				style={{ marginLeft: "15px" }}
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M5 1.5L11.5 8L5 14.5" stroke="#4545F5" strokeWidth="1.5" />
			</svg>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 32px;
	& > svg {
		cursor: pointer;
	}
`;

const TagsMenu = styled.div`
	width: 1080px;
	position: relative;
	overflow-x: auto;
	overscroll-behavior-inline: contain;
	scroll-snap-type: inline mandatory;
	scroll-behavior: smooth;
	& > div {
		display: -webkit-box;
		align-items: center;
	}
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
		opacity: 0;

		background: transparent;
		transition: 1s;
	}
	@media (max-width: 1100px) {
		width: 320px;
	}
`;
