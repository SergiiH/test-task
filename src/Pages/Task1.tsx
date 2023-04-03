import { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { CustomSelect } from "../Components/Select";
import { currencies, numberArray, plans } from "../Utils/mockData";
import { IOption } from "../Models/IOption";
import { LabelOption } from "../Components/LabelOption";
import { Estimation } from "../Components/Estimation";

export const Task1 = () => {
	const [currentCurrency, setCurrentCurrency] = useState({
		name: "USD",
		value: 35,
		currency: "$",
	});
	const [rangeValues, setRangeValues] = useState([1]);

	const totalSum = useMemo(() => {
		return currentCurrency.currency + 12 * currentCurrency.value * rangeValues[0];
	}, [currentCurrency, rangeValues]);

	const selectOptions: IOption[] = useMemo(() => {
		return numberArray.map((el) => {
			return {
				value: el,
				label: (
					<LabelOption
						userCount={`${el} ${el === 1 ? "user" : "users"}`}
						totalSum={`${currentCurrency.currency}${el * 12 * currentCurrency.value}/year`}
					/>
				),
			};
		});
	}, [numberArray, currentCurrency, rangeValues]);

	return (
		<Wrapper>
			<InvestmentContainer>
				<InvestmentTop>
					<h3>Estimate your investment</h3>
					<div>
						<SelectCurrency>
							{currencies.map((el, i) => (
								<div
									key={i}
									className={currentCurrency.name === el.name ? "active" : ""}
									onClick={() => setCurrentCurrency(el)}
								>
									{el.name}
								</div>
							))}
						</SelectCurrency>

						<Estimation
							totalSum={totalSum}
							setRangeValues={setRangeValues}
							rangeValues={rangeValues}
						/>

						<SelectUsers>
							<SelectUsersTitle>How many users?</SelectUsersTitle>
							<CustomSelect
								value={rangeValues[0]}
								onChange={setRangeValues}
								options={selectOptions}
							/>
						</SelectUsers>
					</div>
				</InvestmentTop>
				<InvestmentContent>
					<InvestmentPlans>
						<InvestmentPlansTitle>All plans include:</InvestmentPlansTitle>
						<ul>
							{plans.map((el, i) => (
								<li key={i}>
									<img src="images/check.svg" alt="check" />
									{el.value}
								</li>
							))}
						</ul>
						<InvestmentPlansAll href="#">
							See all features
							<img src="images/arrow-right.svg" alt="arr" />
						</InvestmentPlansAll>
					</InvestmentPlans>
					<InvestmentPrices>
						<InvestmentPrice isActive={Number(rangeValues) > 20}>
							<InvestmentPriceTitle>For smaller teams</InvestmentPriceTitle>
							<InvestmentPriceDesc>with ≤20 users</InvestmentPriceDesc>
							<InvestmentPriceNumber>
								{currentCurrency.currency + currentCurrency.value}
							</InvestmentPriceNumber>
							<InvestmentPriceText>
								per user per month <br /> billed annually
							</InvestmentPriceText>
							<InvestmentPriceBtn href="#">Get Started</InvestmentPriceBtn>
							<img src="images/price-1.png" />
						</InvestmentPrice>

						<InvestmentPrice isActive={Number(rangeValues) <= 20}>
							<InvestmentPriceTitle>For larger teams</InvestmentPriceTitle>
							<InvestmentPriceDesc>with {">"}20 users</InvestmentPriceDesc>
							<InvestmentPricePricing>Individually tailored pricing</InvestmentPricePricing>
							<InvestmentPriceText>billed annually</InvestmentPriceText>
							<InvestmentPriceBtn href="#">Get a Custom Quote</InvestmentPriceBtn>
							<img src="images/price-2.png" />
						</InvestmentPrice>
					</InvestmentPrices>
				</InvestmentContent>
			</InvestmentContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: #f7f9fc;
	position: relative;
	min-height: 100vh;
	padding: 120px 10px;
	overflow: hidden;
	z-index: 0;
	margin-top: -65px;
	&::after {
		content: "";
		z-index: -1;
		width: 2000px;
		height: 2000px;
		top: 0px;
		left: 0px;
		opacity: 0.8;
		position: absolute;
		background-image: url("images/bg-lines.png");
	}
	@media (max-width: 1050px) {
		padding: 100px 10px;
		&::after {
			display: none;
		}
	}
`;
const InvestmentContainer = styled.div`
	max-width: 1160px;
	background: #fff;
	margin: 0 auto;
	padding: 40px;
	z-index: 1;
	@media (max-width: 1050px) {
		max-width: 320px;
		padding: 20px;
	}
`;
const InvestmentTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 100px;
	& > h3 {
		max-width: 271px;
		font-size: 32px;
		line-height: 40px;
		color: #1d2452;
	}
	@media (max-width: 1050px) {
		display: block;
		text-align: center;
		margin-bottom: 40px;
		& > h3 {
			margin-bottom: 24px;
			margin-right: 0px;
		}
	}
`;
const SelectCurrency = styled.div`
	display: flex;
	justify-content: right;
	margin-bottom: 8px;
	& .active {
		color: #4545f5;
	}
	& > div {
		padding-left: 8px;
		color: #676f8f;
		font-weight: 500;
		cursor: pointer;
		transition: 0.2s;

		&:hover {
			transition: 0.2s;
		}
		&:not(:last-child) {
			padding-right: 8px;
			border-right: 2px solid #dddee5;
		}
	}
	@media (max-width: 1050px) {
		justify-content: center;
		margin-left: -15px;
	}
`;

const InvestmentContent = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 1050px) {
		flex-direction: column-reverse;
	}
`;
const InvestmentPlans = styled.div`
	padding-top: 32px;
	margin-right: 10px;

	& > ul {
		& > li {
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			color: #676f8f;
			display: flex;
			align-items: center;
			margin-bottom: 12px;
			& > img {
				margin-right: 8px;
			}
		}
	}
`;
const InvestmentPlansTitle = styled.div`
	font-size: 22px;
	line-height: 32px;
	margin-bottom: 24px;
	color: #1d2452;
	font-weight: 600;
`;
const InvestmentPlansAll = styled.a`
	display: flex;
	align-items: center;
	color: #4545f5;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	cursor: pointer;
	margin-top: 24px;
	& > img {
		transform: translateY(1px);
	}
`;
const InvestmentPrices = styled.div`
	display: flex;
	@media (max-width: 1050px) {
		flex-direction: column;
	}
`;
const InvestmentPrice = styled.div<any>`
	padding: 32px;
	text-align: center;
	background: #f7f9fc;
	border-radius: 8px;
	width: 310px;
	position: relative;
	transition: 0.2s;
	${(props) => {
		if (props.isActive) {
			return css`
				background: #fff;
				&::after {
					transition: 0.2s;
					content: "";
					z-index: 2;
					top: 0px;
					left: 0px;
					right: 0px;
					bottom: 0px;
					position: absolute;
					background: #fff;
					opacity: 0.7;
				}
			`;
		}
	}}
	@media (max-width: 1050px) {
		width: 280px;
		margin-bottom: 20px;
		&::after {
			display: none;
		}
		${(props) => {
			if (props.isActive) {
				return css`
					background: #f7f9fc;
				`;
			}
		}}
	}
`;
const InvestmentPriceTitle = styled.div`
	margin-bottom: 4px;
	font-weight: 600;
	font-size: 22px;
	line-height: 32px;
	color: #1d2452;
`;
const InvestmentPriceDesc = styled.div`
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	color: #676f8f;
	margin-bottom: 24px;
`;
const InvestmentPriceNumber = styled.h3`
	font-size: 52px;
	line-height: 56px;
	color: #1d2452;
	margin-bottom: 12px;
`;
const InvestmentPricePricing = styled.h3`
	font-size: 30px;
	line-height: 40px;
	color: #1d2452;
	margin-bottom: 12px;
`;
const InvestmentPriceText = styled.div`
	font-size: 16px;
	line-height: 24px;
	color: ##676f8f;
	margin-bottom: 40px;
`;
const InvestmentPriceBtn = styled.a`
	padding: 8px 36px 8px 20px;
	background: #4545f5;
	border-radius: 20px;
	color: #fff;
	position: relative;
	margin-bottom: 34px;
	display: inline-block;
	cursor: pointer;
	&::after {
		position: absolute;
		top: 11px;
		right: 16px;
		width: 16px;
		height: 16px;
		content: "";
		background-image: url("images/arrow-right-w.svg");
	}
`;

const SelectUsers = styled.div`
	max-width: 280px;
	margin: 30px auto 0px;
	display: none;
	@media (max-width: 1050px) {
		display: block;
	}
`;
const SelectUsersTitle = styled.div`
	font-weight: 500;
	color: #676f8f;
	margin-bottom: 12px;
`;
