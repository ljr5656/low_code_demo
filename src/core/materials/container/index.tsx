import { createReactMaterial, withMaterialNode } from '@/core/createMaterial';
import { useNode } from '@craftjs/core';

interface ContainerProps {
	background?: string;
	padding?: number;
	children?: React.ReactNode;
}

export function Container({ background, padding, children, ...props }: ContainerProps) {
	const {
		connectors: { connect, drag },
	} = useNode();

	return (
		<div {...props} ref={ref => connect(drag(ref))} style={{ margin: '5px 0', background, padding: `${padding}px`, border: '1px solid green' }}>
			{children}
		</div>
	);
}

export const MaterialContainer = createReactMaterial(withMaterialNode<ContainerProps>(Container), {
	displayName: 'Container',
});
