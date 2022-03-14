import {
  Image,
  Container,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterProps {}

export default function Footer(props: FooterProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
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
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/bennettdesmond/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://github.com/BennettDesmond"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Bennett Desmond
          </Text>
        </Stack>
      </Container>
    </>
  );
}
