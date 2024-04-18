import * as React from 'react';
import { createReactMaterial, withMaterialNode } from '@core/createMaterial';

export interface ButtonProps {
	children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
	return <div ref={ref}>{props.children}</div>;
});

export const MaterialButton = createReactMaterial(withMaterialNode<ButtonProps>(Button), {
	displayName: '按钮组件',
});
