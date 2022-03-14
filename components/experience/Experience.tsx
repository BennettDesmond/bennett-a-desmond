import { Badge, Box, Heading, Text } from "@chakra-ui/react";

interface ExperienceProps {
  jobTitle: string;
  company: string;
  technologies: [string, string][];
  startDate: string;
  endDate: string;
  lengthOfStay: string;
  description: string;
}

export default function Experience(props: ExperienceProps) {
  const {
    jobTitle,
    company,
    technologies,
    startDate,
    endDate,
    lengthOfStay,
    description,
  } = props;
  return (
    <Box>
      <Heading size="md">
        {jobTitle} @ {company}
      </Heading>
      <Box display="flex" alignItems="baseline" mt="2">
        {technologies.map((technology) => (
          <Badge
            key={technology[0]}
            mr="2"
            borderRadius="full"
            px="2"
            colorScheme={technology[1]}
          >
            {technology[0]}
          </Badge>
        ))}
      </Box>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        mt="2"
      >
        {startDate} - {endDate} &bull; {lengthOfStay}
      </Box>
      <Text mt="2">{description}</Text>
    </Box>
  );
}
