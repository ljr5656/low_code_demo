import { useEditor } from '@craftjs/core';

export function SettingPanel() {
	const editor = useEditor(state => {
		const [currentNodeId] = state.events.selected;
		let selected;

		if (currentNodeId) {
			selected = {
				id: currentNodeId,
				name: state.nodes[currentNodeId].data.name,
				settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
			};
		}
		console.log(`state`, state);
		return {
			selected,
		};
	});
	const { selected } = editor;
	console.log(`editor`, editor);
	return selected ? <div>{selected.name}</div> : null;
}
