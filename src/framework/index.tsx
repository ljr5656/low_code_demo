import { Editor, Frame, Element } from '@craftjs/core';
import { MaterialButton, MaterialText, MaterialCol, MaterialRow } from '@/core/materials';

export function Framework() {
	return (
		<div style={{ height: '100%', display: 'flex' }}>
			<div style={{ flex: 1, border: '1px solid red' }}>
				<Editor resolver={{ MaterialButton, MaterialText, MaterialCol, MaterialRow }}>
					<Frame>
						<Element is='div' style={{ background: '#fff', border: '1px solid red', display: 'flex', flexDirection: 'column' }} canvas>
							<MaterialText>text test</MaterialText>
							<MaterialButton block={false} type='primary'>
								button test
							</MaterialButton>
							<Element is={MaterialCol} style={{ border: '1px solid blue', padding: '10px', gap: '10px' }} canvas>
								<MaterialButton block={false} type='primary'>
									colButton111
								</MaterialButton>
								<MaterialButton block={false} type='primary'>
									colButton222
								</MaterialButton>
							</Element>

							<Element is={MaterialRow} style={{ border: '1px solid green', padding: '10px', gap: '10px' }} canvas>
								<MaterialButton block={false} type='primary'>
									rowButton111
								</MaterialButton>
								<MaterialButton block={false} type='primary'>
									rowButton222
								</MaterialButton>
							</Element>
						</Element>
					</Frame>
				</Editor>
			</div>
			<div style={{ minWidth: '200px', border: '1px solid red' }}>3</div>
		</div>
	);
}
