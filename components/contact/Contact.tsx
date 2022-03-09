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
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Center,
  Input,
  Textarea,
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
      <Box>
        <VStack spacing="10">
          <Heading color="#FD5701">Get In Touch</Heading>
          <HStack>
            <Text w="50%" align="center" color="grey">
              I am currently looking for a software engineering position. Please
              reach out if you are interested in hiring me. I also love to
              connect with innovators across industries. Feel free to shoot me a
              message about anything tech related and I would be happy to chat.
              I am pretty active on LinkedIn. This is the best way to stay
              connected.
            </Text>
            {/* <Divider orientation="vertical" width="10%" /> */}
            <Spacer w="50px" />
            <VStack direction="column" w="50%" align="center">
              <Spacer />
              <HStack>
                <EmailIcon marginRight="15px" />
                <Heading color="grey" size="md">
                  Bennett.a.desmond@gmail.com
                </Heading>
              </HStack>
              <Spacer />
              <Flex direction="row" align="center">
                <InfoOutlineIcon marginRight="15px" />
                <Heading color="grey" size="md">
                  Portland, Oregon
                </Heading>
              </Flex>
              <Spacer />
            </VStack>
          </HStack>
          <HStack>
            <Button bg="#FD5701" marginRight="10px" onClick={onOpen}>
              Contact Me
            </Button>
            {/* <ContactModal>
              isOpen={isOpen()}
              onClose={onClose()}
            </ContactModal> */}
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              scrollBehavior="inside"
              size="lg"
            >
              <ModalContent
                h="360px"
                w={{ base: "350px", md: "500px", lg: "650px" }}
                mt="105px"
                borderRadius="20"
                shadow="dark-lg"
                bg="white"
              >
                <ModalHeader>
                  <Center fontSize="3xl" fontWeight="bold">
                    Contact Me
                  </Center>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6} mx="15px">
                  <VStack spacing="4">
                    <Input borderRadius={10} placeholder="Full Name" />
                    <Input borderRadius={10} placeholder="Email Address" />
                    <Textarea borderRadius={10} placeholder="Message" />
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button bg="#FD5701" mr={3} onClick={onClose}>
                    Submit
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Link
              isExternal={true}
              href="https://www.linkedin.com/in/bennettdesmond/"
            >
              <Button bg="#FD5701" marginLeft="10px">
                LinkedIn
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
