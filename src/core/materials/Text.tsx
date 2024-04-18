import * as React from 'react';
import { createReactMaterial, withMaterialNode } from '@core/createMaterial';

export interface TextProps {
	children?: React.ReactNode;
}

const Text = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
	return <div ref={ref}>{props.children}</div>;
});

export const MaterialText = createReactMaterial(withMaterialNode<TextProps>(Text), {
	displayName: '文本组件',
});
