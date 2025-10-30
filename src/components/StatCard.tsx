import { Card, CardContent, Stack, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
}

export function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card elevation={1} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              bgcolor: 'primary.light',
              color: 'primary.dark',
            }}
          >
            {icon ?? <TrendingUpIcon fontSize="medium" />}
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h5" fontWeight={600}>
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
