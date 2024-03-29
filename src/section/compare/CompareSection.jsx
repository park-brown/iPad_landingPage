import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const LinkButton = styled(Button, { name: 'learn-more-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.body,
		color: theme.palette.common.link,
		padding: 0,
		'& .MuiSvgIcon-root': {
			width: '12.25px',
			height: '20px'
		}
	}
}));
const HeroButton = styled(Button, { name: 'product-buy-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.button,
		padding: '8px 16px',
		borderRadius: '980px',

		color: '#fff',
		backgroundColor: theme.palette.common.button_background,
		'&:hover': {
			backgroundColor: theme.palette.common.button_background_hover
		}
	}
}));
const CompareGrid = styled(Box, { name: 'iPad-compare-grid' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '87.5%',
		margin: '52px auto 0',
		maxWidth: '500px',
		display: 'grid',
		gap: '38px 10px',
		gridTemplateRows: 'repeat(12,auto)',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateAreas: ` "pro-device                 air-device"
                        "pro-display                air-display"
                        "pro-chip                   air-chip"
                        "pro-connection             air-connection"
                        "pro-cellular               air-cellular"
                        "pro-pencil                 air-pencil"
                        "pro-keyboard               air-keyboard"
                        "pro-learn-more             air-learn-more"
                        "ipad-device                mini-device"
                        "ipad-display               mini-display"
                        "ipad-chip                  mini-chip"
                        "ipad-connection            mini-connection"
                        "ipad-cellular              mini-cellular"
                        "ipad-pencil                mini-pencil"
                        "ipad-keyboard              mini-keyboard"
                        "ipad-learn-more            mini-learn-more"`
	},
	[theme.breakpoints.up('tablet')]: {
		gap: '38px 78px'
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '940px',
		gridTemplateRows: 'repeat(6, auto)',
		gridTemplateColumns: 'repeat(4,1fr)',
		gap: '38px 34px',
		gridTemplateAreas: ` "pro-device      air-device      ipad-device           mini-device"
                        "pro-display     air-display     ipad-display          mini-display"
                        "pro-chip        air-chip        ipad-chip             mini-chip"
                        "pro-connection  air-connection  ipad-connection       mini-connection"
                        "pro-cellular    air-cellular    ipad-cellular         mini-cellular"
                        "pro-pencil      air-pencil      ipad-pencil           mini-pencil"
                        "pro-keyboard    air-keyboard    ipad-keyboard         mini-keyboard"
                        "pro-learn-more  air-learn-more  ipad-learn-more       mini-learn-more"`
	}
}));
const DeviceWrapper = styled(Box, { name: 'device-container' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	paddingBottom: '25px',
	borderBottom: '1px solid #d2d2d7'
}));
const ImageWrapper = styled(Box, { name: 'Image-wrapper' })(({ theme }) => ({
	minHeight: '141px',
	marginBottom: '23px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	alignItems: 'center',
	[theme.breakpoints.up('tablet')]: {
		minHeight: '214px',
		marginBottom: '30px'
	}
}));

