import { Avatar, Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';

type ChipColor = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

interface TeamMember {
  name: string;
  role: string;
  focus: string;
  color: ChipColor;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Murphy',
    role: 'Chief Revenue Officer',
    focus: 'Enterprise growth',
    color: 'primary',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Product',
    focus: 'Activation & adoption',
    color: 'secondary',
  },
  {
    name: 'Sam Lee',
    role: 'Customer Success Lead',
    focus: 'Experience & retention',
    color: 'success',
  },
  {
    name: 'Taylor Chen',
    role: 'Insights Strategist',
    focus: 'Analytics & automation',
    color: 'info',
  },
];

export default function TeamPage() {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Team
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Align around shared goals, track ownership, and celebrate the leaders moving work
          forward.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={3} key={member.name}>
            <Card elevation={0} sx={{ borderRadius: 3, height: '100%' }}>
              <CardContent>
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Avatar sx={{ width: 72, height: 72, fontSize: 28 }}>
                    {member.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')}
                  </Avatar>
                  <Stack spacing={0.5}>
                    <Typography variant="h6" fontWeight={600}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                  </Stack>
                  <Chip label={member.focus} color={member.color} variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
