import { PiShoppingCartSimpleBold } from "react-icons/pi";

export const CartIcon = () => {
  return (
    <div className="relative text-white">
      <PiShoppingCartSimpleBold className="text-4xl" />
      <span className="absolute -top-4 left-3 text-lg">0</span>
    </div>
  );
};
