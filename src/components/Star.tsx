import { type ComponentProps } from "react";

type StarProps = {
  isSelected?: boolean;
} & ComponentProps<"span">;

export default function Star({ isSelected, ...rest }: StarProps) {
  return (
    <span
      {...rest}
      className={`cursor-pointer text-3xl text-gray-300 ${
        isSelected && "text-yellow-500"
      }`}
    >
      &#9733;
    </span>
  );
}
