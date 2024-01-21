import { CustomLink } from "@/components/custom/link";
import { cn } from "@/lib/utils";
import { List } from "@/types";
import React, { FC } from "react";

type Props = {
  list: List[];
  title: string;
  haveBorder?: boolean;
};
export const AccountList: FC<Props> = ({ list, title, haveBorder = false }) => {
  return (
    <div
      className={cn("px-4 py-2", {
        "border-l border-gray-200": haveBorder,
      })}
    >
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="text-sm capitalize">
            <CustomLink
              color="text-black"
              path={item.path}
              isUnderlined
              text={item.text}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
