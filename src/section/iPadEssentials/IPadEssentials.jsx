import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
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

const IPadEssentials = () => {
	return (
		<Box
			component='section'
			className='iPad-essentials-section'
			sx={{
				width: '100%',

				p: { mobile: '90px 0 0 0', tablet: '72px 0 0 0', laptop: '129px 0 0 0 ' },
				overflow: 'hidden'
			}}>
			<Box
				className='section-title'
				sx={{
					width: '100%',
					maxWidth: { mobile: '87.5%', tablet: '692px', laptop: '980px' },
					mx: 'auto',
					textAlign: 'center'
				}}>
				<Typography variant='section_headline' component='h2'>
					iPad essentials
				</Typography>
			</Box>
			<Box
				className='section-content'
				sx={{
					width: '100%',
					maxWidth: { mobile: '100%', tablet: '776px', laptop: '1440px' },
					m: { mobile: '42px 0 0 0', tablet: '48px auto 0 auto', laptop: '70px auto 0 auto' },
					p: { mobile: 0, tablet: '0 20px', laptop: '0 30px' }
				}}>
				<Box
					className='flex_wrapper'
					sx={{
						display: 'flex',
						flexDirection: { mobile: 'column', tablet: 'row' },
						flexWrap: 'wrap',
						justifyContent: 'flex-start',
						width: '100%',
						height: '100%'
					}}>
					<Box
						className='apple_pencil_tile'
						sx={{
							background: '#fff',
							overflow: 'hidden',
							width: { mobile: '100%', tablet: 'calc(50% - (20px / 2))', laptop: 'calc(50% - (30px / 2))' },
							flexBasis: { mobile: '100%', tablet: 'calc(50% - (20px / 2))', laptop: 'calc(50% - (30px / 2))' },
							p: { mobile: '0 6.25%', tablet: '0 3.74532%', laptop: '0 4.16667%' },
							m: { mobile: '0 0 15px 0', tablet: '0 10px 20px 0', laptop: '0 15px 30px 0' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}>
						<Box
							className='promo_copy'
							sx={{
								p: {
									mobile: '40px 0 20px 0',
									tablet: '60px 0 30px 0'
								},
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center'
							}}>
							<Typography variant='tile_headline' component='h3'>
								Apple Pencil
							</Typography>
							<Typography variant='body' component='p' sx={{ my: '13.6px' }}>
								Dream it up. Jot it down.
							</Typography>
							<Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-evenly' }}>
								<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
								<LinkButton endIcon={<ArrowForwardIosIcon />}>Buy</LinkButton>
							</Box>
						</Box>
						<Box
							component='figure'
							className='apple_pencil_image'
							sx={{
								position: 'relative',
								backgroundImage: {
									mobile: 'url(./iPadEssentials/apple_pencil_small_2x.jpg)',
									tablet: 'url(./iPadEssentials/apple_pencil_medium_2x.jpg)',
									laptop: 'url(./iPadEssentials/apple_pencil_large_2x.jpg)'
								},
								width: { mobile: '528px', tablet: '358px', laptop: '675px' },
								minHeight: { mobile: '269px', tablet: '297px', laptop: '373px' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center bottom',
								m: 0
							}}></Box>
					</Box>
					<Box
						className='keyboard_tile'
						sx={{
							background: '#fff',
							overflow: 'hidden',
							width: { mobile: '100%', tablet: 'calc(50% - (20px / 2))', laptop: 'calc(50% - (30px / 2))' },
							flexBasis: { mobile: '100%', tablet: 'calc(50% - (20px / 2))', laptop: 'calc(50% - (30px / 2))' },
							p: { mobile: '0 2.25%', tablet: '0 3.74532%', laptop: '0 4.16667%' },
							m: { mobile: '0 0 15px 0', tablet: '0 0 20px 10px', laptop: '0 0 30px 15px' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}>
						<Box
							className='promo_copy'
							sx={{
								p: {
									mobile: '40px 0 20px 0',
									tablet: '30px 0 30px 0'
								},
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								order: { mobile: 1, tablet: 2 }
							}}>
							<Typography variant='tile_headline' component='h3'>
								Keyboards for iPad
							</Typography>
							<Typography variant='body' component='p' sx={{ my: '13.6px' }}>
								Keyboards that have you covered.
							</Typography>
							<Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-evenly' }}>
								<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
								<LinkButton endIcon={<ArrowForwardIosIcon />}>Buy</LinkButton>
							</Box>
						</Box>
						<Box
							component='figure'
							className='apple_keyboard_image'
							sx={{
								position: 'relative',
								backgroundImage: {
									mobile: 'url(./iPadEssentials/smart_keyboard_folio_small_2x.jpg)',
									tablet: 'url(./iPadEssentials/smart_keyboard_folio_medium_2x.jpg)',
									laptop: 'url(./iPadEssentials/smart_keyboard_folio_large_2x.jpg)'
								},
								width: { mobile: '325px', tablet: '358px', laptop: '675px' },
								minHeight: { mobile: '297px', tablet: '291px', laptop: '434px' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center bottom',
								m: 0,
								order: { mobile: 2, tablet: 1 }
							}}></Box>
					</Box>
					<Box
						className='accessories_tile'
						sx={{
							background: '#fff',
							overflow: 'hidden',
							width: { mobile: '100%', tablet: 'calc(50% - (20px / 2))', laptop: 'calc(50% - (30px / 2))' },
							flexBasis: { mobile: '100%', tablet: 'calc(50% - (20px / 2))', laptop: 'calc(50% - (30px / 2))' },
							p: { mobile: '0 6.25%', tablet: '0 3.74532%', laptop: '0 4.16667%' },
							m: { mobile: '0 0 15px 0', tablet: '0 10px 20px 0', laptop: '0 15px 30px 0' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}>
						<Box
							className='promo_copy'
							sx={{
								p: {
									mobile: '40px 0 20px 0',
									tablet: '60px 0 30px 0'
								},
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center'
							}}>
							<Typography variant='tile_headline' component='h3'>
								Accessories
							</Typography>
							<Typography variant='body' component='p' sx={{ my: '13.6px' }}>
								Explore covers, cases, and more to help you get the most from your iPad.
							</Typography>
							<Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-evenly' }}>
								<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
								<LinkButton endIcon={<ArrowForwardIosIcon />}>Buy</LinkButton>
							</Box>
						</Box>
						<Box
							component='figure'
							className='apple_pencil_image'
							sx={{
								position: 'relative',
								backgroundImage: {
									mobile: 'url(./iPadEssentials/accessories_small_2x.jpg)',
									tablet: 'url(./iPadEssentials/accessories_medium_2x.jpg)',
									laptop: 'url(./iPadEssentials/accessories_large_2x.jpg)'
								},
								width: { mobile: '558px', tablet: '358px', laptop: '675px' },
								minHeight: { mobile: '258px', tablet: '258px', laptop: '324px' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center bottom',
								m: 0
							}}></Box>
					</Box>
					<Box
						className='AirPods_tile'
						sx={{
							background: '#fff',
							overflow: 'hidden',
							width: { mobile: '100%', tablet: 'calc(50% - (20px / 2))', laptop: 'calc(50% - (30px / 2))' },
							flexBasis: { mobile: '100%', tablet: 'calc(50% - (20px / 2))', laptop: 'calc(50% - (30px / 2))' },
							p: { mobile: '0 2.25%', tablet: '0 3.74532%', laptop: '0 4.16667%' },
							m: { mobile: '0 0 15px 0', tablet: '0 0 20px 10px', laptop: '0 0 30px 15px' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}>
						<Box
							className='promo_copy'
							sx={{
								p: {
									mobile: '40px 0 20px 0',
									tablet: '60px 0 30px 0'
								},
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center'
							}}>
							<Typography variant='tile_headline' component='h3'>
								Say it in a way. <br />
								only you can.
							</Typography>
							<Typography variant='body' component='p' sx={{ my: '13.6px' }}>
								Discover new engraving options for AirPods. Mix emoji, text, and numbers.
							</Typography>

							<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
						</Box>
						<Box
							component='figure'
							className='apple_keyboard_image'
							sx={{
								position: 'relative',
								backgroundImage: {
									mobile: 'url(./iPadEssentials/ipad_airpods_engraving_update_small_2x.jpg)',
									tablet: 'url(./iPadEssentials/ipad_airpods_engraving_update_medium_2x.jpg)',
									laptop: 'url(./iPadEssentials/ipad_airpods_engraving_update_large_2x.jpg)'
								},
								width: { mobile: '331px', tablet: '300px', laptop: '560px' },
								minHeight: { mobile: '163px', tablet: '167px', laptop: '274px' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center bottom',
								m: 0
							}}></Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default IPadEssentials;
