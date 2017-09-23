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
    paddingTop: Platform.OS === "android" ? 0 : 0
  },
  btnHeader: {
    alignSelf: "center"
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  bg: {
    backgroundColor: primary
  },
  signupHeader: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    padding: 5
  },
  roundedButton: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 30,
    width: 60,
    height: 60
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: Platform.OS === "android" ? 60 : 30
  },
  signupContainer: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  inputGrp: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginBottom: 20,
    borderWidth: 0,
    borderColor: "transparent"
  },
  input: {
    color: "#fff"
  },
  notificationSwitchContainer: {
    backgroundColor: "#fff",
    padding: 20
  },
  notificationHeader: {
    color: primary,
    fontWeight: "bold",
    paddingBottom: 20
  },
  switchText: {
    color: "#555",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  aswitchText: {
    color: "#555",
    fontWeight: "bold"
  },
  switchContainer: {
    alignSelf: "flex-end"
  },
  aswitchContainer: {},
  switch: {
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
    alignSelf: "flex-end",
    marginTop: Platform.OS === "android" ? -2 : -5,
    paddingTop: Platform.OS === "android" ? 0 : 10,
    paddingBottom: Platform.OS === "android" ? 0 : 10
  },
  child: {
    marginBottom: Platform.OS === "ios" ? 15 : 15
  },
  profileButtons: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-around"
  }
};
