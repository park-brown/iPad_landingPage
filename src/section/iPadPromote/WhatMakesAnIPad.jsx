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

const WhatMakesAnIPad = () => {
	return (
		<Box
			component='section'
			className='iPad-promote-section'
			sx={{
				width: '100%',
				p: { mobile: '62px 0 0 0', tablet: '62px 0 0 0', laptop: '111px 0 0 0 ' },
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
					What makes an iPad an iPad?
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
						className='why_ipad_tile'
						sx={{
							background: '#fff',
							overflow: 'hidden',
							width: { mobile: '100%', tablet: '100%', laptop: '100%' },
							flexBasis: { mobile: '100%', tablet: '100%', laptop: '100%' },
							p: { mobile: '43px 0 0 0', tablet: '50px 0 0 0', laptop: '42px 0 0 0' },
							m: { mobile: '0 0 15px 0', tablet: '0 0 20px 0', laptop: '0 0 30px 0' },
							display: 'flex',
							flexDirection: { mobile: 'column', tablet: 'row' },
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}>
						<Box
							component='figure'
							className='why_ipad_image'
							sx={{
								position: 'relative',
								backgroundImage: {
									mobile: 'url(./whyIPad/why_ipad_small_2x.jpg)',
									tablet: 'url(./whyIPad/why_ipad_medium_2x.jpg)',
									laptop: 'url(./whyIPad/why_ipad_large_2x.jpg)'
								},
								width: { mobile: '382px', tablet: '430px', laptop: '613px' },
								minHeight: { mobile: '281px', tablet: '350px', laptop: '485px' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center bottom',
								m: 0,
								order: { mobile: 2, tablet: 1 }
							}}></Box>
						<Box
							className='promo_copy'
							sx={{
								p: {
									mobile: '0 0 53px 0',
									tablet: '0 0 51px 0',
									laptop: '0 0 43px 0'
								},
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								flexBasis: { mobile: '100%', tablet: '35.66667%', laptop: '41.66667%' },
								order: { mobile: 1, tablet: 2 }
							}}>
							<Typography variant='tile_headline' component='h3'>
								Why iPad
							</Typography>
							<Typography variant='body' component='p' sx={{ my: '13.6px' }}>
								Yes.it does that. <br />
								and then some
							</Typography>
							<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
						</Box>
					</Box>
					<Box
						className='ipadOS_tile'
						sx={{
							overflow: 'hidden',
							width: { mobile: '100%', tablet: '100%', laptop: '100%' },
							minHeight: { mobile: '490px', tablet: '400px', laptop: '500px' },
							flexBasis: { mobile: '100%', tablet: '100%', laptop: '100%' },
							p: { mobile: '0 0 0 0', tablet: '0 0 0 0', laptop: '0 0 0 0' },
							m: { mobile: '0 0 15px 0', tablet: '0 0 20px 0', laptop: '0 0 30px 0' },
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundImage: {
								mobile: 'url(./whyIPad/ipados_small_2x.jpg)',
								tablet: 'url(./whyIPad/ipados_medium_2x.jpg)',
								laptop: 'url(./whyIPad/ipados_large_2x.jpg)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center bottom'
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
								color: '#fff'
							}}>
							<Typography variant='tile_headline' component='h3'>
								iPad OS 14
							</Typography>
							<Typography variant='body' component='p' sx={{ my: '13.6px', color: '#fff', textAlign: 'center' }}>
								New possibilities.
								<br /> only possible on iPad
							</Typography>

							<LinkButton sx={{ color: '#fff' }} endIcon={<ArrowForwardIosIcon />}>
								Learn more
							</LinkButton>
						</Box>
					</Box>
					<Box
						className='iCloud_tile'
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
								iCloud
							</Typography>
							<Typography variant='body' component='p' sx={{ my: '13.6px' }}>
								The best place for all your
								<br /> photos, files, and more.
							</Typography>

							<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
						</Box>
						<Box
							component='figure'
							className='iCloud_image'
							sx={{
								position: 'relative',
								backgroundImage: {
									mobile: 'url(./whyIPad/icloud_small_2x.jpg)',
									tablet: 'url(./whyIPad/icloud_medium_2x.jpg)',
									laptop: 'url(./whyIPad/icloud_large_2x.jpg)'
								},
								width: { mobile: '453px', tablet: '335px', laptop: '594px' },
								minHeight: { mobile: '214px', tablet: '212px', laptop: '284px' },
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
							<Typography
								variant='tile_headline'
								component='h3'
								sx={{
									backgroundImage: {
										mobile: 'url(./whyIPad/apple_pay_logo_small_2x.png)',
										tablet: 'url(./whyIPad/apple_pay_logo_medium_2x.png)',
										laptop: 'url(./whyIPad/apple_pay_logo_large_2x.png)'
									},
									width: { mobile: '76px', tablet: '75px', laptop: '114px' },
									minHeight: { mobile: '32px', tablet: '31px', laptop: '46px' },
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat'
								}}></Typography>
							<Typography variant='body' component='p' sx={{ my: '13.6px', textAlign: 'center' }}>
								The safer way to make secure,
								<br /> contactless purchases in stores and online
							</Typography>

							<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
						</Box>
						<Box
							component='figure'
							className='apple_pay_image'
							sx={{
								position: 'relative',
								backgroundImage: {
									mobile: 'url(./whyIPad/apple_pay_small_2x.jpg)',
									tablet: 'url(./whyIPad/apple_pay_medium_2x.jpg)',
									laptop: 'url(./whyIPad/apple_pay_large_2x.jpg)'
								},
								width: { mobile: '331px', tablet: '275px', laptop: '388px' },
								minHeight: { mobile: '241px', tablet: '200px', laptop: '281px' },
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

export default WhatMakesAnIPad;
