import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import NavLink from "./NavLink";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

interface NavBarProps {}

const Links = ["About", "Experience", "Projects", "Contact"];

export default function NavBar(props: NavBarProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              boxSize="70px"
              objectFit="cover"
              src={
                colorMode === "light"
                  ? "../Bennett_Logo_BLACK.svg"
                  : "../Bennett_Logo_WHITE.svg"
              }
              alt="Bennett Desmond Logo"
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link}
                  linkText={link}
                  link={link.toLowerCase()}
                ></NavLink>
              ))}
            </HStack>
          </HStack>
          <HStack>
            <Link
              isExternal={true}
              href="https://www.linkedin.com/in/bennettdesmond/"
            >
              <Button colorScheme={"messenger"}>
                <SiLinkedin />
              </Button>
            </Link>
            <Link isExternal={true} href="https://github.com/BennettDesmond">
              <Button colorScheme={"messenger"}>
                <SiGithub />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  linkText={link}
                  link={link.toLowerCase()}
                ></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
