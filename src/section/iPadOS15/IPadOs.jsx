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
const IPadOs = () => {
	return (
		<Box
			component='section'
			className='ipadOs-section'
			sx={{
				width: '100%',
				maxWidth: { mobile: '100%', tablet: '776px', laptop: '1440px' },
				m: { mobile: '0 0 15px 0', tablet: '0 auto 20px auto', laptop: '0 auto 30px auto' },
				p: { mobile: 0, tablet: '0 20px', laptop: '0 30px' },
				display: 'flex',
				flexDirection: { mobile: 'column', tablet: 'row' },
				alignItems: 'center',
				justifyContent: 'center'
			}}>
			<Box
				className='iPadOs_tile'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					background: '#fff',

					p: { mobile: '66px 0 0 0', tablet: '66px 0 0 0', laptop: '50px 0 0 0' },
					overflow: 'hidden'
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						p: { mobile: '0 0 25px 0', tablet: 0 },
						textAlign: 'center',
						maxWidth: { mobile: '340px', tablet: '340px', laptop: '510px' },
						mx: 'auto'
					}}>
					<Typography variant='tile_headline' component='h3'>
						iPadOS 15
					</Typography>
					<Typography variant='body' sx={{ maxWidth: '400px', m: '21px auto' }}>
						Work wonders.With ease
					</Typography>
					<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
				</Box>
				<Box
					component='figure'
					className='apple_card_image'
					sx={{
						position: 'relative',
						backgroundImage: {
							mobile: 'url(./trade_card/ipados_preview_small.jpg)',
							tablet: 'url(./trade_card/ipados_preview_medium.jpg)',
							laptop: 'url(./trade_card/ipados_preview_large.jpg)'
						},
						width: { mobile: '543px', tablet: '736px', laptop: '1042px' },
						minHeight: { mobile: '408px', tablet: '342px', laptop: '394px' },
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center bottom',
						m: 0
					}}></Box>
			</Box>
		</Box>
	);
};

export default IPadOs;
