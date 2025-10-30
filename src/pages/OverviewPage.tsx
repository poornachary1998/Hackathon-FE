import { Box, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { StatCard } from '../components/StatCard.tsx';

const activity = [
  { title: 'Marketing campaign launch', time: '2 hours ago', impact: '+420 leads' },
  { title: 'New enterprise customer onboarded', time: 'Yesterday', impact: '+$68K ARR' },
  { title: 'Product update released', time: 'Tuesday', impact: 'v2.3 adoption at 74%' },
];

export default function OverviewPage() {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Executive overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor real-time performance indicators and keep track of what is moving the needle
          across your teams.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Monthly revenue"
            value="$248K"
            description="Up 18% compared to last month"
            icon={<TrendingUpIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Active customers"
            value="1,842"
            description="Net increase of 96 this week"
            icon={<PeopleAltIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Average response time"
            value="1.2 hrs"
            description="Down 24% compared to last quarter"
            icon={<ScheduleIcon />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card elevation={0} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight={600}>
                  Revenue trajectory
                </Typography>
                <ShowChartIcon color="primary" />
              </Stack>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Revenue is tracking above goal for the fourth consecutive month. Marketing
                sourced pipeline is responsible for 62% of won deals this quarter.
              </Typography>
              <Box
                sx={{
                  height: 220,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(25,118,210,0.08), rgba(25,118,210,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.dark',
                  fontWeight: 600,
                }}
              >
                Chart placeholder
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Recent activity
              </Typography>
              <Stack divider={<Divider flexItem />} spacing={2}>
                {activity.map((item) => (
                  <Box key={item.title}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.time} · Impact {item.impact}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
