import { useState } from "react";
import styled, { css } from "styled-components";
import { IImage, IStory, ITag } from "../Models/IOption";
import { storiesArray, tagState } from "../Utils/mockData";
import { ScrollMenu } from "../Components/ScrollMenu";
import { ScrollTags } from "../Components/ScrollTags";

export const Task2 = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filterBy, setFilterBy] = useState("All");

	const onNextPage = () => {
		if (currentPage < Math.round(getArray().length / 2)) {
			setCurrentPage(currentPage + 1);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};
	const onPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const getArray = () => {
		if (filterBy === "All") {
			return storiesArray;
		}
		return storiesArray.filter((el) => {
			for (let i = 0; i < el.tags.length; i++) {
				if (el.tags[i].value === filterBy) {
					return el;
				}
			}
		});
	};

	const getPosts = () => {
		if (currentPage === 1) {
			return getArray().slice(0, 2);
		} else if (currentPage === 2) {
			return getArray().slice(2, 4);
		} else {
			return getArray().slice(4, 6);
		}
	};

	const possiblePages = Math.round(getArray().length / 2);

	return (
		<Wrapper>
			<ScrollMenu>
				<div>
					{tagState.map((el, i) => (
						<TagsMenuItem
							onClick={() => {
								setFilterBy(el);
								setCurrentPage(1);
							}}
							className={el === filterBy ? "active" : ""}
							key={i}
						>
							{el}
						</TagsMenuItem>
					))}
				</div>
			</ScrollMenu>
			<Stories>
				{getPosts().map((el: IStory) => (
					<Story key={el.id}>
						<StoryImage background={el.image.background} />
						<StoryContent>
							<ScrollTags>
								<div style={{ display: "flex", width: "max-content" }}>
									{el.tags.map((el, i) => (
										<StoryTag
											onClick={() => setFilterBy(el.value)}
											key={i}
											hoverBg={el.hoverBg}
											background={el.background}
											color={el.color}
										>
											{el.value}
										</StoryTag>
									))}
									<StoryReadTime>{el.readTime} min read</StoryReadTime>
								</div>
							</ScrollTags>
							<StoryTitle>{el.title}</StoryTitle>
							<StoryBottom>
								<StoryAuthor>
									<StoryAuthorImage background={el.author.authorImage} />
									<StoryAbout>
										<StoryName>Name</StoryName>
										<StoryAuthorTitle>Title</StoryAuthorTitle>
									</StoryAbout>
								</StoryAuthor>
								<StoryRead href="#">
									Read story
									<img src="images/ar-story.svg" alt="arr" />
								</StoryRead>
							</StoryBottom>
						</StoryContent>
					</Story>
				))}
			</Stories>
			{possiblePages !== 0 && (
				<PostsSwitcher>
					<svg
						onClick={onPrevPage}
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						cursor={currentPage === 1 ? "auto" : "pointer"}
						opacity={currentPage === 1 ? "0.5" : "1"}
					>
						<g>
							<path d="M22 29L9 16L22 3" stroke="" strokeWidth="3" />
						</g>
					</svg>
					<CurrentPosts>
						{currentPage} of {possiblePages}
					</CurrentPosts>
					<svg
						onClick={onNextPage}
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						cursor={currentPage === possiblePages ? "auto" : "pointer"}
						opacity={currentPage === possiblePages ? "0.5" : "1"}
					>
						<path d="M10 3L23 16L10 29" stroke="" strokeWidth="3" />
					</svg>
				</PostsSwitcher>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 1080px;
	margin: 60px auto 0;
	@media (max-width: 1100px) {
		max-width: 340px;
		margin: 40px auto 0;
	}
`;

const Stories = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 1100px) {
		flex-direction: column;
	}
`;
const Story = styled.div`
	padding: 1px;
	border: 1.5px solid #eef0f6;
	border-radius: 8px;
	background: #fff;
	max-width: 528px;
	width: 100%;
	height: 513px;
	@media (max-width: 1100px) {
		margin-bottom: 32px;
	}
`;
const StoryImage = styled.div<IImage>`
	height: 244px;
	background: ${({ background }) => background};
	border-radius: 7px 7px 0px 0px;
`;
const StoryContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 32px;
	height: 260px;
	@media (max-width: 1100px) {
		padding: 20px;
	}
`;
const StoryTag = styled.div<ITag>`
	padding: 4px 12px;
	background: ${({ background }) => background};
	color: ${({ color }) => color};
	font-weight: 500;
	display: inline-block;
	border-radius: 20px;
	margin-right: 4px;
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		transition: 0.2s;
		background: ${({ hoverBg }) => hoverBg};
	}
`;
const StoryReadTime = styled.div`
	color: #b3b7c7;
	font-weight: 500;
	display: inline-block;
`;
const StoryTitle = styled.div`
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	color: #1d2452;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;
const StoryBottom = styled.div`
	display: flex;
	margin-top: auto;
	align-items: end;
	justify-content: space-between;
`;
const StoryAuthor = styled.div`
	display: flex;
`;
const StoryAuthorImage = styled.div<IImage>`
	background: ${({ background }) => background};
	width: 56px;
	height: 56px;
	border-radius: 50%;
	margin-right: 12px;
`;
const StoryAbout = styled.div`
	padding: 4px 0;
`;
const StoryName = styled.div`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #1d2452;
	margin-bottom: 4px;
`;
const StoryAuthorTitle = styled.div`
	font-weight: 500;
	color: #676f8f;
`;
const StoryRead = styled.a`
	& > img {
		margin-left: 4px;
		margin-top: 2.5px;
	}
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	color: #4545f5;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const PostsSwitcher = styled.div<any>`
	margin: 40px auto 60px;
	width: 332px;
	display: flex;
	justify-content: center;
	align-items: center;
	& > svg {
		path {
			stroke: #4545f5;
			${({ isDisabled }) => {
				if (isDisabled) {
					return css`
						opacity: 0.6;
					`;
				}
			}}
		}
	}
	@media (max-width: 1100px) {
		width: 320px;
	}
`;
const CurrentPosts = styled.div`
	margin: 6px 116px;
	min-width: 40px;
	color: #b3b7c7;
	font-weight: 500;
	user-select: none;
`;
const TagsMenuItem = styled.div`
	padding: 0 24px;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #676f8f;
	width: auto;
	cursor: pointer;
	&.active {
		color: #4545f5;
	}
	&:first-child {
		padding-left: 0px;
		border-right: 2px solid #d9dbe3;
	}
	&:nth-child(3) {
		border-right: 2px solid #d9dbe3;
	}
	&:last-child {
		padding-right: 0px;
	}
	@media (max-width: 1100px) {
		padding: 0 14px;
	}
`;
