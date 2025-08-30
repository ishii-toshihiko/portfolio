import { ListItem, ListItemText, Divider,ListItemIcon } from "@mui/material"
import CallIcon from '@mui/icons-material/Call'
import BusinessIcon from '@mui/icons-material/Business'
import EmailIcon from '@mui/icons-material/Email'
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material'


const Contact=()=>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('送信内容:', formData);
    // ここでメール送信処理を追加（例：EmailJS、Formspree、Rails APIなど）
  };


  return(
    <>
      <Divider/>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: {
            xs: '100%',   // スマホ
            sm: '80%',    // タブレット
            md: '60%',    // デスクトップ
          },
          //maxWidth: 500,
          mx: 'auto',
          mt: 4,
          marginBottom: 5,
        }}
      >
        <Button
          sx={{
            color:'white',
            backgroundColor:'gray',
            fontSize:'1.5rem',
            marginRight: 3,
            position:'relative',
            left:'5px',
          }}
        >
          お問い合わせ
        </Button>
        {/* <span style={{fontWeight:'bold'}}>
          Works ITへのお問い合わせ
        </span> */}
        <br />

        <div style={{ display: 'flex', width: '100%' }}>
          <TextField
            label="お名前"
            name="name"
            variant="outlined"
            required
            value={formData.name}
            onChange={handleChange}
            sx={{
              margin: 2,
              width: '40%',
              }}
          />
          <TextField
            label="メールアドレス"
            name="email"
            type="email"
            variant="outlined"
            required
            value={formData.email}
            onChange={handleChange}
            sx={{
              margin: 2,
              width: '60%',
              }}
          />
        </div>
        <div style={{ display: 'flex', width: '100%' }}>
        <TextField
          label="お問い合わせ内容"
          name="message"
          multiline
          rows={5}
          variant="outlined"
          fullWidth
          required
          value={formData.message}
          onChange={handleChange}
          sx={{
             margin: 2,
            }}
        />
        </div>

        <div style={{ display: 'flex', width: '100%' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              margin: 2,
            }}
          >
            送信する
          </Button>
        </div>
      </Box>
      <Divider/>
      <Box
        sx={{
          width: {
            xs: '100%',   // スマホ
            sm: '80%',    // タブレット
            md: '60%',    // デスクトップ
          },
          p: 0.5,
          mx: 'auto',
          marginTop: 2,
          marginBottom: 5,
        }}
      >
        <h1
          style={{
            float:'left',
            width: 180,
            fontWeight:'bold',
            fontStyle:'italic',
         }}>
          Works I.T
        </h1>
        <span
          style={{
            float:'left',
            fontWeight:'bold',
            marginTop: 20,
            color:'blue',
          }}
        >
          （※ 以下はセキュリティ保護のため架空情報です）
        </span>
        <ListItem>
          <ListItemIcon>
            <BusinessIcon style={{color:" green"}}/>
          </ListItemIcon>
          <ListItemText>
            住所：  〒000-0000 架空県架空市架空町00-0-800
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CallIcon style={{color:"orange"}}/>
          </ListItemIcon>
          <ListItemText>
            電話番号： 090-0000-0000
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon style={{color:"blue"}}/>
          </ListItemIcon>
          <ListItemText>
            Eメール： dummy@example.com
          </ListItemText>
        </ListItem>
      </Box>
      <Divider/>
    </>
  )
}
export default Contact