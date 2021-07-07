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

const AppleNews = () => {
	return (
		<Box
			className='apple-news'
			sx={{
				width: '100%',
				p: { mobile: 0, tablet: '0 0 0 10px', laptop: '0  0 0 15px' },
				mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
				textAlign: 'center',
				flexBasis: { mobile: '100%', tablet: '50%', laptop: '50%' }
			}}>
			<Box
				className='content-wrapper'
				sx={{
					backgroundColor: '#fa3454',
					color: '#f5f5f7',
					display: 'flex',
					height: '100%',
					width: '100%',
					flexDirection: 'column',
					justifyContent: 'space-between',
					overflow: 'hidden',
					p: { mobile: ' 0 0 338px 0', tablet: '0 0 177px 0', laptop: '0 0 385px 0' },
					backgroundImage: {
						mobile: 'url(./more_iphone_section/apple_news_plus_tile_update_small_2x.jpg)',
						tablet: 'url(./more_iphone_section/apple_news_plus_tile_update_medium_2x.jpg)',
						laptop: 'url(./more_iphone_section/apple_news_plus_tile_update_large_2x.jpg)'
					},
					backgroundSize: { mobile: '736px 490px', tablet: '358px 350px', laptop: '675px 600px' },
					backgroundPosition: { mobile: 'center bottom', tablet: 'center calc(100% + 20px)', laptop: 'center bottom' },
					backgroundRepeat: 'no-repeat'
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						flexBasis: { mobile: '75%', tablet: '90%' },
						mx: 'auto',
						maxWidth: { mobile: '75%', tablet: '90%' },
						width: '100%'
					}}>
					<Typography
						component='h2'
						sx={{
							m: { mobile: '44px auto 0 auto', tablet: '44px auto 0 auto', laptop: '70px auto 0 auto' },
							width: { mobile: '113px', tablet: '113px', laptop: '174px' },
							height: { mobile: '26px', tablet: '26px', laptop: '38px' },
							backgroundImage: {
								mobile: 'url(./more_iphone_section/apple_news_plus_logo_medium_2x.png)',
								tablet: 'url(./more_iphone_section/apple_news_plus_logo_medium_2x.png)',
								laptop: 'url(./more_iphone_section/apple_news_plus_logo_large_2x.png)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}></Typography>
					<Typography variant='tile_copy' component='p' sx={{ m: '22px 0 0 0' }}>
						Hundreds of magazines and
						<br /> leading newspapers. One subscription.
					</Typography>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
						<LinkButton endIcon={<ArrowForwardIosIcon />}>try it free</LinkButton>
						<LinkButton endIcon={<ArrowForwardIosIcon />}>learn more</LinkButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AppleNews;
