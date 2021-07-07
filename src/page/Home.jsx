import React from 'react';
import AppHeader from '../component/Appbar';
import ProductNavBar from '../component/ProductNavBar';
import Ribbon from '../component/Ribbon';
import { Grid } from '@material-ui/core';
import IPadProHero from '../section/hero/IPadPro';
import IPadAirHero from '../section/hero/IPadAir';
import IPadHero from '../section/hero/iPad';
import IPadMiniHero from '../section/hero/IPadMini';
import CompareSection from '../section/compare/CompareSection';
import BuyIPadForCollege from '../section/bts_2021/BuyIPadForCollege';
import Carriers from '../section/carriers/Carriers';
import TradeAndAppleCard from '../section/acmi_trade/TradeAndAppleCard';
import IPadOs from '../section/iPadOS15/IPadOs';
import BuystripSection from '../section/buystrip/Buystrip';
import IPadEssentials from '../section/iPadEssentials/IPadEssentials';
import WhatMakesAnIPad from '../section/iPadPromote/WhatMakesAnIPad';

const Home = () => {
	return (
		<React.Fragment>
			<AppHeader />
			<ProductNavBar />
			<Grid component='main' container sx={{ width: '100%', backgroundColor: '#f5f5f7' }}>
				<Ribbon />
				<IPadProHero />
				<IPadAirHero />
				<IPadHero />
				<IPadMiniHero />
				<CompareSection />
				<BuyIPadForCollege />
				<Carriers />
				<TradeAndAppleCard />
				<IPadOs />
				<BuystripSection />
				<IPadEssentials />
				<WhatMakesAnIPad />
			</Grid>
		</React.Fragment>
	);
};

export default Home;
