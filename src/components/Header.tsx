import { useMediaQuery, Box, Typography } from '@mui/material'
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"


const Header = ()=>{
  const isMobile = useMediaQuery('(max-width:600px)');
  return(
    <>
      <link href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap" rel="stylesheet"></link>
      <Box className={'header responsive-box'}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          Works I.T
        </Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
          Ishii&apos;s Portfolio
        </Typography>
      </Box>
      {isMobile ? <MobileMenu /> : <DesktopMenu/>}
    </>
  )
}
export default Header