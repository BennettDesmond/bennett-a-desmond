import {
  Text,
  Heading,
  Box,
  HStack,
  VStack,
  Flex,
  Link,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";

interface OverviewProps {}

export default function Overview(props: OverviewProps) {
  return (
    <>
      <Box marginTop="70px" marginBottom="70px">
        <Flex direction={{ base: "column", md: "row" }}>
          <VStack mr={{ md: "10%" }}>
            <Heading size="3xl" marginTop="3%">
              Bennett Desmond
            </Heading>
            <Text
              display={{ base: "none", md: "contents" }}
              width="70%"
              maxW="sm"
            >
              I am a software engineer with a fascination for cutting edge
              technology. I have a background in full stack, front end, mobile,
              and more.
            </Text>
          </VStack>
          <Image
            borderRadius={35}
            boxSize={{ base: "100%", md: "50%" }}
            objectFit="cover"
            src="../BennettDesmondProfile.png"
            alt="Bennett Desmond Profile Photo"
            mt={{ base: "5%", md: "0px" }}
          />
        </Flex>
      </Box>
    </>
  );
}
