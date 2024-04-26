import { Tabs } from 'antd';

export function SliderBar() {
	const tabs = [
		{
			label: '组件库',
			name: 'components',
		},
		{
			label: '大纲树',
			name: 'outlineTree',
		},
	];
	return (
		<Tabs
			defaultActiveKey='1'
			tabPosition={'left'}
			// style={{ height: 220 }}
			items={tabs.map((tab, index) => {
				const id = String(index);
				return {
					label: tab.label,
					key: tab.name,
					children: tab.label,
				};
			})}
		/>
	);
}
