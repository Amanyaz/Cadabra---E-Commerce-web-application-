import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: 4,
    width: 250,
    minWidth: 250,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  content: {
    flexGrow: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 15,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    opacity: 0.6,
    paddingTop: 7,
  },
  price: {
    color: "#388e3c",
    fontWeight: 500,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 48,
    padding: "0 12px",
  },
});
