import { Editor, Frame, Element } from '@craftjs/core';
import { Text } from "./components/materials/text"

export default function App() {
	return (
		<div style={{width: '200px', height: '200px', border:'1px solid black'}}>
			<Editor resolver={{ Text }}>
				<Frame>
					<Element is='div' style={{ background: '#fff', border:'1px solid red' }} canvas>
						<Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
					</Element>
				</Frame>
			</Editor>
		</div>
	);
}