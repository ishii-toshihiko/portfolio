import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Button,
  Box
} from '@mui/material';
import { useState } from 'react'

// 行の内容
type Row = {
  no: number
  date: string
  period: string
  name: string
  note: string
};

const Works=()=>{

  const initData: Row[] = [
    { no: 1, date: '2025年 1月　～　2025年 6月',period: '６か月', name: 'I株式会社', note: 'ICT支援員' },
    { no: 2, date: '2024年 1月　～　2024年12月',period: '１年', name: 'E株式会社', note: 'Webエンジニア' },
    { no: 3, date: '2018年 8月　～　2023年 8月',period: '５年', name: 'T株式会社（再雇用）', note: 'Web/品質保証エンジニア' },
    { no: 4, date: '1981年 4月　～　2018年 7月',period: '３８年', name: 'T株式会社（正社員）', note: 'ソフト/電子回路エンジニア' },
  ];

  // useStateの宣言と初期値の格納
  //const [rows, setRows] = useState<Row[]>(initData);
  const [rows] = useState<Row[]>(initData);


  return(
    <>
     <Divider/>
     <Box
      sx={{
        width: {
          xs: '100%',   // スマホ
          sm: '80%',    // タブレット
          md: '60%',    // デスクトップ
        },
        p: 0.5,
        mx: 'auto'
      }}
     >
      <div style={{ display: 'flex', alignItems: 'center',marginTop:'20px' }}>
      <Button
        sx={{
          backgroundColor:'blue',
          fontSize:'1.5rem',
          color:'white',
          width: 220,
          marginRight: '20px',
        }}
      >
        職務経歴
      </Button>
        ※詳細は職務経歴書をご参照ください
      </div>
     </Box>

     <div>
    <TableContainer
        sx={{
          width: {
            xs: '100%',   // スマホ
            sm: '80%',    // タブレット
            md: '60%',    // デスクトップ
          },
          p: 0.5,
          mx: 'auto'
        }}
      >

      <Table
          sx={{
            backgroundColor: 'aliceblue',
            tableLayout: 'fixed',
            marginTop: 2,
            marginBottom: 10,
          }}
        >
        {/* ヘッダー */}
        <TableHead >
          <TableRow sx={{ backgroundColor: 'lightgray' }}>
            <TableCell align="center" sx={{width:'30%', borderRight: '1px solid white' }}>西暦</TableCell>
            <TableCell align="center" sx={{width:'10%', borderRight: '1px solid white' }}>期間</TableCell>
            <TableCell align="center" sx={{width:'30%', borderRight: '1px solid white' }}>社名</TableCell>
            <TableCell align="center" sx={{width:'30%',}}>内容</TableCell>
          </TableRow>
        </TableHead>
        {/* ボディ */}
        <TableBody>
          {/* rows(行が格納された配列をループ処理) */}
          {rows.map((row) => {
            return (
              <TableRow key={row.no}>
                <TableCell align="center" sx={{border: '1px solid lightgray'}}>{row.date}</TableCell>
                <TableCell align="right" sx={{border: '1px solid lightgray'}}>{row.period}</TableCell>
                <TableCell align="left" sx={{border: '1px solid lightgray'}}>{row.name}</TableCell>
                <TableCell align="left" sx={{border: '1px solid lightgray'}}>{row.note}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
    <Divider/>
    </>
  )
}
export default Works