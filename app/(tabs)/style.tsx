import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({});

export const mainContainer = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: "#000000",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: "15%",
  },
  headerText: {
    color: "#FFFF",
    fontSize: 42,
    fontWeight: "bold",
  },
  sectionHome: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  sectionButton: {
    alignItems:"center",
    width: "45%",
    padding: 10,
    margin: "1%",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFF",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 5,
    color: "#000000",
    fontWeight: "bold",
  },
});

export default mainContainer;
