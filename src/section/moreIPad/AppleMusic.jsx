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
const AppleMusic = () => {
	return (
		<Box
			className='apple-music'
			sx={{
				width: '100%',
				p: { mobile: 0, tablet: '0 10px 0 0  ', laptop: '0 15px 0 0 ' },
				mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
				textAlign: 'center',
				flexBasis: { mobile: '100%', tablet: '50%', laptop: '50%' }
			}}>
			<Box
				className='content-wrapper'
				sx={{
					backgroundColor: '#fafafa',
					color: '#1d1d1f',
					display: 'flex',
					height: '100%',
					width: '100%',
					flexDirection: 'column',
					justifyContent: 'space-between',
					overflow: 'hidden'
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						flexBasis: { mobile: '75%', tablet: '90%' },
						mx: 'auto',
						maxWidth: { mobile: '75%', tablet: '90%' },
						width: '100%',
						maxHeight: '220px'
					}}>
					<Typography
						component='h2'
						sx={{
							m: { mobile: '44px auto 0 auto', tablet: '44px auto 0 auto', laptop: '68px auto 0 auto' },
							width: { mobile: '100px', tablet: '100px', laptop: '156px' },
							height: { mobile: '26px', tablet: '26px', laptop: '39px' },
							backgroundImage: {
								mobile: 'url(./more_iphone_section/apple_music_logo_medium_2x.png)',
								tablet: 'url(./more_iphone_section/apple_music_logo_medium_2x.png)',
								laptop: 'url(./more_iphone_section/apple_music_logo_large_2x.png)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}></Typography>
					<Typography variant='tile_copy' component='p' sx={{ m: '22px 0 0 0' }}>
						Over 75 million songs. 3 months on us.
					</Typography>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
						<LinkButton endIcon={<ArrowForwardIosIcon />}>try it free</LinkButton>
						<LinkButton endIcon={<ArrowForwardIosIcon />}>learn more</LinkButton>
					</Box>
				</Box>
				<Box
					component='figure'
					className='apple-music-image'
					sx={{
						m: { mobile: '26px 0 0 -206.5px', tablet: '0 0 0 -147.5px', laptop: '0 0 0 -277.5px' },
						position: 'relative',
						left: '50%',
						width: { mobile: '413px', tablet: '295px', laptop: '554px' },
						height: { mobile: '287px', tablet: '204px', laptop: '384px' },
						backgroundImage: {
							mobile: 'url(./more_iphone_section/apple_music_small_2x.jpg)',
							tablet: 'url(./more_iphone_section/apple_music_medium_2x.jpg)',
							laptop: 'url(./more_iphone_section/apple_music_large_2x.jpg)'
						},
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}
				/>
			</Box>
		</Box>
	);
};

export default AppleMusic;
