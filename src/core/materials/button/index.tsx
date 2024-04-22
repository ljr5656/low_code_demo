import * as React from 'react';
import { createReactMaterial, withMaterialNode } from '@core/createMaterial';
import { Button as AntdButton } from 'antd';

export interface ButtonProps {
	children?: React.ReactNode;
	text?: string;
}

const Button = React.forwardRef<HTMLDivElement, ButtonProps>(({ children = '', ...props }, ref) => {
	console.log(props, 'props');
	return (
		<AntdButton ref={ref} {...props}>
			{children || props.text}
		</AntdButton>
	);
});

export const MaterialButton = createReactMaterial(withMaterialNode<ButtonProps>(Button), {
	displayName: '按钮',
});
