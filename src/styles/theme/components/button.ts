/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "md", //6px
  },

  variants: {
    outline: {
      border: "2px solid",
      borderColor: "main.200",
      color: "main.200",
    },
  },

  defaultProps: {
    variant: "outline",
  },
};
