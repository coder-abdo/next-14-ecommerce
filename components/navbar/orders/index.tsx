import Link from "next/link";

export const Orders = () => {
  return (
    <div className="p-5 text-sm flex justify-center items-end text-white border border-black hover:cursor-pointer hover:border-white">
      <Link href="/orders">Orders</Link>
    </div>
  );
};
