import { Divider } from '@mui/material'
import { useState } from 'react'
import SkillHeader from '../components/SkillHeader'
import SkillTable from '../components/SkillTable'
import { rowSoft, rowHard } from '../data/rows'


 const Skills=()=>{
  const [open] = useState(true)

  return(
    <>
      <Divider/>
      <SkillHeader open={open} />
      <SkillTable title="ソフトウェア" rows={rowSoft} maxRating={10} />
      <SkillTable title="ハードウェア" rows={rowHard} maxRating={13} />
      <Divider/>
    </>
  )
}
export default Skills