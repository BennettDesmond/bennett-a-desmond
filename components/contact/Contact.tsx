import {
  Text,
  Heading,
  Button,
  Flex,
  Box,
  Spacer,
  Divider,
  Link,
  VStack,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import ContactModal from "./ContactModal";
import { useEffect, useState } from "react";

interface ContactProps {}

export default function Contact(props: ContactProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const {
  //   isOpen: contactIsOpen = false,
  //   onOpen: contactOnOpen,
  //   onClose: contactOnClose,
  // } = useDisclosure();
  return (
    <>
      <Box id="contact">
        <VStack spacing="10">
          <Heading>Contact</Heading>
          <Flex direction={{ base: "column", lg: "row" }}>
            <Text w={{ md: "100%", lg: "50%" }} align="center">
              I am currently looking for a software engineering position. Please
              reach out if you are interested in hiring me. I also love to
              connect with innovators across industries. Feel free to shoot me a
              message about anything tech related and I would be happy to chat.
              I am pretty active on LinkedIn. This is the best way to stay
              connected.
            </Text>
            {/* <Divider orientation="vertical" width="10%" /> */}
            <Spacer w="50px" />
            <VStack
              direction="column"
              w={{ md: "100%", lg: "50%" }}
              align="center"
              mt={{ base: "5%", lg: "0%" }}
            >
              <Spacer />
              <HStack>
                <EmailIcon marginRight="15px" />
                <Heading size="md">Bennett.a.desmond@gmail.com</Heading>
              </HStack>
              <Spacer />
              <Flex direction="row" align="center">
                <InfoOutlineIcon marginRight="15px" />
                <Heading size="md">Portland, Oregon</Heading>
              </Flex>
              <Spacer />
            </VStack>
          </Flex>
          <HStack>
            <Box mr="10%">
              <Button
                colorScheme={"messenger"}
                // marginRight="10px"
                onClick={onOpen}
              >
                Contact Me
              </Button>
            </Box>
            <ContactModal isOpen={isOpen} onClose={onClose} />
            <Box>
              <Link
                isExternal={true}
                href="https://www.linkedin.com/in/bennettdesmond/"
              >
                <Button colorScheme={"messenger"}>LinkedIn</Button>
              </Link>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
