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
const TradeAndAppleCard = () => {
	return (
		<Box
			component='section'
			className='acmi-trade-section'
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
				className='apple_card_tile'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					alignSelf: 'stretch',
					background: '#fff',
					m: { mobile: '0 0 15px 0', tablet: '0 10px 20px 0', laptop: '0 15px 30px 0' },
					maxWidth: { mobile: '100%', tablet: 'calc(50% - (30px / 2))', laptop: 'calc(50% - (30px / 2))' },
					overflow: 'hidden'
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						p: { mobile: '45px 0 45px 0', tablet: '56px 0 50px 0', laptop: '60px 0 50px 0 ' },
						textAlign: 'center',
						maxWidth: { mobile: '340px', tablet: '340px', laptop: '510px' },
						mx: 'auto'
					}}>
					<Typography variant='tile_headline' component='h3'>
						Get 3% Daily Cash
						<br /> back with Apple Card.
					</Typography>
					<Typography variant='body' sx={{ maxWidth: '400px', m: '21px auto' }}>
						And pay for your new iPad over 12 months, interest‑free when you choose to check out with Apple Card Monthly
						Installments.
					</Typography>
					<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
				</Box>

				<Box
					component='figure'
					className='apple_card_image'
					sx={{
						position: 'relative',
						backgroundImage: {
							mobile: 'url(./trade_card/apple_card_monthly_installments_small_2x.jpg)',
							tablet: 'url(./trade_card/apple_card_monthly_installments_medium_2x.jpg)',
							laptop: 'url(./trade_card/apple_card_monthly_installments_large_2x.jpg)'
						},
						width: { mobile: '525px', tablet: '358px', laptop: '635px' },
						minHeight: { mobile: '206px', tablet: '231px', laptop: '340px' },
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center bottom',
						m: 0
					}}></Box>
			</Box>
			<Box
				className='apple_trade_tile'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					// height: '100%',
					background: '#fff',
					m: { mobile: '0 0 15px 0', tablet: '0 0  20px 10px', laptop: '0 0 30px 15px' },
					maxWidth: { mobile: '100%', tablet: 'calc(50% - (30px / 2))', laptop: 'calc(50% - (30px / 2))' },
					overflow: 'hidden'
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						p: { mobile: '45px 0 45px 0', tablet: '56px 0 50px 0', laptop: '60px 0 50px 0 ' },
						textAlign: 'center',
						maxWidth: { mobile: '340px', tablet: '340px', laptop: '510px' },
						mx: 'auto'
					}}>
					<Typography variant='tile_headline' component='h3'>
						Trade in your current
						<br /> iPad and get credit <br />
						toward a new one.
					</Typography>
					<Typography variant='body' sx={{ maxWidth: '400px', m: '21px auto' }}>
						With Apple Trade In, just give us your eligible iPad and get credit for a new one. It’s good for you and the
						planet.4
					</Typography>
					<LinkButton endIcon={<ArrowForwardIosIcon />}>Learn more</LinkButton>
				</Box>
				<Box
					component='figure'
					className='apple_card_image'
					sx={{
						position: 'relative',
						backgroundImage: {
							mobile: 'url(./trade_card/trade_in_small_2x.jpg)',
							tablet: 'url(./trade_card/trade_in_medium_2x.jpg)',
							laptop: 'url(./trade_card/trade_in_large_2x.jpg)'
						},
						width: { mobile: '256px', tablet: '237px', laptop: '356px' },
						minHeight: { mobile: '251px', tablet: '235px', laptop: '348px' },
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center bottom',
						m: 0
					}}></Box>
			</Box>
		</Box>
	);
};

export default TradeAndAppleCard;
