import colors from "./logging-colors-map";

const log = (type, message) => {
  let color = undefined;
  switch (type) {
    case "ok":
      color = colors.fg.green;
      break;
    case "info":
      color = colors.fg.blue;
      break;
    case "error":
      color = colors.fg.red;
      break;
    case "warn":
      color = colors.fg.yellow;
      break;
    default:
      color = colors.fg.black;
      break;
  }
  console.log(color, message, colors.reset);
};
export default log;
