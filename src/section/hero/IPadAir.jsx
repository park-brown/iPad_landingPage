import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
const IPadAirHero = () => {
	return (
		<Grid
			component='section'
			className='section-iPadAir-hero-product'
			sx={{
				width: '100%',
				p: { mobile: '0 0 92px 0', tablet: '0 0 118px 0', laptop: '0 0 166px 0' },
				overflow: 'hidden',
				backgroundColor: '#fff'
			}}>
			<Box
				className='section-content'
				sx={{
					width: { mobile: '87.5%', tablet: '692px', laptop: '980px' },
					maxWidth: { mobile: '320px', tablet: '692px', laptop: '980px' },
					mx: 'auto'
				}}>
				<Box
					className='row'
					sx={{
						display: 'flex',
						width: '100%',
						flexWrap: 'wrap',
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}>
					<Box
						className='image-wrapper'
						sx={{
							flexBasis: { mobile: '100%', tablet: '58.33333%', laptop: '66.66667%' },
							maxWidth: { mobile: '100%', tablet: '58.33333%', laptop: '66.66667%' },
							order: { mobile: 2, tablet: 1, laptop: 1 }
							// ml: { mobile: '0px', tablet: '8.333333%', laptop: '8.33333%' }
						}}>
						<Box
							className='iPadPro_hero-image'
							component='figure'
							sx={{
								position: 'relative',
								left: '50%',
								margin: { mobile: '0 0 0 -143.5px', tablet: '0 0 0 -200.5px', laptop: '0 0 0 -240.5px' },
								width: { mobile: '287px', tablet: '387px', laptop: '519px' },
								height: { mobile: '343px', tablet: '462px', laptop: '619px' },
								backgroundImage: {
									mobile: 'url(./hero/ipad_air_small_2x.jpg)',
									tablet: 'url(./hero/ipad_air_medium_2x.jpg)',
									laptop: 'url(./hero/ipad_air_large_2x.jpg)'
								},
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}
						/>
					</Box>
					<Box
						className='copy-wrapper'
						sx={{
							flexBasis: { mobile: '100%', tablet: '33.33333%', laptop: '25%' },
							maxWidth: { mobile: '100%', tablet: '33.33333%', laptop: '25%' },
							order: { mobile: 1, tablet: 2, laptop: 2 },
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: { mobile: 'center', tablet: 'flex-start' },
							mb: { mobile: '16px', tablet: '0px', laptop: '0px' }
						}}>
						<Typography variant='hero_headline' component='h2'>
							iPad Air
						</Typography>
						<Typography
							variant='eyebrow'
							component='p'
							sx={{ mt: '6px', textAlign: { mobile: 'center', tablet: 'left' } }}>
							Powerful. Colorful. <br /> Wonderful.
						</Typography>
						<Typography variant='body' component='p' sx={{ mt: '15px' }}>
							From $599
						</Typography>
						<HeroButton sx={{ my: '9px' }}>Buy</HeroButton>
						<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default IPadAirHero;
