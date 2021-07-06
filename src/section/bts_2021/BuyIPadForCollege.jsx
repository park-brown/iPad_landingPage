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
const BuyIPadForCollege = () => {
	return (
		<Box
			component='section'
			className='buy-ipad-for-college-section'
			sx={{
				width: '100%',
				maxWidth: { mobile: '100%', tablet: '776px', laptop: '1440px' },
				m: { mobile: '0 0 15px 0', tablet: '0 auto 20px auto', laptop: '-10px auto 30px auto' },
				p: { mobile: 0, tablet: '0 20px', laptop: '0 30px' }
			}}>
			<Box
				className='content-wrapper'
				sx={{
					background: 'linear-gradient(135deg, #d4e9bc 0%, #f2f5c0 100%)',
					width: '100%',
					display: 'flex',
					flexDirection: { mobile: 'column', tablet: 'row' },

					alignItems: 'center',
					justifyContent: 'space-evenly',
					minHeight: { mobile: '500px', tablet: '318px', laptop: '522px' },
					m: { mobile: '18px 0 0 0', tablet: '22px 0 0 0', laptop: '36px 0 0 0' }
				}}>
				<Box
					component='figure'
					sx={{
						position: 'relative',
						backgroundImage: {
							mobile: 'url(./buy_ipad/bts2021_ipad_family_small_2x.png)',
							tablet: 'url(./buy_ipad/bts2021_ipad_family_medium_2x.png)',
							laptop: 'url(./buy_ipad/bts2021_ipad_family_large_2x.png)'
						},
						width: { mobile: '279px', tablet: '317px', laptop: '531px' },
						height: { mobile: '284px', tablet: '322px', laptop: '540px' },
						m: { mobile: '0 auto', tablet: 0 },
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						zIndex: 1,
						top: { mobile: '-18px', tablet: '-22px', laptop: '-36px' }
					}}></Box>
				<Box
					className='copy_wrapper'
					sx={{
						position: 'relative',
						zIndex: 2,
						width: { mobile: '255px', laptop: '305px' },
						height: '200px',
						m: { mobile: '0 auto', tablet: '25px 0 25px 25px', laptop: '50px 0 50px 25px' },
						p: { mobile: '10px 0 60px 0', tablet: 0 },
						display: 'flex',
						flexDirection: 'column',
						alignItems: { mobile: 'center', tablet: 'flex-start' }
					}}>
					<Typography
						variant='tile_headline'
						component='h2'
						sx={{ mb: '27px', textAlign: { mobile: 'center', tablet: 'left' } }}>
						Buy an iPad
						<br /> for college.
						<br /> Get AirPods.
					</Typography>
					<LinkButton endIcon={<ArrowForwardIosIcon />}>Save with education pricing</LinkButton>
				</Box>
			</Box>
		</Box>
	);
};

export default BuyIPadForCollege;
