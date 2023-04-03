import Select, { SingleValue } from "react-select";
import styled from "styled-components";
import { IOption } from "../Models/IOption";

export interface SelectProps {
	options: IOption[];
	value: number | string;
	onChange: React.Dispatch<React.SetStateAction<number[]>>;
}

const MenuList = (props: any) => {
	return (
		<>
			<MenuListWrapper style={{ height: "200px" }} {...props}>
				<div>{props.children}</div>
				<CustomBottomOfSelect>
					<p>More than 20 users?</p>
					<CustomSelectBtn href="#" style={{ left: "212px" }}>
						Get a Custom Quote
						<img src="images/arrow-right.svg" alt="arr" />
					</CustomSelectBtn>
				</CustomBottomOfSelect>
			</MenuListWrapper>
		</>
	);
};

export const CustomSelect = ({ options, onChange, value, ...other }: SelectProps) => {
	const onChangeValue = (newValue: SingleValue<IOption>) => {
		if (newValue) {
			onChange([newValue.value]);
		}
	};

	const getElement = () => {
		return options.find((el: IOption) => el.value === value);
	};

	return (
		<Label>
			<Wrapper>
				<Select
					classNamePrefix="custom-select"
					isSearchable
					value={getElement()}
					onChange={onChangeValue}
					options={options}
					components={{
						MenuList: (props) => <MenuList onClick={() => console.log("bebe")} {...props} />,
					}}
					{...other}
				/>
			</Wrapper>
		</Label>
	);
};

const Wrapper = styled.div`
  & .custom-select {
    &__control {
      padding: 0px 10px 0px 8px !important;
      height: 47px !important;
      background-color: #fff !important;
      border-radius: 8px !important;
      border: 1px solid #dddee5 !important;
      color: #000 !important;
      outline: none !important;
      box-shadow: none;
      &--is-focused {
        border: 2px solid #a2a2fa !important;
      }
      &--menu-is-open {
        .custom-select__indicator {
            transform: rotate(180deg);
            transition: 0.2s;
            & > svg {
                fill : #4545F5;
                transition: 0.2s;
            }
        }
      }
    }
    &__single-value {
      text-align: left;
    }
    &__indicator  {
        transition: 0.2s;
        & > svg {
            transition: 0.2s;
        }
    }

    &__indicator-separator {
      display: none;
    }
    &__value-container {
      cursor: text;
    }
    &__indicators {
      cursor: pointer;
    }
    &__menu {
      border-radius: 12px;
      border: none;
      padding: 0px;
      box-shadow: 0px 8px 41px rgba(0, 0, 0, 0.1);
    }
    &__option {
      text-align: left;
      color: #000;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      cursor: pointer;
      padding: 12px 16px;
      position: relative;
      &--is-focused {
        background: #edeef3;
        color: #4545f5;
      }
      &--is-selected {
        background: #edeef3;
        & > div {
          & > div {
            color: #4545f5;
          }
        }
      }
    }
    &__single-value {
      color: #000;
      position: relative;
      &::before {
        position: absolute;
        content 'dsffs'
        top: 10px;
        right: 10px;
        width: 10px;
        height: 10px
      }
    }
  }
`;

const Label = styled.label`
	width: 100%;
`;

const CustomSelectBtn = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #4545f5;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	cursor: pointer;

	& > img {
		transform: translateY(1px);
	}
`;
const CustomBottomOfSelect = styled.div`
	padding: 16px;
	text-align: center;
	background: #edeef3;
	& > p {
		margin-bottom: 4px;
		color: #676f8f;
		font-weight: 500;
	}
`;
const MenuListWrapper = styled.div`
	max-height: 200px;
	overflow: auto;
`;
