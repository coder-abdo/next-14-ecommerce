import { AiOutlineCaretDown } from "react-icons/ai";
import { SignInBtnComp } from "@/components/navbar/signIn/signBtn";
import { AccountList } from "./yourAccount";
import { yourAccountList, yourLists } from "@/utils";

export const Sign = () => {
  return (
    <div className="relative text-white group">
      <h4 className="flex flex-col hover:border hover:border-white hover:cursor-pointer p-1 capitalize">
        <span className="text-xs">Hello, sign in</span>
        <span className="flex gap-1 text-sm">
          accounts &amp; lists
          <AiOutlineCaretDown className="self-end" />
        </span>
      </h4>
      <div className="absolute border border-gray-200 hidden hover:block group-hover:block min-w-[460px] top-[125%] right-5 w-full shadow-sm bg-white p-2">
        <SignInBtnComp />
        <div className="flex justify-between p-4">
          <AccountList title="Your lists" list={yourLists} />
          <AccountList
            title="Your accounts"
            list={yourAccountList}
            haveBorder
          />
        </div>
      </div>
    </div>
  );
};
