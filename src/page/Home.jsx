import React from 'react';
import AppHeader from '../component/Appbar';
import ProductNavBar from '../component/ProductNavBar';
import Ribbon from '../component/Ribbon';
import {Grid} from '@material-ui/core'
import IPadProHero from '../section/hero/IPadPro';

const Home = () => {
	return (
		<React.Fragment>
			<AppHeader />
		  <ProductNavBar/>
      <Grid component='main' container sx={{width:'100%'}}>
        <Ribbon/>
        <IPadProHero/>
      </Grid>
		</React.Fragment>
	);
};

export default Home;