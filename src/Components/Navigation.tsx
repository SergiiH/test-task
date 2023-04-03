import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Wrapper>
			<ButtonsWrapper>
				<EditBtn
					onClick={() => navigate("/")}
					className={location.pathname === "/" ? "active" : ""}
				>
					Go To Task 1
				</EditBtn>
				<DeleteBtn
					onClick={() => navigate("/task2")}
					className={location.pathname === "/task2" ? "active" : ""}
				>
					Go To Task 2
				</DeleteBtn>
			</ButtonsWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-top: 15px;
	display: flex;
	justify-content: center;
	z-index: 5;
	position: relative;
`;
const ButtonsWrapper = styled.div`
	display: flex;

	& > div {
		background: #f1f0f0;
		cursor: pointer;
		transition: 0.2s;
		font-weight: 600;
		&:hover {
			transition: 0.2s;
			background: #a5a3a3;
			color: #fff;
		}
		display: flex;
		align-items: center;
		& > img {
			margin-right: 8px;
		}
	}
	& > .active {
		color: #fff;
		transition: 0.2s;
		background: #a5a3a3;
	}
`;
const EditBtn = styled.div`
	padding: 16px 19px 16px 28px;

	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
`;
const DeleteBtn = styled.div`
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	padding: 16px 32px 16px 20px;
`;
