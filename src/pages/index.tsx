import {
  Flex,
  Box,
  Heading,
  Text,
  VStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { LottieAnimation } from "../components/LottieAnimation";

import { ProjectsListModal } from "../components/ProjectsListModal";

function Home(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Mario Luiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        h={{
          base: "calc(100vh - 70px)",
          md: "calc(100vh - 80px)",
          lg: "calc(100vh - 90px)",
          xl: "calc(100vh - 100px)",
        }}
        w="100vw"
        overflow="hidden"
      >
        <Flex
          as="main"
          h="100%"
          maxW={{
            base: "18.12rem",
            sm: "34rem",
            md: "48rem",
            lg: "60rem",
            xl: "70rem",
          }}
          align="center"
          justifyContent="center"
          m="auto"
          py="2.5rem"
        >
          <LottieAnimation />
          <VStack
            as="section"
            spacing="1.5rem"
            m={{
              base: "auto",
              sm: "auto",
              md: "auto auto auto 370px",
              lg: "auto auto auto 435px",
              xl: "auto auto auto 415px",
            }}
          >
            <VStack
              align="center"
              mb={{ base: "7.5rem", sm: "7.5rem", md: "0", xl: "0" }}
            >
              <Text variant="regular-24px" role="img" aria-label="hi">
                👋 Hey, welcome! We are
              </Text>
              <Heading
                variant="bold-72px-title"
                textAlign="center"
                maxW={{
                  base: "400px",
                  md: "500px",
                  lg: "600px",
                  xl: "700px",
                }}
              >
                under construction.
              </Heading>
            </VStack>

            <VStack align="center" spacing="1.8rem" justifyContent="center">
              <Text variant="regular-20px">
                For now, you can see some works..
              </Text>
              <Button size="md" onClick={onOpen}>
                Projects
              </Button>
              <ProjectsListModal isOpen={isOpen} onClose={onClose} />
            </VStack>
          </VStack>
        </Flex>
      </Box>

      <Footer />
    </>
  );
}

export default Home;
