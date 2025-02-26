import ServerSideRender from '@wordpress/server-side-render';

const MyServerSideRender = () => (
	<ServerSideRender
		block="core/archives"
		attributes={ {
			showPostCounts: true,
			displayAsDropdown: false,
		} }
	/>
);
