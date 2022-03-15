import { Link, useColorModeValue } from "@chakra-ui/react";

interface NavLinkProps {
  linkText: string;
  link: string;
}

export default function NavLink(props: NavLinkProps) {
  const { linkText, link } = props;
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#" + link}
      fontWeight="semibold"
    >
      {linkText}
    </Link>
  );
}
