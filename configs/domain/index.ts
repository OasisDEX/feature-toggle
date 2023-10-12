import {ConfigHelperType} from "⌨️";
import {getTokens} from "./getTokens";
// import { getFeatures } from "./getFeatures";
// import { getNavigation } from "./getNavigation";
// import { getParameters } from "./getParameters";
// import { getRpcConfig } from "./getRpcConfig";


export default function ({
                             isDevelopment: _isDevelopment,
                             notProduction,
                             isStaging,
                         }: ConfigHelperType) {
    /**
     * Goal is to capture domain specific configurations that is common
     * across all Summer.fi systems and apps.
     *
     * Possible extensions could include Products / Product categories / Strategies etc
     */
    return {
        tokens: getTokens(),
        tokensByNetwork: getTokensByNetwork(),
        lendingProtocols: null,
        networks: null,
    };
}
