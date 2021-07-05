import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {styled} from '@material-ui/core/styles'

const CustomTabs = styled(Tabs,{name:'iPad family of products'})(({theme}) => ({
  height:'100%',
  '& .MuiTabs-flexContainer':{
    justifyContent:'flex-start',
    width:'fit-content',
    margin:'12px auto 0px'
  },
  '& .MuiTabs-indicator':{
    display:"none"
  },
}))
const CustomTab = styled(Tab,{name:'product-item'})(({theme}) => ({
 [theme.breakpoints.up('mobile')]:{
  padding:'0 20px',
  ...theme.typography.chapternav_label
 }
}))
const IPadProIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/ipadpro_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'41px',
  height:'54px',
  margin:'0 auto 7px'
}))
const IPadAirIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/ipadair_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'30px',
  height:'54px',
  margin:'0 auto 7px'
}))
const IPadIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/ipad_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'30px',
  height:'54px',
  margin:'0 auto 7px'
}))
const IPadMiniIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/ipadmini_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'22px',
  height:'54px',
  margin:'0 auto 7px'
}))
const IPadCompareIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/ipad_comp_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'48px',
  height:'54px',
  margin:'0 auto 7px'
}))
const IPadPencilIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/apple_pencil_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'3px',
  height:'54px',
  margin:'0 auto 7px'
}))
const KeyBoardIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/keyboard_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'65px',
  height:'54px',
  margin:'0 auto 7px'
}))
const AirPodsIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/airpods_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'27px',
  height:'54px',
  margin:'0 auto 7px'
}))
const AccessoriesIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/ipad_acc_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'31px',
  height:'54px',
  margin:'0 auto 7px'
}))
const IPadOsIcon = styled('figure',{name:'iPad-pro-icon'})(() => ({
  backgroundImage:'url(./product_nav/ipados_light_large.svg)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center bottom',
  width:'33px',
  height:'54px',
  margin:'0 auto 7px'
}))
const ProductNavBar = () => {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box  sx={{ bgcolor: '#fbfbfd',height:'116px',padding:'8px 0' }} component='nav' aria-label='iPad family of products'> 
    <CustomTabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
     
    >
      <CustomTab icon={<IPadProIcon/>} label="iPad Pro" />
      <CustomTab icon={<IPadAirIcon/>} label="iPad Air" />
      <CustomTab icon={<IPadIcon/>} label="iPad" />
      <CustomTab icon={<IPadMiniIcon/>} label="iPad mini" />
      <CustomTab icon={<IPadCompareIcon/>} label="compare" />
      <CustomTab icon={<IPadPencilIcon/>} label="apple pencil" />
      <CustomTab icon={<KeyBoardIcon/>} label="keyboard" />
      <CustomTab icon={<AirPodsIcon/>} label="Air Pods" />
      <CustomTab icon={<AccessoriesIcon/>} label="Accessories" />
      <CustomTab icon={<IPadOsIcon/>} label="iPadOS" />
     
    </CustomTabs>
  </Box>
  )
}

export default ProductNavBar
