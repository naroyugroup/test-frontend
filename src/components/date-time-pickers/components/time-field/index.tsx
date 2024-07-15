import { cn } from "@/lib/utils";
import type React from "react";
import { useRef } from "react";
import {
	type AriaTimeFieldProps,
	type TimeValue,
	useLocale,
	useTimeField,
} from "react-aria";
import { useTimeFieldState } from "react-stately";
import { DateSegment } from "../data-segment";

const TimeField: React.FC<AriaTimeFieldProps<TimeValue>> = (props) => {
	const ref = useRef<HTMLDivElement | null>(null);

	const { locale } = useLocale();
	const state = useTimeFieldState({
		...props,
		locale,
	});
	const {
		fieldProps: { ...fieldProps },
	} = useTimeField(props, state, ref);

	return (
		<div
			{...fieldProps}
			ref={ref}
			className={cn(
				"inline-flex h-10 w-full flex-1 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				props.isDisabled ? "cursor-not-allowed opacity-50" : "",
			)}
		>
			{state.segments.map((segment, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<DateSegment key={i} segment={segment} state={state} />
			))}
		</div>
	);
};

export { TimeField };
