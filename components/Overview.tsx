import {
  Text,
  Heading,
  Box,
  HStack,
  VStack,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";

interface OverviewProps {}

export default function Overview(props: OverviewProps) {
  return (
    <>
      <Box marginTop="70px" marginBottom="70px">
        <HStack>
          <VStack align="left">
            <Heading size="3xl" marginTop="3%">
              Bennett Desmond
            </Heading>
            <Text width="70%">
              I am a software engineer with a fascination for cutting edge
              technology. I have a background in full stack, front end, mobile,
              and more.
            </Text>
          </VStack>
          <Image
            borderRadius={35}
            boxSize="500px"
            objectFit="cover"
            src="../BennettDesmondProfile.png"
            alt="Bennett Desmond Profile Photo"
          />
        </HStack>
      </Box>
    </>
  );
}
