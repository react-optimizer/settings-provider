"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
// const DEFAULT_SETTINGS_URL: string =
//   'https://raw.githubusercontent.com/react-optimizer/react-optimizer/main/settings.json';
//
// type Props = {
//   url: string;
//   children: React.ReactChildren
// };
//
// type Config = {
//   url: string;
// }
var Provider = function (_a) {
    var _b = _a.initialClick, initialClick = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(initialClick), click = _c[0], setClick = _c[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null,
            "Click: ",
            click),
        react_1.default.createElement("button", { onClick: function () { return setClick(click + 1); } }, "Click Me!")));
};
exports.default = Provider;
