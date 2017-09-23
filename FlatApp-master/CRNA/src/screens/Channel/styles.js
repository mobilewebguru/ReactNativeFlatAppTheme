const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  newsPoster: {
    height: deviceHeight / 4 + 20,
    width: null,
    position: "relative"
  },
  ioschannelHeader: {
    fontSize: 20,
    fontWeight: "900",
    alignSelf: "center",
    padding: 20,
    paddingTop: 30
  },
  achannelHeader: {
    fontSize: 20,
    fontWeight: "900",
    alignSelf: "center",
    padding: 20,
    marginTop: 10,
    textAlign: "center"
  },
  followBtn: {
    alignSelf: "center",
    backgroundColor: "#fff"
  },
  noOfFollowers: {
    fontSize: 12,
    fontWeight: "900",
    alignSelf: "center",
    textAlign: "center",
    padding: 20,
    paddingTop: 10,
    marginTop: 10
  },
  newsContentWrap: {
    flexDirection: "column",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  newsHeader: {
    color: "#444",
    fontWeight: "bold"
  },
  newsContent: {
    paddingTop: 20,
    paddingBottom: 20
  },
  newsLink: {
    color: Platform.OS === "android" ? "#777" : "#666",
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  timeIcon: {
    fontSize: 20,
    paddingRight: 10,
    color: "#666",
    marginLeft: Platform.OS === "android" ? 15 : 0,
    paddingLeft: Platform.OS === "android" ? 15 : 20,
    marginTop: Platform.OS === "android" ? -1 : -3
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  }
};
