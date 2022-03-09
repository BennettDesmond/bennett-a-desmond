import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
  Text,
  OrderedList,
  ListItem,
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
          bg="primary.white"
          borderRadius="20"
          shadow="dark-lg"
        >
          <ModalHeader>
            <Center fontSize="3xl" fontWeight="bold">
              Contact Me
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} mx="15px"></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
