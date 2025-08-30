// SlideContent.tsx
import { Box, Typography  } from '@mui/material';
import Title from './Title';

const SlideContent = ({ backgroundImage }: { backgroundImage: string }) => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '350px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 2,
      padding: 2,
    }}
  >
    <Box>
      <Title />
    </Box>
    <Box
      sx={{
        width: {
          xs: '260px',    // スマホ（0px以上）
          sm: '300px',    // タブレット（600px以上）
          md: '300px',    // 中型画面（900px以上）
          lg: '300px',    // 大型画面（1200px以上）
        },
        height: {
          xs: '180px',
          sm: '190px',
          md: '200px',
        },
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid #ccc',
      }}
    >
      {[
        '継続的な改善と学習',
        '信頼と安定のある開発',
        '技術と市場の両面を',
      ].map((text) => (
        <Typography variant="h3" component="div" sx={{ flexGrow: 2 }}>
          {text}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default SlideContent;