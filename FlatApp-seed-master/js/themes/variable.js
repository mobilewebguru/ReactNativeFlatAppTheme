const color = require('color');

// theme background
const primary = color('#01cca1');
// header
const secondary = color('#00c497');
const info = color('#5bc0de');
const success = color('#5cb85c');
const danger = color('#d9534f');
const warning = color('#f0ad4e');
const sidebar = color('#252932');
const dark = color('rgba(0,0,0,0.8)');
const light = color('rgba(255,255,255,0.8)');

// var darken = secondary.darken(0.2).hexString().toString();

module.exports = {
  brandPrimary: primary.hexString().toString(),
  brandSecondary: secondary.hexString().toString(),
  brandInfo: info.hexString().toString(),
  brandSuccess: success.hexString().toString(),
  brandDanger: danger.hexString().toString(),
  brandWarning: warning.hexString().toString(),
  brandSidebar: sidebar.hexString().toString(),
  // darker: darken,
  dark: dark.hexString().toString(),
  light: light.hexString().toString(),
};
