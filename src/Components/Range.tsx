import React from "react";
import { Range, getTrackBackground } from "react-range";

interface Props {
	rangeValues: number[];
	setRangeValues: React.Dispatch<React.SetStateAction<number[]>>;
}

export const RangeSlider = ({ rangeValues, setRangeValues }: Props) => {
	const onChangeRangeValue = (value: number[]) => {
		if (value[0] > 20) {
			setRangeValues([40]);
		} else {
			setRangeValues(value);
		}
	};

	return (
		<div>
			<Range
				step={1}
				min={1}
				max={40}
				values={rangeValues}
				onChange={(values) => onChangeRangeValue(values)}
				renderTrack={({ props, children }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: "6px",
							width: "600px",
							backgroundColor: "#ccc",
							borderRadius: "40px",
							outline: "none",
							background: getTrackBackground({
								values: rangeValues,
								colors: ["#4545F5", "#DDDEE5"],
								min: 1,
								max: 40,
							}),
						}}
					>
						{children}
					</div>
				)}
				renderThumb={({ props }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: "20px",
							width: "20px",
							borderRadius: "50%",
							backgroundColor: "#4545F5",
							zIndex: "7",
							outline: "none",
						}}
					/>
				)}
			/>
		</div>
	);
};
