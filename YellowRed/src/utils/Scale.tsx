import { Dimensions } from "react-native";
//Screen Constatnts
const SCREEN_HEIGHT = 667;
const SCREEN_WIDTH = 375;
const { width, height } = Dimensions.get("window");
/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */

const scaledWidth = width / SCREEN_WIDTH;
const scaledHeight = height / SCREEN_HEIGHT;
const scaleFactor = Math.min(scaledWidth, scaledHeight);

const Scale = (units = 1) => {
  const scale = (scaleFactor) * units;
  return scale;
};

export default Scale;
