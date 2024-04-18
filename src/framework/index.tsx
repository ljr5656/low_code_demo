import { Editor, Frame, Element } from '@craftjs/core';
import { MaterialButton, MaterialText } from '@core/materials';

export function Framework() {
	return (
		<div style={{ height: '100%', display: 'flex' }}>
			<div style={{ minWidth: '200px', border: '1px solid red' }}>1</div>
			<div style={{ flex: 1, border: '1px solid red' }}>
				<Editor resolver={{ MaterialButton, MaterialText }}>
					<Frame>
						<Element is='div' style={{ background: '#fff', border: '1px solid red' }} canvas>
							<MaterialText>1</MaterialText>
							<MaterialButton>2</MaterialButton>
							<MaterialText>3</MaterialText>
						</Element>
					</Frame>
				</Editor>
			</div>
			<div style={{ minWidth: '200px', border: '1px solid red' }}>3</div>
		</div>
	);
}
