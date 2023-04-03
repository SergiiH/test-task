import styled from "styled-components";

export interface OptionProps {
	userCount: string;
	totalSum: string;
}

export const LabelOption = ({ userCount, totalSum }: OptionProps) => {
	return (
		<LabelOptionWrapper>
			<LabelUsers>{userCount}</LabelUsers>
			<LabelSum>{totalSum}</LabelSum>
		</LabelOptionWrapper>
	);
};

const LabelUsers = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #1d2452;
	margin-right: 40px;
`;
const LabelSum = styled.div`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #1d2452;
`;
const LabelOptionWrapper = styled.div`
	display: flex;
	align-items: center;
`;
