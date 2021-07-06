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

const Carriers = () => {
	return (
		<Box
			component='section'
			className='carrier-promote-section'
			sx={{
				width: '100%',
				maxWidth: { mobile: '100%', tablet: '776px', laptop: '1440px' },
				m: { mobile: '0 0 15px 0', tablet: '0 auto 20px auto', laptop: '0 auto 30px auto' },
				p: { mobile: 0, tablet: '0 20px', laptop: '0 30px' }
			}}>
			<Box
				className='content-wrapper'
				sx={{
					background: '#fff',
					width: '100%',
					display: 'flex',
					flexDirection: { mobile: 'column', tablet: 'row' },
					alignItems: 'center',
					justifyContent: 'space-evenly',
					minHeight: { mobile: '500px', tablet: '318px', laptop: '522px' },
					m: { mobile: '0 0 0 0', tablet: '0 0 0 0', laptop: '0 0 0 0' },
					p: { mobile: '38px 0 0 0', tablet: '58px 0 58px 0', laptop: '65px 0 65px 0' }
				}}>
				<Box
					component='figure'
					sx={{
						position: 'relative',
						backgroundImage: {
							mobile: 'url(./carrier/carriers_small_2x.jpg)',
							tablet: 'url(./carrier/carriers_medium_2x.jpg)',
							laptop: 'url(./carrier/carriers_large_2x.jpg)'
						},
						width: { mobile: '293px', tablet: '274px', laptop: '435px' },
						height: { mobile: '250px', tablet: '232px', laptop: '370px' },
						m: { mobile: '12px auto 40px auto', tablet: '0 17px 0 0', laptop: '0 -40px 0 0' },
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: { mobile: 'right center' },
						zIndex: 1,
						order: { mobile: 2, tablet: 1 }
					}}></Box>
				<Box
					className='copy_wrapper'
					sx={{
						width: { mobile: '310px', tablet: '345px', laptop: '555px' },
						order: { mobile: 1, tablet: 2 },
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}>
					<Typography
						variant='eyebrow'
						component='span'
						sx={{ maxWidth: { mobile: '220px', tablet: '245px', laptop: '555px' } }}>
						The latest carrier deals.{' '}
						<Typography variant='eyebrow' sx={{ color: '#007f01' }}>
							Directly from Apple.
						</Typography>
					</Typography>
					<Typography
						variant='tile_headline'
						component='h2'
						sx={{
							textAlign: 'center',
							maxWidth: { mobile: '310px', tablet: '345px', laptop: '555px' },
							m: { mobile: '4px 0 13px 0', tablet: '7px 0 6px 0', laptop: '11px auto 25px auto' }
						}}>
						Get any cellular iPad <br />
						model. Get up to
						<br /> $200 back
						<br /> after activation.
					</Typography>
					<Box
						className='carriers-logo'
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '100%',
							m: { mobile: '19px 0 19px 0', tablet: '19px 0 19px 0', laptop: '0 0 29px 0' }
						}}>
						<Box
							className='tmobile_logo'
							component='figure'
							sx={{
								backgroundImage: {
									mobile: 'url(./carrier/carriers_tmobile_sprint_logo_small_2x.png)',
									tablet: 'url(./carrier/carriers_tmobile_sprint_logo_large_2x.png)',
									laptop: 'url(./carrier/carriers_tmobile_sprint_logo_large_2x.png)'
								},
								width: { mobile: '123px', tablet: '143px', laptop: '143px' },
								height: { mobile: '34px', tablet: '39px', laptop: '39px' },
								m: { mobile: '0 45px 0  0', tablet: '0 45px 0 0', laptop: '0 45px 0 0' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>
						<Box
							className='verizon_logo'
							component='figure'
							sx={{
								backgroundImage: {
									mobile: 'url(./carrier/carriers_verizon_logo_small_2x.png)',
									tablet: 'url(./carrier/carriers_verizon_logo_large_2x.png)',
									laptop: 'url(./carrier/carriers_verizon_logo_large_2x.png)'
								},
								width: { mobile: '71px', tablet: '101px', laptop: '101px' },
								height: { mobile: '16px', tablet: '22px', laptop: '22px' },
								m: { mobile: '0 0 0  0', tablet: '0 0 0 0', laptop: '0 0 0 0' },
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>
					</Box>
					<Box
						className='link_group'
						sx={{
							width: '100%',
							maxWidth: { tablet: '345px', laptop: '435px' },
							mx: 'auto',
							display: 'flex',
							flexDirection: { mobile: 'column', tablet: 'row' },
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						<Box
							className='link_for_pro_air'
							sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
							<LinkButton endIcon={<ArrowForwardIosIcon />}>Buy iPad Pro</LinkButton>
							<LinkButton endIcon={<ArrowForwardIosIcon />}>Buy iPad Air</LinkButton>
						</Box>
						<Box
							className='link_for_ipad_mini'
							sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
							<LinkButton endIcon={<ArrowForwardIosIcon />}>Buy iPad </LinkButton>
							<LinkButton endIcon={<ArrowForwardIosIcon />}>Buy iPad mini</LinkButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Carriers;
