import { ConfigHelperType } from "⌨️";
import { TokenSymbol } from "🤝";

export const getParameters = ({
  notProduction,
}: Pick<ConfigHelperType, "notProduction">) => ({
  topBanner: {
    enabled: false,
    closeable: true,
    name: "rebranding",
    url: "https://blog.summer.fi/oasis-app-rebrands-to-summer-fi/",
    message: "Oasis.app is now Summer.fi! Read the announcement",
  },
  locationBanner: {
    GB: {
      enabled: true,
      closeable: false,
      name: "uk_disclaimer",
      url: "https://docs.summer.fi/legal/uk-disclaimer",
      message:
        "UK disclaimer: This web application is provided as a tool for users to interact with third party DeFi protocols on their own initiative, with no endorsement or recommendation of ... Read more",
    },
  },
  aaveLike: {
    orderInformation: {
      showFlashloanInformation: notProduction,
    },
    closeDisabledFor: {
      collateral: [TokenSymbol.DAI, TokenSymbol.USDC],
      strategyTypes: ["short"],
    },
    adjustDisabledFor: {
      collateral: [],
      strategyTypes: [],
    },
    flashLoanTokens: {
      OPTIMISMMAINNET: "WETH",
      BASEMAINNET: "WETH",
    },
    riskRatios: {
      // uses new RiskRatio(new BigNumber(5), RiskRatio.TYPE.COL_RATIO) so its one over the number here
      minimum: 100,
      default: 5,
    },
  },
  subgraphs: {
    baseUrl: notProduction
      ? "https://satsuma.subgraph.staging.oasisapp.dev/subgraphs/name"
      : "https://satsuma.subgraph.staging.oasisapp.dev/subgraphs/name",
  },
});
