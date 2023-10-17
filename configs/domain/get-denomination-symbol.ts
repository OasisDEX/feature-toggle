import {DenominationSymbol} from "🤝";
import {EnumToObject, enumToObject} from "🛠️";

export const getLabelByDenominationSymbol = (): EnumToObject<typeof DenominationSymbol> => {
    return enumToObject(DenominationSymbol)
};