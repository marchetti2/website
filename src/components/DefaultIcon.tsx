import { Icon } from "@chakra-ui/react";

interface DefaultIconProps {
  iconName:any;
  width?: number; 
  height?: number;
  color?:string; 
  transitionColor?:string | null;
}

function DefaultIcon({iconName, width=6, height=6, color="main.100", transitionColor="main.200"}: DefaultIconProps): JSX.Element {

  return transitionColor ? (
    <Icon
    as={iconName}
    _hover={{
      color: transitionColor,
      transition: ".5s",
    }}
    w={width}
    h={height}
    color={color}
    />
  ) : (
    <Icon
    as={iconName}
    w={width}
    h={height}
    color={color}
    />
  )
}

export { DefaultIcon }