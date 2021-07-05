import React from 'react';
import AppHeader from '../component/Appbar';
import ProductNavBar from '../component/ProductNavBar';
import Ribbon from '../component/Ribbon';
import { Grid } from '@material-ui/core';
import IPadProHero from '../section/hero/IPadPro';
import IPadAirHero from '../section/hero/IPadAir';
import IPadHero from '../section/hero/iPad';
import IPadMiniHero from '../section/hero/IPadMini';

const Home = () => {
	return (
		<React.Fragment>
			<AppHeader />
			<ProductNavBar />
			<Grid component='main' container sx={{ width: '100%' }}>
				<Ribbon />
				<IPadProHero />
				<IPadAirHero />
				<IPadHero />
				<IPadMiniHero />
			</Grid>
		</React.Fragment>
	);
};

export default Home;
