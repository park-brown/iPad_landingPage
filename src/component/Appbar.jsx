import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const productListForLaptop = [
	{
		label: 'apple-logo',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg',
		width: '16px',
		backgroundSize: '16px 44px'
	},

	{
		label: 'Mac',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_mac_image__fv4ktb435mum_large.svg',
		width: '26px'
	},
	{
		label: 'iPad',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fefum478f4uq_large.svg',
		width: '26px'
	},
	{
		label: 'iPhone',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_iphone_image__dhepc4hn14cy_large.svg',
		width: '44px'
	},
	{
		label: 'iWatch',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_watch_image__dfo5u4bhooqe_large.svg',
		width: '40px'
	},
	{
		label: 'TV',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_tv_image__dtzdy60o3imq_large.svg',
		width: '18px'
	},
	{
		label: 'Music',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_music_image__bewxrazzig02_large.svg',
		width: '37px'
	},
	{
		label: 'Support',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_support_image__b24reo1n4fbm_large.svg',
		width: '52px'
	},
	{
		label: 'Search',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__fca9mfoh8a2q_large.svg',
		width: '18px',
		backgroundPosition: '10px 0',
		backgroundSize: '18px 88px'
	},
	{
		label: 'bag',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__bmix8075eg4i_large.svg',
		width: '37px'
	}
];

const productListForTablet = [
	{
		label: 'apple-logo',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg',
		width: '18px',
		backgroundSize: '18px 48px'
	},
	{
		label: 'bag',
		url: 'https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__bmix8075eg4i_large.svg',
		width: '37px'
	}
];
const AppHeader = (props) => {
	const theme = useTheme();
	const below_733 = useMediaQuery(theme.breakpoints.down('tablet'));
	const Laptop = () => {
		return productListForLaptop.map((item) => (
			<Box
				key={item.label}
				sx={{
					backgroundImage: `url(${item.url})`,
					backgroundPosition: `${item.backgroundPosition || 'center'}`,
					backgroundSize: `${item.backgroundSize || `${item.width} 100%`}`,
					backgroundRepeat: 'no-repeat',
					width: `${item.width}`,
					px: '10px',
					height: '44px',
					opacity: 0.8,
					boxSizing: 'content-box',
					'&:hover,&:active': {
						opacity: 1
					}
				}}></Box>
		));
	};

	const Tablet = () => {
		return productListForTablet.map((item) => (
			<Box
				key={item.label}
				sx={{
					backgroundImage: `url(${item.url})`,
					backgroundPosition: `${item.backgroundPosition || 'center'}`,
					backgroundSize: `${item.backgroundSize || `${item.width} 100%`}`,
					backgroundRepeat: 'no-repeat',
					width: `${item.width}`,
					px: '10px',
					height: '48px',
					opacity: 0.8,
					boxSizing: 'content-box',
					'&:hover,&:active': {
						opacity: 1
					}
				}}></Box>
		));
	};
	return (
		<AppBar position='relative' sx={{ bgcolor: 'rgba(0,0,0,0.92)', flexShrink: 1 }} component='nav'>
			<Toolbar
				sx={{
					mx: 'auto',
					width: '100%',
					maxWidth: '960px',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}>
				{/*Lapktop and tablet section */}
				{below_733 ? (
					<MenuIcon sx={{ width: '30px', height: '30px', opacity: 0.8, '&:hover,&:active': { opacity: 1 } }} />
				) : null}

				{below_733 ? Tablet() : Laptop()}
			</Toolbar>
		</AppBar>
	);
};

export default AppHeader;