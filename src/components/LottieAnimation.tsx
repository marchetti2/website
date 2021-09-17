import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

function LottieAnimation(): JSX.Element {
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <Box
      position="absolute"
      m={{
        base: "25px auto auto auto",
        sm: "60px auto auto auto",
        md: "auto 450px auto auto",
        lg: "auto 620px auto auto",
        xl: "auto 740px auto auto",
      }}
      w={{ base: "200px", md: "500px" }}
      h={{ base: "200px", md: "500px" }}
    >
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets2.lottiefiles.com/packages/lf20_pftxy0ej.json"
      />
    </Box>
  );
}

export { LottieAnimation };
