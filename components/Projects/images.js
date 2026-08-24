import nextboss from "../../public/projects/nextboss.webp";
import readyAi from "../../public/projects/ready-ai.webp";
import round1 from "../../public/projects/round1.webp";
import reactNativeDirectory from "../../public/projects/react-native-directory.webp";
import buywow from "../../public/projects/buywow.webp";
import bot9 from "../../public/projects/bot9.webp";
import dukaan from "../../public/projects/dukaan.webp";
import airbnb from "../../public/projects/airbnb.webp";
import medium from "../../public/projects/medium.webp";
import inshorts from "../../public/projects/inshorts.webp";
import tesla from "../../public/projects/tesla.webp";
import occupyLogo from "../../public/projects/logos/occupy.svg";
import trxLogo from "../../public/projects/logos/trx.svg";
import qampusplusLogo from "../../public/projects/logos/qampusplus.png";
import qampuspayLogo from "../../public/projects/logos/qampuspay.png";
import moversePortfolioLogo from "../../public/projects/logos/moverse-portfolio.png";
import moverseAgentLogo from "../../public/projects/logos/moverse-agent.png";

export const PROJECT_IMAGES = {
  nextboss,
  "ready-ai": readyAi,
  round1,
  "react-native-directory": reactNativeDirectory,
  buywow,
  bot9,
  dukaan,
  airbnb,
  medium,
  inshorts,
  tesla,
};

// TODO: drop each logo file into public/projects/logos/<key>.png (or .svg) and
// import it above, replacing the `undefined` value for that key. Until then,
// ProjectCardModern falls back to rendering the project's initials.
export const PROJECT_LOGOS = {
  occupy: occupyLogo,
  trx: trxLogo,
  qampusplus: qampusplusLogo,
  qampuspay: qampuspayLogo,
  "moverse-portfolio": moversePortfolioLogo,
  "moverse-agent": moverseAgentLogo,
};
