const React = require("react-native");
const { Dimensions, Platform } = React;

const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  header: {
    width: Dimensions.get("window").width,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: Platform.OS === "ios" ? undefined : -30
  },
  rowHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: Platform.OS === "android" ? 7 : 0
  },
  btnHeader: {
    alignSelf: "center"
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain",
    alignSelf: "center"
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary
  },
  contentIconsContainer: {
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  roundedButton: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 30,
    width: 60,
    height: 60
  },
  roundedCustomButton: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 60,
    height: 60
  },
  feedbackHeaderContainer: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 10,
    alignSelf: "center",
    backgroundColor: "transparent"
  },
  feedbackHeader: {
    fontSize: 22,
    paddingBottom: 10,
    fontWeight: "600",
    alignSelf: "center"
  },
  feedbackHead: {
    opacity: 0.8,
    fontSize: 13,
    fontWeight: "bold",
    color: "#FFF"
  },
  feedbackContainer: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: "#FFF"
  },
  inputGrp: {
    marginBottom: 20
  },
  input: {
    color: "#000"
  },
  inputBox: {
    maxHeight: 300,
    minHeight: 200,
    textAlignVertical: "top"
  },
  inputBoxIcon: {
    alignSelf: "flex-end"
  },
  forwardIcon: {
    alignSelf: "flex-end",
    paddingBottom: 5
  },
  bg: {
    backgroundColor: primary
  }
};
