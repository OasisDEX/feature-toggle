import { LendingProtocol, LendingProtocolLabel} from "🤝";

export const getLendingProtocols = (): Record<LendingProtocol, LendingProtocolLabel> => {
    return {
        [LendingProtocol.AaveV2]: LendingProtocolLabel.aavev2,
        [LendingProtocol.AaveV3]: LendingProtocolLabel.aavev3,
        [LendingProtocol.Ajna]: LendingProtocolLabel.ajna,
        [LendingProtocol.Maker]: LendingProtocolLabel.maker,
        [LendingProtocol.SparkV3]: LendingProtocolLabel.sparkv3,
    }
};