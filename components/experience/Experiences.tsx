import Experience from "./Experience";
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

interface ExperiencesProps {}

export default function Experiences(props: ExperiencesProps) {
  return (
    <>
      <Heading id="experience">Experience Section</Heading>
      <Tabs
        w={{ lg: "1000px" }}
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
            <Experience
              jobTitle={"Front End Software Intern"}
              company={"Apex Fintech Solutions"}
              technologies={[
                ["TS", "teal"],
                ["JS", "yellow"],
                ["Chakra UI", "green"],
                ["Next JS", "red"],
              ]}
              startDate={"January 2022"}
              endDate={"Present"}
              lengthOfStay={"Current"}
              description={
                "This internship is focused on developing the frontend of fintech applications. I use TypeScript, React, and Chakra UI to develop responsive, aesthetic interfaces. My team works closely with the backend team to develop and deliver powerful tools on schedule."
              }
            />
          </TabPanel>
          <TabPanel>
            <Experience
              jobTitle={"Software Quality Assurance Intern"}
              company={"Multnomah County"}
              technologies={[
                ["C#", "green"],
                ["Selenium", "red"],
                ["Azure Devops", "yellow"],
              ]}
              startDate={"July 2021"}
              endDate={"December 2021"}
              lengthOfStay={"1 yr 1 mo"}
              description={
                "This six-month internship has taught me how to contribute effectively to a software team. I was in charge of developing and maintaining the automated test suite for a major county software project. I learned to write quality tests, manage projects, and deliver under a tight schedule."
              }
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
