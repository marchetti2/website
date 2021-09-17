import { Flex, Text, HStack, Link } from "@chakra-ui/react";
import { DefaultIcon } from './DefaultIcon'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiFillMail } from "react-icons/ai";

function Footer(): JSX.Element {
  return (
    <Flex
    as="footer"
    w="100%"
    h={{base:'70px', md:'80px', lg:"90px", xl:"100px"}}
    borderTop="1px solid #eaeaea"
    align="center"
    justifyContent="center"
  >
    <HStack>
      <Text>
        Contact us 
      </Text>
      <Link href='https://www.github.com/marchetti2' isExternal>
        <DefaultIcon iconName={AiFillGithub}/>
      </Link>
      <Link href='https://www.linkedin.com/in/marchetti2/' isExternal>
        <DefaultIcon iconName={AiFillLinkedin}/>
      </Link>
      <Link href='https://twitter.com/marioo_luiz' isExternal>
        <DefaultIcon iconName={AiFillTwitterSquare}/>
      </Link>
      <Link href='mailto:marchetti2@gmail.com' isExternal>
        <DefaultIcon iconName={AiFillMail}/>
      </Link>
    </HStack>
  </Flex>
  )
}

export { Footer }