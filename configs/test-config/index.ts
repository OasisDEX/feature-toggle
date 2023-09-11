import { ConfigHelperType } from "⌨️";

export default function ({ isStaging, notProduction }: ConfigHelperType) {
  return {
    TestConfigTestValueAlwaysFalse: false,
    TestConfigTestValueAlwaysTrue: true,
    TestConfigTestValueFalseOnProductionTrueOnOthers: notProduction
      ? true
      : false,
    TestConfigTestValueTrueOnStaging: isStaging ? true : false,
  };
}
