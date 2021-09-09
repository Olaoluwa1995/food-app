import { FaHome, FaUserPlus } from "react-icons/fa";

type LinkProps = {
  key: number;
  title: string;
  url: string;
  as?: any;
};

export const headerLinksData: LinkProps[] = [
  {
    key: 1,
    title: "Home",
    url: "/",
    as: FaHome,
  },
  {
    key: 2,
    title: "Sign Up",
    url: "/sign-up",
    as: FaUserPlus,
  },
];
