import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  StackDivider,
  HStack,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UseModalProps,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { IoAlertCircleOutline } from "react-icons/io5";

import { DefaultIcon } from "./DefaultIcon";

import apps from "../../applications";

function ProjectsListModal(props: UseModalProps): JSX.Element {
  const { isOpen, onClose } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading variant="bold-20px-modal">Projects</Heading>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box
              as="nav"
              maxH="400px"
              overflowY="scroll"
              px=".8rem"
              css={{
                "&::-webkit-scrollbar": {
                  width: "9px",
                  height: "9px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#B3AFB3",
                  borderRadius: "10px",
                },
                "&::::-webkit-scrollbar-thumb:hover": {
                  background: "#B3AFB3",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#F0F0F0",
                  borderRadius: "0",
                  boxShadow: "inset 0px 0px 0px 0px #F0F0F0",
                },
              }}
              background="linear-gradient(#fff 33%, rgba(245,245,245, 0)), linear-gradient(rgba(245,245,245, 0), #fff 66%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)), radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%"
              backgroundRepeat="no-repeat"
              backgroundAttachment="local, local, scroll, scroll"
              backgroundSize="100% 20px, 100% 20px, 100% 8px, 100% 8px"
            >
              <VStack
                alignItems="flex-start"
                spacing="16px"
                pb="1rem"
                divider={<StackDivider borderColor="gray.200" />}
              >
                {apps.map((app) => (
                  <Box key={app.title}>
                    <HStack alignItems="center" spacing="1rem" mb="1rem">
                      <Heading variant="regular-18px-modal">
                        {app.title}
                      </Heading>
                      {app.link ? (
                        <Link href={app.link} isExternal>
                          <DefaultIcon
                            iconName={GoLinkExternal}
                            width={5}
                            height={5}
                            color="light.100"
                          />
                        </Link>
                      ) : null}
                      <Link href={app.github} isExternal>
                        <DefaultIcon
                          iconName={AiFillGithub}
                          width={5}
                          height={5}
                          color="light.100"
                        />
                      </Link>
                      {app.font ? (
                        <Tooltip
                          hasArrow
                          label={app.font}
                          placement="right-end"
                        >
                          <Box>
                            <DefaultIcon
                              iconName={IoAlertCircleOutline}
                              transitionColor={null}
                              width={5}
                              height={5}
                              color="light.100"
                            />
                          </Box>
                        </Tooltip>
                      ) : null}
                    </HStack>
                    <Text variant="light-14px-modal">{app.description}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { ProjectsListModal };