const Image = styled('figure', { name: 'device-image' })(({ theme, image }) => ({
	[theme.breakpoints.up('mobile')]: {
		backgroundImage: image.mobile.url,
		width: image.mobile.width,
		height: image.mobile.height,
		margin: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	},
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: image.tablet.url,
		width: image.tablet.width,
		height: image.tablet.height
	}
}));
const DeviceContent = styled(Box, { name: 'device-content' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	position: 'relative'
}));
const DeviceAvailableColor = styled('figure', { name: 'device-available-color' })(({ theme, image }) => ({
	margin: '9px 0px 21px 0px',
	height: image.height,
	width: image.width,
	backgroundImage: image.url,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceDisplayCell = styled(Box, { name: 'device-display-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	width: '100%',
	padding: '7px 0 0 0',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const DeviceChipCell = styled(Box, { name: 'device-chip-cell' })(({ gridArea, theme }) => ({
	gridArea: gridArea,
	padding: '4px 0 0 0',
	width: '90%',
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	[theme.breakpoints.up('tablet')]: {
		width: '100%'
	}
}));

const ChipImage = styled('figure', { name: 'chip-icon' })(({ icon }) => ({
	width: '38px',
	height: '38px',
	backgroundImage: icon,
	margin: '0 auto 5px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceConnectionCell = styled(Box, { name: 'device-connection-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	width: '100%',
	padding: '7px 0 0 0',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const ConnectionImage = styled('figure', { name: 'chip-icon' })(({ icon }) => ({
	width: icon.width,
	height: icon.height,
	backgroundImage: icon.url,
	margin: '0 auto 5px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceCellularCell = styled(Box, { name: 'device-cellular-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	width: '100%',
	padding: '7px 0 0 0',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const CellularImage = styled('figure', { name: 'cellular-icon' })(({ icon }) => ({
	width: '48px',
	height: '35px',
	backgroundImage: icon.url,
	margin: '0 auto 5px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DevicePencilCell = styled(Box, { name: 'device-pencil-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	width: '100%',
	padding: '7px 0 0 0',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const PencilImage = styled('figure', { name: 'pencil-icon' })(({ icon }) => ({
	width: '62px',
	height: '6px',
	backgroundImage: 'url(./compare/compare_pencil_large_2x.png)',
	margin: '0 auto 10px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceKeyboardCell = styled(Box, { name: 'device-keyboard-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	width: '100%',
	padding: '7px 0 0 0',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const KeyBoardImage = styled('figure', { name: 'keyboard-icon' })(({ icon }) => ({
	width: '68px',
	height: '49px',
	backgroundImage: icon.url,
	margin: '0 auto 10px auto',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const DeviceLearnMoreCell = styled(Box, { name: 'device-learn-more-cell' })(({ gridArea }) => ({
	gridArea: gridArea,
	width: '100%',
	padding: '29px 0 0 0',
	borderTop:'1px solid #d2d2d7',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const iPad_description = [
	//iPad Pro
	{
		girdAreas: {
			device_wrapper: 'pro-device',
			display_cell: 'pro-display',
			chip_cell: 'pro-chip',
			connnection_cell: 'pro-connection',
			celluar_cell: 'pro-cellular',
			pencil_cell: 'pro-pencil',
			keyboard_cell: 'pro-keyboard',
			learn_more_cell: 'pro-learn-more'
		},
		image: {
			mobile: { url: 'url(./compare/compare_ipad_pro_small_2x.png)', width: '125px', height: '141px' },
			tablet: { url: 'url(./compare/compare_ipad_pro_large_2x.png)', width: '189px', height: '214px' }
		},
		device_content: {
			h3: 'iPad Pro',
			price: 'From $799',
			availableColor: {
				url: 'url(./compare/compare_ipad_pro_swatches_large_2x.jpg)',
				width: '45px',
				height: '19px'
			}
		},
		display_cell: {
			p1: '12.9” and 11”',
			p2: '12.9” Liquid Retina XDR display',
			p3: '11” Liquid Retina display'
		},
		chip_cell: {
			image: { url: 'url(./compare/compare_m1_chip_large_2x.png)' },
			p: 'M1 chip'
		},
		connection_cell: {
			image: { url: 'url(./compare/compare_usbc_thunderbolt_large_2x.png)', width: '61px', height: '22px' },
			p: 'USB-C connector with support for Thunderbolt / USB 4'
		},
		cellular_cell: {
			image: { url: 'url(./compare/compare_cellular_5g_large_2x.png)' },
			p: '5G cellular'
		},
		pencil_cell: {
			p1: 'Compatible with ',
			p2: 'Apple Pencil (2nd generation)'
		},
		keyboard_cell: {
			image: { url: 'url(./compare/compare_magic_keyboard_large_2x.png)' },
			p: 'Compatible with Magic Keyboard and Smart Keyboard Folio'
		}
	},
	//iPad Air
	{
		girdAreas: {
			device_wrapper: 'air-device',
			display_cell: 'air-display',
			chip_cell: 'air-chip',
			connnection_cell: 'air-connection',
			celluar_cell: 'air-cellular',
			pencil_cell: 'air-pencil',
			keyboard_cell: 'air-keyboard',
			learn_more_cell: 'air-learn-more'
		},
		image: {
			mobile: { url: 'url(./compare/compare_ipad_air_small_2x.png)', width: '90px', height: '124px' },
			tablet: { url: 'url(./compare/compare_ipad_air_large_2x.png)', width: '136px', height: '188px' }
		},
		device_content: {
			h3: 'iPad Air',
			price: 'From $599',
			availableColor: {
				url: 'url(./compare/compare_ipad_air_swatches_large_2x.jpg)',
				width: '123px',
				height: '18px'
			}
		},
		display_cell: {
			p1: '10.9”',
			p2: 'Liquid Retina display',
			p3: ''
		},
		chip_cell: {
			image: { url: 'url(./compare/compare_a14_chip_large_2x.png)' },
			p: 'A14 Bionic chip'
		},
		connection_cell: {
			image: { url: 'url(./compare/compare_usbc_large_2x.png)', width: '32px', height: '22px' },
			p: 'USB-C connector'
		},
		cellular_cell: {
			image: { url: 'url(./compare/compare_cellular_4g_large_2x.png)' },
			p: '4G LTE cellular'
		},
		pencil_cell: {
			p1: 'Compatible with ',
			p2: 'Apple Pencil (2nd generation)'
		},
		keyboard_cell: {
			image: { url: 'url(./compare/compare_magic_keyboard_large_2x.png)' },
			p: 'Compatible with Magic Keyboard and Smart Keyboard Folio'
		}
	},
	//iPad
	{
		girdAreas: {
			device_wrapper: 'ipad-device',
			display_cell: 'ipad-display',
			chip_cell: 'ipad-chip',
			connnection_cell: 'ipad-connection',
			celluar_cell: 'ipad-cellular',
			pencil_cell: 'ipad-pencil',
			keyboard_cell: 'ipad-keyboard',
			learn_more_cell: 'ipad-learn-more'
		},
		image: {
			mobile: { url: 'url(./compare/compare_ipad_10_2_small_2x.png)', width: '88px', height: '127px' },
			tablet: { url: 'url(./compare/compare_ipad_10_2_large_2x.png)', width: '133px', height: '191px' }
		},
		device_content: {
			h3: 'iPad',
			price: 'From $329',
			availableColor: {
				url: 'url(./compare/compare_ipad_10_2_swatches_large_2x.jpg)',
				width: '71px',
				height: '18px'
			}
		},
		display_cell: {
			p1: '10.2”',
			p2: 'Liquid display',
			p3: ''
		},
		chip_cell: {
			image: { url: 'url(./compare/compare_a12_chip_large_2x.png)' },
			p: 'A12 Bionic chip'
		},
		connection_cell: {
			image: { url: 'url(./compare/compare_lightning_large_2x.png)', width: '32px', height: '22px' },
			p: 'Lightning connector'
		},
		cellular_cell: {
			image: { url: 'url(./compare/compare_cellular_4g_large_2x.png)' },
			p: '4G LTE cellular'
		},
		pencil_cell: {
			p1: 'Compatible with ',
			p2: 'Apple Pencil (1nd generation)'
		},
		keyboard_cell: {
			image: { url: 'url(./compare/compare_smart_keyboard_large_2x.png)' },
			p: 'Compatible with Smart Keyboard'
		}
	},
	//iPad mini
	{
		girdAreas: {
			device_wrapper: 'mini-device',
			display_cell: 'mini-display',
			chip_cell: 'mini-chip',
			connnection_cell: 'mini-connection',
			celluar_cell: 'mini-cellular',
			pencil_cell: 'mini-pencil',
			keyboard_cell: 'mini-keyboard',
			learn_more_cell: 'mini-learn-more'
		},
		image: {
			mobile: { url: 'url(./compare/compare_ipad_mini_small_2x.png)', width: '69px', height: '103px' },
			tablet: { url: 'url(./compare/compare_ipad_mini_large_2x.png)', width: '104px', height: '155px' }
		},
		device_content: {
			h3: 'iPad mini',
			price: 'From $399',
			availableColor: {
				url: 'url(./compare/compare_ipad_mini_swatches_large_2x.jpg)',
				width: '71px',
				height: '18px'
			}
		},
		display_cell: {
			p1: '7.9”',
			p2: 'Liquid display',
			p3: ''
		},
		chip_cell: {
			image: { url: 'url(./compare/compare_a12_chip_large_2x.png)' },
			p: 'A12 Bionic chip'
		},
		connection_cell: {
			image: { url: 'url(./compare/compare_lightning_large_2x.png)', width: '32px', height: '22px' },
			p: 'Lightning connector'
		},
		cellular_cell: {
			image: { url: 'url(./compare/compare_cellular_4g_large_2x.png)' },
			p: '4G LTE cellular'
		},
		pencil_cell: {
			p1: 'Compatible with ',
			p2: 'Apple Pencil (1nd generation)'
		},
		keyboard_cell: {
			image: { url: 'url(./compare/compare_bluetooth_keyboard_large_2x.png)' },
			p: 'Compatible with Bluetooth Keyboard'
		}
	}
];
const CompareSection = () => {
	return (
		<Grid
			component='section'
			sx={{
				width: '100%',
				maxWidth: { mobile: '100%', tablet: '776px', laptop: '1440px' },

				m: { mobile: '15px 0', tablet: '20px auto', laptop: '30px auto' },
				p: { mobile: 0, tablet: '0 20px', laptop: '0 30px' },
				textAlign: 'center',
				overflow: 'hidden'
			}}>
			<Box
				className='wrapper'
				sx={{
					backgroundColor: '#fff',
					p: { mobile: '53px 0 56px 0', tablet: '81px 0 85px 0', laptop: '115px 0', height: '100%' }
				}}>
				<Typography
					variant='section_headline'
					component='h2'
					sx={{ maxWidth: { tablet: '365px', laptop: '840px' }, mx: 'auto' }}>
					Which iPad is right for you?
				</Typography>
				<LinkButton sx={{ mt: '16.8px' }} endIcon={<ArrowForwardIosIcon />}>
					Compare all iPad models
				</LinkButton>
				<CompareGrid>
					{iPad_description.map(
						({
							girdAreas,
							image,
							device_content,
							display_cell,
							chip_cell,
							connection_cell,
							cellular_cell,
							pencil_cell,
							keyboard_cell
						}) => (
							<React.Fragment key={girdAreas.device_wrapper}>
								<DeviceWrapper gridArea={girdAreas.device_wrapper}>
									<ImageWrapper>
										<Image image={image} />
									</ImageWrapper>
									<DeviceContent>
										<Typography variant='device_headline' component='h3'>
											{device_content.h3}
										</Typography>
										<Typography variant='body_reduced' component='p'>
											{device_content.price}
										</Typography>
										<DeviceAvailableColor image={device_content.availableColor} />
										<HeroButton>Buy</HeroButton>
									</DeviceContent>
								</DeviceWrapper>
								<DeviceDisplayCell gridArea={girdAreas.display_cell}>
									<Typography variant='grid_headline' component='p' sx={{ mb: '8px' }}>
										{display_cell.p1}
									</Typography>
									<Typography variant='body_reduced' component='p'>
										{display_cell.p2}
									</Typography>
									<Typography variant='body_reduced' component='p'>
										{display_cell.p3}
									</Typography>
								</DeviceDisplayCell>
								<DeviceChipCell gridArea={girdAreas.chip_cell}>
									<ChipImage icon={chip_cell.image.url} />
									<Typography variant='body_reduced'>{chip_cell.p}</Typography>
								</DeviceChipCell>
								<DeviceConnectionCell gridArea={girdAreas.connnection_cell}>
									<ConnectionImage icon={connection_cell.image} />
									<Typography variant='body_reduced'>{connection_cell.p}</Typography>
								</DeviceConnectionCell>
								<DeviceCellularCell gridArea={girdAreas.celluar_cell}>
									<CellularImage icon={cellular_cell.image} />
									<Typography variant='body_reduced'>{cellular_cell.p}</Typography>
								</DeviceCellularCell>
								<DevicePencilCell gridArea={girdAreas.pencil_cell}>
									<PencilImage />
									<Typography variant='body_reduced'>{pencil_cell.p1}</Typography>
									<Typography variant='body_reduced'>{pencil_cell.p2}</Typography>
								</DevicePencilCell>
								<DeviceKeyboardCell gridArea={girdAreas.keyboard_cell}>
									<KeyBoardImage icon={keyboard_cell.image} />
									<Typography variant='body_reduced'>{keyboard_cell.p}</Typography>
								</DeviceKeyboardCell>
								<DeviceLearnMoreCell gridArea={girdAreas.learn_more_cell}>
									<LinkButton endIcon={<ArrowForwardIosIcon/>}>Learn more</LinkButton>
								</DeviceLearnMoreCell>
							</React.Fragment>
						)
					)}
				</CompareGrid>
			</Box>
		</Grid>
	);
};

export default CompareSection;
