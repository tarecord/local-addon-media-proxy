import React from 'react';
import { TableListRow, TextButton } from '@getflywheel/local-components';
import FlywheelModalExample from './modal';

export default function(context) {

	const { hooks } = context;
	const modal = new FlywheelModalExample;

	hooks.addContent('SiteInfoOverview_TableList', (site) => {
		return (
			<TableListRow key="notes" site={site} label="Media Proxy Site">
				https://chandlerconcrete-com.northstar.ac
				<TextButton onClick={modal.onClick()}>Change</TextButton>
			</TableListRow>
		);
	});
}
