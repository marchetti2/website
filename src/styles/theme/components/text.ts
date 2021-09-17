/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    color: "gray.500",
  },
  variants: {
    "light-14px-modal": {
      fontSize: ["xs", null, "xs", "sm", "sm"],
    },
    "light-16px": {
      fontSize: ["xs", null, "md", "md", "md"],
    },
    "regular-20px": {
      fontSize: ["15px", null, "md", "lg", "xl"],
      lineHeight: [".7rem", null, "1.3rem", "1.5rem", "1.875rem"],
      fontWeight: "500",
    },
    "regular-24px": {
      fontSize: ["md", null, "lg", "xl", "2xl"],
      lineHeight: ["1.25rem", null, "1.25rem", "1.7rem", "2.25rem"],
      fontWeight: "500",
    },
  },
  defaultProps: {
    variant: "light-16px",
  },
};
