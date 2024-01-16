import Link from "next/link";
export const Logo = () => {
  return (
    <Link
      href="/"
      className="w-[132px] h-[50px] pr-4 rounded overflow-hidden hover:border border-white flex items-center"
    >
      <img src="./amazon.jpg" alt="amazon logo" />
      <span className="text-sm text-white -ml-3 font-bold">.eg</span>
    </Link>
  );
};
