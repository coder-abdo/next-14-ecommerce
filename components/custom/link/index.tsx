import Link from "next/link";
import type { FC } from "react";
import { cn } from "@/lib/utils";
type Props = {
  text: string;
  path: string;
  color?: string;
  isUnderlined: boolean;
};
export const CustomLink: FC<Props> = ({
  text = "start here",
  path,
  color = "text-blue-600",
  isUnderlined = false,
}) => {
  return (
    <Link
      href={path}
      className={cn("text-blue-600 hover:text-amber-600", {
        "hover:underline": isUnderlined,
        "text-black": color === "text-black",
      })}
    >
      {text}.
    </Link>
  );
};
