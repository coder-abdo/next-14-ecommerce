import { List } from "@/types";

const categories = [
  "all categories",
  "amazon devices",
  "amazon fashion",
  "amazon warehouse",
  "arts, crafts & sewing",
  "automative parts & accessories",
  "baby",
  "beauty & personal care",
  "books",
  "electronics",
  "grocery & gourmet food",
  "health, household & baby care",
  "home & garden",
  "sports",
] as const;
const yourAccountList: List[] = [
  { text: "your account", path: "/account" },
  { text: "your orders", path: "/orders" },
  { text: "your addresses", path: "/addresses" },
  { text: "your lists", path: "/lists" },
  { text: "your recommendations", path: "/recommendations" },
  { text: "your prime membership", path: "/prime-membership" },
  { text: "your seller account", path: "/seller-account" },
] as const;
const secondaryNavLinks: List[] = [
  { text: "today's deals", path: "/todays-deals" },
  { text: "mobile phones", path: "/mobile-phones" },
  { text: "prime", path: "/prime" },
  { text: "electronics", path: "/electronics" },
  { text: "appliances", path: "/appliances" },
  { text: "fashion", path: "/fashion" },
  { text: "home", path: "/" },
  { text: "video games", path: "/video-games" },
  { text: "grocery", path: "/grocery" },
  { text: "toys & games", path: "/toys-games" },
];
const yourLists: List[] = [{ text: "create a list", path: "/lists" }] as const;
export { categories, yourAccountList, yourLists, secondaryNavLinks };
