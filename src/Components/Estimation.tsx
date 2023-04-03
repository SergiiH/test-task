import React from "react";
import styled from "styled-components";
import { RangeSlider } from "./Range";

interface Props {
	rangeValues: number[];
	setRangeValues: React.Dispatch<React.SetStateAction<number[]>>;
	totalSum: string;
}

export const Estimation = ({ rangeValues, setRangeValues, totalSum }: Props) => {
	return (
		<EstimationWrapper>
			{rangeValues[0] === 20 || <WhiteSquare></WhiteSquare>}
			{rangeValues[0] === 1 ? (
				<>
					<UserCount>1 user</UserCount>
					<TotalMoney>{totalSum}/year</TotalMoney>
				</>
			) : rangeValues[0] <= 20 ? (
				<>
					<UserCountMore>{rangeValues[0]} users</UserCountMore>
					<FirstOutputValue>0</FirstOutputValue>
					<TotalMoneyMore>{totalSum}/year</TotalMoneyMore>
				</>
			) : (
				<>
					<UserCountMore style={{ left: "235px" }}>More than 20?</UserCountMore>
					<FirstOutputValue>0</FirstOutputValue>
					<GetACustomQuote href="#" style={{ left: "212px" }}>
						Get a Custom Quote
						<img src="images/arrow-right.svg" alt="arr" />
					</GetACustomQuote>
				</>
			)}
			<RangeSlider rangeValues={rangeValues} setRangeValues={setRangeValues} />
			<SecondOutputValue>
				<img src="images/infin.svg" alt="infin" />
			</SecondOutputValue>
		</EstimationWrapper>
	);
};

const EstimationWrapper = styled.div`
	padding-top: 38px;
	position: relative;
	@media (max-width: 1050px) {
		display: none;
	}
`;
const FirstOutputValue = styled.div`
	position: absolute;
	bottom: -22px;
	left: 2px;
	color: #b3b7c7;
	font-weight: 500;
`;
const SecondOutputValue = styled.div`
	position: absolute;
	bottom: -22px;
	right: 2px;
	color: #b3b7c7;
	font-weight: 500;
`;
const WhiteSquare = styled.div`
	height: 7px;
	width: 4px;
	position: absolute;
	top: 38px;
	left: 291px;
	background: #fff;
	z-index: 3;
`;
const UserCount = styled.div`
	font-weight: 500;
	font-size: 18px;
	line-height: 28px;
	color: #1d2452;
	position: absolute;
	top: -5px;
	left: -24px;
`;
const UserCountMore = styled.div`
	font-weight: 500;
	font-size: 18px;
	line-height: 28px;
	color: #1d2452;
	position: absolute;
	top: -5px;
	left: 254px;
`;
const TotalMoney = styled.div`
	position: absolute;
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	color: #1d2452;
	bottom: -44px;
	left: -35px;
`;
const TotalMoneyMore = styled.div`
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	color: #1d2452;
	position: absolute;
	bottom: -44px;
	left: 244px;
`;
const GetACustomQuote = styled.a`
	display: flex;
	align-items: center;
	color: #4545f5;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	position: absolute;
	bottom: -36px;
	left: 257px;
	cursor: pointer;
	& > img {
		transform: translateY(1px);
	}
`;
