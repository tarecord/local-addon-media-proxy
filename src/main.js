import { SiteData } from '@getflywheel/local/main';

export default function(context) {

	const { electron } = context;
	const { ipcMain } = electron;

	ipcMain.on('update-site-notes', (event, siteId) => {
		SiteData.updateSite(siteId, {
			id: siteId
		});
	});

}
