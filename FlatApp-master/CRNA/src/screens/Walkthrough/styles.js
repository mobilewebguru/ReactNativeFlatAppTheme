const React = require("react-native");

const { Dimensions } = React;

const primary = require("../../theme/variables/commonColor").brandPrimary;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  slides: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primary,
    height: deviceHeight,
    width: deviceWidth
  },
  iosText: {
    fontSize: 16,
    padding: 60,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 0,
    color: "#FFF"
  },
  aText: {
    fontSize: 16,
    padding: 40,
    textAlign: "center",
    fontWeight: "bold",
    margin: 40,
    color: "#FFF"
  },
  iospaginationText: {
    position: "relative",
    top: -(deviceHeight / 7),
    fontSize: 20,
    lineHeight: 0,
    fontWeight: "bold",
    color: "#FFF"
  },
  apaginationText: {
    top: -(deviceHeight / 9),
    fontSize: 20,

    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
    color: "#FFF"
  },
  swiperDot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 50,
    height: 1,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 20
  },
  swiperActiveDot: {
    backgroundColor: "#fff",
    width: 50,
    height: 1,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 20
  },
  imageIcons: {
    fontSize: 120
  },
  Button: {
    alignSelf: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.2)"
  }
};
