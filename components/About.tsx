import {
  Text,
  Heading,
  Box,
  VStack,
  Link,
  Button,
  Center,
} from "@chakra-ui/react";

interface AboutProps {}

export default function About(props: AboutProps) {
  return (
    <>
      <Box marginTop="50px" borderRadius="35px" bg="gray.100" height="600px">
        <VStack
          marginX="10%"
          marginY="10%"
          color="white"
          align="center"
          spacing={4}
        >
          <Heading color="black">My Journey</Heading>
          <Text color="black">
            I am a Senior at Portland State University, where I am pursuing a
            degree in Computer Science. I am on target to graduate in June. I
            started my coding journey in my early teens. My first language I
            learned was Pearl. During high school, I was fascinated with app
            development. I learned Swift in order to program iOS applications.
            Throughout my schooling, I have had the pleasure of working with
            numerous languages and tools. I am a confident C, C#, C++, Java
            programmer. I have also had the pleasure of doing two six month
            internships. The first internship was at Multnomah County and I
            worked as a software quality assurance developer. I was in charge of
            developing their regressions system for a new website developed
            using Blazor. My second internship is at Apex Fintech Solutions. I
            work on the front end team as a front end software developer. My
            goal is to bring all of my skills together into a full stack
            software engineering position. In my spare time, you can find me
            spending time with friends, following new trends in tech, and
            staying active.
          </Text>
          <Link isExternal={true} href="">
            <Button colorScheme={"messenger"} marginLeft="10px">
              Download Resume
            </Button>
          </Link>
        </VStack>
      </Box>
    </>
  );
}
