import { MaterialButton, MaterialRow, MaterialText } from '@/core/materials';
import { MaterialContainer } from '@/core/materials/container';
import { useEditor, useNode, Element } from '@craftjs/core';

export function MaterialPanel() {
	const { connectors } = useEditor();
	const componentList = [
		{
			component: MaterialButton,
			name: 'button',
		},
		{
			component: MaterialText,
			name: 'text',
		},
	];

	return (
		<div className='material'>
			{/* {componentList.map(item => {
				return <div style={{ padding: '20px', border: '1px solid gray' }}>{item.name}</div>;
			})} */}
			<div
				style={{
					padding: '20px',
					border: '1px solid gray',
				}}
				ref={ref => connectors.create(ref, <MaterialButton text='Click me' />)}
			>
				button
			</div>
			<div
				style={{
					padding: '20px',
					border: '1px solid gray',
				}}
				ref={ref => connectors.create(ref, <MaterialText text='默认文本' />)}
			>
				text
			</div>
			<div
				style={{
					padding: '20px',
					border: '1px solid gray',
				}}
				ref={ref => connectors.create(ref, <Element is={MaterialContainer} padding={20} canvas />)}
			>
				Container
			</div>
		</div>
	);
}
