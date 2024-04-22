import * as React from 'react';
import { createReactMaterial, withMaterialNode } from '@core/createMaterial';
import { Typography } from 'antd';

const { Text: AntdText } = Typography;

export interface TextProps {
	children?: React.ReactNode;
	text?: string;
}

const Text = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
	return <AntdText ref={ref}>{props.children || props.text}</AntdText>;
});

export const MaterialText = createReactMaterial(withMaterialNode<TextProps>(Text), {
	displayName: '文本组件',
});
