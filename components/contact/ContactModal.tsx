import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
  VStack,
  Input,
  Textarea,
  Button,
  ModalFooter,
} from "@chakra-ui/react";

interface props {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ContactModal(props: props) {
  const { isOpen = false, onClose = () => {} } = props;
  return (
    <>
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
            <Button colorScheme={"messenger"} mr={3} onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
