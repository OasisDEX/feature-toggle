import { ConfigHelperType } from "⌨️";

export const getFeatures = ({ notProduction }: ConfigHelperType) => ({
  AaveV3ArbitrumBorrow: true,
  AaveV3ArbitrumEarn: false,
  AaveV3EarncbETHeth: false,
  AaveV3EarnrETHeth: false,
  AaveV3History: true,
  AaveV3OptimismBorrow: true,
  AaveV3OptimismEarn: false,
  AaveV3Protection: true,
  AaveV3ProtectionWrite: true,
  AaveV3OptimizationEthereum: true,
  AaveV3OptimizationOptimism: true,
  AaveV3OptimizationArbitrum: true,
  AaveV3OptimizationBase: true,
  AaveV3ProtectionLambdaEthereum: true,
  AaveV3ProtectionLambdaOptimism: true,
  AaveV3ProtectionLambdaArbitrum: true,
  AaveV3ProtectionLambdaBase: true,
  AaveV3TrailingStopLossLambdaEthereum: true,
  AaveV3TrailingStopLossLambdaOptimism: true,
  AaveV3TrailingStopLossLambdaArbitrum: true,
  AaveV3TrailingStopLossLambdaBase: true,
  SparkOptimizationEthereum: true,
  SparkTrailingStopLossLambdaEthereum: true,
  SparkProtectionLambdaEthereum: true,
  AaveV3PartialTakeProfitLambdaEthereum: true,
  AaveV3PartialTakeProfitLambdaOptimism: true,
  AaveV3PartialTakeProfitLambdaArbitrum: true,
  AaveV3PartialTakeProfitLambdaBase: true,
  SparkPartialTakeProfitLambdaEthereum: true,
  AjnaBase: true,
  AjnaPoolFinder: true,
  AjnaSafetySwitch: false,
  AjnaSuppressValidation: false,
  MorphoSafetySwitch: false,
  MorphoSuppressValidation: false,
  AaveV2SafetySwitch: false,
  AaveV2SuppressValidation: false,
  AaveV3SafetySwitch: false,
  AaveV3SuppressValidation: false,
  AaveV3LambdaSuppressValidation: false,
  SparkSafetySwitch: false,
  SparkSuppressValidation: false,
  AnotherTestFeature: true, // used in unit tests
  BaseNetworkEnabled: true,
  ConstantMultipleReadOnly: false,
  DaiSavingsRate: true,
  DisableSidebarScroll: false,
  FollowAAVEVaults: false,
  MorphoBlue: true,
  NewNavigation: true,
  ProxyCreationDisabled: false,
  ProxyReveal: false,
  ReadOnlyAutoTakeProfit: false,
  ReadOnlyBasicBS: false,
  Referrals: true,
  Sillyness: false,
  SparkProtocolStopLoss: true,
  SparkOptimization: false,
  StopLossOpenFlow: false,
  StopLossRead: true,
  StopLossWrite: true,
  TestFeature: false, // used in unit tests
  UseNetworkSwitcherForks: false,
  UseNetworkSwitcherTestnets: false,
  UseRpcGateway: true,
  NewPortfolio: true,
  OmniPnlModal: false,
  MakerTenderly: false,
  SparkWBTCDAI: true,
  AaveLikeSimpleEarnSafetySwitch: false,
  AaveLikeSimpleEarnSuppressValidation: false,
  EnableMigrations: true,
  EnableRefinance: true,
  RefinanceSafetySwitch: false,
  RefinanceSuppressValidation: false,
  Erc4626Vaults: true,
  Erc4626VaultsSafetySwitch: false,
  Erc4626VaultsSuppressValidation: false,
  DsProxyMigrationEthereum: true,
  DsProxyMigrationOptimism: true,
  DsProxyMigrationArbitrum: true,
  DsProxyMigrationBase: true,
  UseOmniKitLinks: false,
  OmniKitDebug: false,
  ProductHubDebug: false,
  Newsletter: notProduction,
  LambdaAutomations: {
    DisableNetValueCheck: notProduction,
    // same as AutomationFeatures enum in OB
    AaveV3: {
      autoBuy: true,
      autoSell: true,
      partialTakeProfit: true,
      stopLoss: true,
      trailingStopLoss: true,
    },
    MorphoBlue: {
      autoBuy: true,
      autoSell: true,
      partialTakeProfit: true,
      stopLoss: true,
      trailingStopLoss: true,
    },
  },
  Rays: true,
  RaysDailyChallenge: notProduction,
});
