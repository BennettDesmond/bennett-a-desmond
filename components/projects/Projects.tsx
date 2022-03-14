import { Text, Heading, HStack, Flex, Grid, GridItem } from "@chakra-ui/react";
import Project from "./Project";

interface ProjectsProps {}

const property = {
  imageUrl: "../BennettDesmondProfile.png",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Reinforcement Learning Cleaning Algorithm",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

export default function Projects(props: ProjectsProps) {
  return (
    <>
      <Heading id="projects">Projects</Heading>
      <Grid
        gap="5"
        // templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        <GridItem>
          <Project
            imageUrl={"../fillerImage.jpg"}
            imageAlt={"Replace Photo"}
            technologies={[
              ["TS", "teal"],
              ["JS", "yellow"],
              ["Chakra UI", "green"],
              ["Next JS", "red"],
            ]}
            title={"This Website"}
            projectSummary={
              "I built this website from scratch using a modern tech stack that included Next JS and Chakra UI."
            }
            gitHubRepo={"https://github.com/BennettDesmond/bennett-a-desmond"}
          />
        </GridItem>
        <GridItem>
          <Project
            imageUrl={"../fillerImage.jpg"}
            imageAlt={"Replace Photo"}
            technologies={[
              ["AI", "orange"],
              ["Python", "blue"],
              ["Reinforcement Learning", "red"],
            ]}
            title={"Reinforcement Learning Cleaning Robot"}
            projectSummary={
              "For this project, I designed and trained a robot to clean a room using reinforcement learning."
            }
            gitHubRepo={
              "https://github.com/BennettDesmond/q-learning-cleaning-robot"
            }
          />
        </GridItem>
        <GridItem>
          <Project
            imageUrl={"../fillerImage.jpg"}
            imageAlt={"Replace Photo"}
            technologies={[
              ["AI", "orange"],
              ["Python", "blue"],
              ["Genetic Algorithms", "red"],
            ]}
            title={"Genetic Algorithm Eight Queens"}
            projectSummary={
              "I worked on a genetic algorithm that found solutions to the classic eight queens chess problem."
            }
            gitHubRepo={
              "https://github.com/BennettDesmond/ai-eight-queens-genetic-algorithm"
            }
          />
        </GridItem>
      </Grid>
    </>
  );
}
