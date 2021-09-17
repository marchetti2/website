/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    color: "gray.700",
  },
  variants: {
    "regular-18px-modal": {
      fontSize: ["md", null, "md", "lg", "lg"],
      fontWeight: "500",
    },
    "bold-20px-modal": {
      fontSize: ["lg", null, "lg", "xl", "xl"],
      fontWeight: "700",
      color: "main.200",
    },
    "bold-72px-title": {
      fontSize: ["3xl", null, "56px", "6xl", "7xl"],
      lineHeight: ["2.4rem", null, "4rem", "4.5rem", "5.3rem"],
      fontWeight: "700",
      color: "main.100",
    },
  },
  defaultProps: {
    variant: "regular-18px-modal",
  },
};
