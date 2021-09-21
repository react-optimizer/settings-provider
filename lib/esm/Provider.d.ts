import React from 'react';
import 'react-dom';
declare type Props = {
    url: string;
    children: React.ReactChildren;
};
declare const Provider: (props: Props) => string | React.ReactChildren | undefined;
export default Provider;
