import { useEffect, useRef, useState, ReactNode } from "react";
import styled from "styled-components";

export const ScrollTags = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState({
		isScrolling: false,
		clientX: 0,
		scrollX: 0,
	});

	const ref = useRef<any>();

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

	const onMouseDown = (e: any) => {
		if (ref && ref.current && !ref.current.contains(e.target)) {
			return;
		}
		e.preventDefault();

		setState({
			...state,
			isScrolling: true,
			clientX: e.clientX,
		});
	};

	const onMouseUp = (e: any) => {
		if (ref && ref.current && !ref.current.contains(e.target)) {
			return;
		}
		e.preventDefault();

		setState({
			...state,
			isScrolling: false,
		});
	};

	const onMouseMove = (e: any) => {
		if (ref && ref.current && !ref.current.contains(e.target)) {
			return;
		}
		e.preventDefault();

		const { clientX, scrollX, isScrolling } = state;

		if (isScrolling) {
			ref.current.scrollLeft = scrollX + e.clientX - clientX;
			let sX = scrollX + e.clientX - clientX;
			let cX = e.clientX;

			setState({
				...state,
				clientX: cX,
				scrollX: sX,
			});
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", onMouseDown);
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);

		return () => {
			document.removeEventListener("mousedown", onMouseDown);
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		};
	}, []);
	return (
		<Wrapper>
			<TagsMenu
				onMouseDown={(e) => onMouseDown(e)}
				onMouseUp={onMouseUp}
				onMouseMove={onMouseMove}
				ref={ref}
			>
				{children}
			</TagsMenu>
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
	@media (max-width: 800px) {
		width: 320px;
	}
`;
