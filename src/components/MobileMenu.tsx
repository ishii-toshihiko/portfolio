import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemText, Box } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton'
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';


const MobileMenu = ()=>{
  const [open, setOpen] = useState(false)
  const menuItems = [
    { label: 'トップ', path: '/', color: 'orange', hoverColor: '#cc6600' },
    { label: 'プロフィール', path: '/about', color: 'purple', hoverColor: '#4b0082' },
    { label: 'スキル', path: '/skills', color: 'green', hoverColor: '#006400' },
    { label: '業務職歴', path: '/works', color: 'blue', hoverColor: '#00008b' },
    { label: 'お問い合せ', path: '/contact', color: 'gray', hoverColor: '#444' },
  ]

  return(
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,                           // アイコンと文字の間隔
          fontSize: 15,
          color: 'white',
          backgroundColor:'lightblue',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'primary.dark', // ホバー時の色
          },
        }}
      >
        <MenuIcon />
        <Typography>
          menu
        </Typography>
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <p style={{position:'relative',left:'8px',fontStyle:'italic',fontWeight:'bold'}}>Works I.T</p>
        <Box>
          <List>
            {menuItems.map(({ label, path, color, hoverColor }) => (
                <ListItem>
                  <Link
                    to={path}
                    key={path}
                    style={{
                      textDecoration: 'none',
                      width: '100%',
                    }}
                  >
                    <ListItemButton sx={{
                      width: 80,
                      backgroundColor: color,
                      textAlign: 'center',
                      borderRadius: 1,
                      color:'White',
                      '&:hover': {
                        backgroundColor: hoverColor,
                      },
                      padding: 0.5,
                    }}>
                      <ListItemText
                      disableTypography
                      primary={
                        <Typography sx={{ fontSize: '0.7rem', color: 'white' }}>
                          {label}
                        </Typography>
                      }
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            width: 160,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'grey.200',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'grey.300',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  )
}
export default MobileMenu