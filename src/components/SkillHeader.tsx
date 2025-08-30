import { Card, CardContent, Paper, Box, Slide, Fade } from '@mui/material'

const SkillHeader = ({ open }: { open: boolean }) => (
  <Fade in={open} timeout={600}>
    <Slide direction="left" in={open} timeout={600}>
      <Card sx={{ width: { xs: '100%', sm: '80%', md: '60%' }, mx: 'auto', mt: 2 }}>
        <Paper elevation={2} sx={{ borderRadius: 2, backgroundColor: 'greenyellow' }}>
          <CardContent sx={{ borderColor: 'black' }}>
            <Box
              sx={{
                fontSize: {
                  xs: '1rem',     // スマホ
                  sm: '1.2rem',   // タブレット
                  md: '1.3rem',   // デスクトップ
                  lg: '1.6rem',   // デスクトップ
                  xl: '2.0rem',   // デスクトップ
                },
                p: 0.8,
                backgroundColor: 'green',
                borderRadius: 1,
                color: 'white',
                //width: 320,
                textAlign: 'center',
              }}
            >
              活かせる経験・知識・技術
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: '1rem',     // スマホ
                  sm: '1.2rem',   // タブレット
                  md: '1.3rem',   // デスクトップ
                  lg: '1.6rem',   // デスクトップ
                  xl: '2.0rem',   // デスクトップ
                },
              }}
            >
              <p>・Ruby On Rails のプログラミング</p>
              <p>・新規Web サイト構築の経験</p>
              <p>・デジタル/アナログ回路設計とレビュー</p>
            </Box>
          </CardContent>
        </Paper>
      </Card>
    </Slide>
  </Fade>
)

export default SkillHeader