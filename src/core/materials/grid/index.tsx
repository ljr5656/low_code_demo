import { createReactMaterial, withMaterialNode } from '@/core/createMaterial';
import { Row as AntdRow, Col as AntdCol } from 'antd';
import React from 'react';
export interface RowProps {
	children?: React.ReactNode;
}
export interface ColProps {
	children?: React.ReactNode;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(({ children = '默认填充Row', ...props }, ref) => {
	console.log(props, 'props');
	return (
		<div>
			<AntdRow ref={ref} {...props}>
				{children}
			</AntdRow>
		</div>
	);
});
const Col = React.forwardRef<HTMLDivElement, ColProps>(({ children = '默认填充Col', ...props }, ref) => {
	console.log(props, 'props');
	return (
		<div>
			<AntdCol ref={ref} {...props}>
				{children}
			</AntdCol>
		</div>
	);
});

export const MaterialRow = createReactMaterial(withMaterialNode<RowProps>(Row), {
	displayName: 'Row',
});

export const MaterialCol = createReactMaterial(withMaterialNode<ColProps>(Col), {
	displayName: 'Col',
});
