import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Rating } from '@mui/material';
import type { Row } from '../types/Row';


interface SkillTableProps {
  title: string;
  rows: Row[];
  maxRating: number;
}

const SkillTable = ({ title, rows, maxRating }: SkillTableProps) => (
  <TableContainer sx={{ width: { xs: '100%', sm: '80%', md: '60%' }, p: 0.5, mx: 'auto' }}>
    <button style={{ backgroundColor: 'green', marginTop: '25px' }}>{title}</button>
    <Table sx={{ backgroundColor: 'aliceblue', tableLayout: 'fixed', marginBottom: '30px' }}>
      <TableHead>
        <TableRow sx={{ backgroundColor: 'lightgray' }}>
          <TableCell align="center" sx={{ width: '20%', borderRight: '1px solid white' }}>項目</TableCell>
          <TableCell align="center" sx={{ width: '15%', borderRight: '1px solid white' }}>期間</TableCell>
          <TableCell align="left" sx={{ width: '65%' }}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.no}>
            <TableCell 
              align="left"
              sx={{
                fontSize: {
                  xs: '0.7rem',   // スマホ
                  sm: '0.9rem',   // タブレット
                  md: '1.0rem',   // デスクトップ
                  lg: '1.2rem',   // デスクトップ
                  xl: '1.4rem',   // デスクトップ
                },
                border: '1px solid lightgray',
              }}>
                {row.lang}
              </TableCell>
            <TableCell
              align="right"
              sx={{
                fontSize: {
                  xs: '0.7rem',   // スマホ
                  sm: '0.9rem',   // タブレット
                  md: '1.0rem',   // デスクトップ
                  lg: '1.2rem',   // デスクトップ
                  xl: '1.4rem',   // デスクトップ
                },
                border: '1px solid lightgray',
              }}
            >
              {row.period}
            </TableCell>
            <TableCell>
              <Rating
                name={row.note.name}
                value={row.note.value / 2}
                max={maxRating}
                precision={row.note.precision}
                readOnly={row.note.readOnly}
                sx={{
                  fontSize: {
                    xs: '1.0rem',   // スマホ
                    sm: '1.2rem',   // タブレット
                    md: '1.5rem',   // デスクトップ
                    lg: '2.2rem',   // デスクトップ
                    xl: '2.6rem',   // デスクトップ
                  },
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default SkillTable