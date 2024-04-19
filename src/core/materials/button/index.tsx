import * as React from 'react';
import { createReactMaterial, withMaterialNode } from '@core/createMaterial';
import { Button as AntdButton } from 'antd';
import { ButtonSetting } from './setting';

export interface ButtonProps {
	children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLDivElement, ButtonProps>(({ children = '默认填充', ...props }, ref) => {
	console.log(props, 'props');
	return (
		<AntdButton ref={ref} {...props}>
			{children}
		</AntdButton>
	);
});

export const MaterialButton = createReactMaterial(withMaterialNode<ButtonProps>(Button), {
	displayName: '按钮',
	custom: {
		useResize: false,
	},
	// related: {
	// 	settingRender: ButtonSetting,
	// },
});
