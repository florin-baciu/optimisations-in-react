import { paths as PATHS, pageNames as PAGE_NAMES } from "./paths";
import { enhanceMap } from "./enhanceMap";
import { zip } from "./zip";

export const utils = Object.freeze({
  FUNCTIONS: {
    zip,
    enhanceMap,
  },
  CONSTANTS: {
    PATHS,
    PAGE_NAMES,
  },
});
