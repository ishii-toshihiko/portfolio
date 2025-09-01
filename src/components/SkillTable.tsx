import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Rating } from '@mui/material';
import type { Row } from '../types/Row';
import StarIcon from '@mui/icons-material/Star';


interface SkillTableProps {
  title: string;
  rows: Row[];
  maxRating: number;
}

const SkillTable = ({ title, rows, maxRating }: SkillTableProps) => (
  <TableContainer className='table-container-size'>
    <button className="table-button">
      {title}
    </button>
    <Table className='table-base'>
      <TableHead>
        <TableRow sx={{ backgroundColor: 'lightgray' }}>
          <TableCell className='table-cell-theme' sx={{ width: '20%'}}>項目</TableCell>
          <TableCell className='table-cell-theme' sx={{ width: '15%'}}>期間</TableCell>
          <TableCell className="table-cell-theme" sx={{ width: '65%'}}>習熟度</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.no}>
            <TableCell align="left" className='table-cell-left table-cell-std'>
                {row.lang}
              </TableCell>
            <TableCell align="center" className='table-cell-std'>
              {row.period}
            </TableCell>
            <TableCell>
              <Rating
                name={row.note.name}
                value={row.note.value / 2}
                max={maxRating}
                precision={row.note.precision}
                readOnly={row.note.readOnly}
                emptyIcon={<StarIcon sx={{ opacity: 0 }} />} // ← 空の星を非表示にする
                className='rating-size'
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default SkillTable