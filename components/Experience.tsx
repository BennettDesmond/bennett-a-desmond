import {
  Heading,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  Box,
  Badge,
  Text,
} from "@chakra-ui/react";

interface ExperienceProps {}

export default function Experience(props: ExperienceProps) {
  return (
    <>
      <Heading id="experience">Experience Section</Heading>
      <Tabs
        w="1000px"
        orientation="vertical"
        variant="soft-rounded"
        colorScheme="green"
      >
        <TabList>
          <Tab w="300px">Apex Fintech Solutions</Tab>
          <Tab>Multnomah County</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              <Heading size="md">
                Front End Software Intern @ Apex Fintech Solutions
              </Heading>
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                January 2022 - Present &bull; Current
              </Box>
              <Text>
                This internship is focused on developing the frontend of fintech
                applications. I use TypeScript, React, and Chakra UI to develop
                responsive, aesthetic interfaces. My team works closely with the
                backend team to develop and deliver powerful tools on schedule.
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
