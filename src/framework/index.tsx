import { Editor, Frame, Element } from '@craftjs/core';
import { MaterialButton, MaterialText, MaterialCol, MaterialRow } from '@/core/materials';
import * as _ from 'lodash';
import { MaterialPanel } from './materialsPanel';
import { MaterialContainer } from '@/core/materials/container';
import { SettingPanel } from './settingsPanel';
import { SliderBar } from './sliderBar';

export function Framework() {
	return (
		<div style={{ flex: 1, border: '1px solid red', display: 'flex', height: '100%' }}>
			<Editor resolver={{ MaterialButton, MaterialText, MaterialCol, MaterialRow, MaterialContainer }}>
				<div className='material-panel' style={{ minWidth: '300px', border: '1px solid red' }}>
					{/* <MaterialPanel /> */}
					<SliderBar></SliderBar>
				</div>
				<div className='editor' style={{ flex: 1, border: '1px solid red' }}>
					<Frame>
						<Element is='div' style={{ background: '#fff', display: 'flex', flexDirection: 'column' }} canvas>
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
							<Element is={MaterialContainer} canvas>
								<MaterialButton block={false} type='primary'>
									container button 111
								</MaterialButton>
								<MaterialButton block={false} type='primary'>
									container button 222
								</MaterialButton>
							</Element>
						</Element>
					</Frame>
				</div>
				<div className='setting-panel' style={{ minWidth: '300px', border: '1px solid red' }}>
					{/* <SettingPanel /> */}
				</div>
			</Editor>
		</div>
	);
}
