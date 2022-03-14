import {
  Badge,
  Box,
  Button,
  Center,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";

interface ProjectProps {
  imageUrl: string;
  imageAlt: string;
  technologies: [string, string][];
  title: string;
  projectSummary: string;
  gitHubRepo: string;
}

export default function Project(props: ProjectProps) {
  const {
    imageUrl,
    imageAlt,
    technologies,
    title,
    projectSummary,
    gitHubRepo,
  } = props;
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="35px" overflow="hidden">
      <Image src={imageUrl} alt={imageAlt} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {technologies.map((technology) => (
            <Badge
              key={technology[0]}
              ml="2"
              borderRadius="full"
              px="2"
              colorScheme={technology[1]}
            >
              {technology[0]}
            </Badge>
          ))}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>{projectSummary}</Box>
        <Center p={8}>
          <Link isExternal={true} href={gitHubRepo}>
            <Button
              w={"full"}
              maxW={"md"}
              colorScheme={"messenger"}
              leftIcon={<SiGithub />}
            >
              <Center>
                <Text>View in GitHub</Text>
              </Center>
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
}
