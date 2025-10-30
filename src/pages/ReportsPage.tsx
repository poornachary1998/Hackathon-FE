import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const reports = [
  { name: 'Q1 Revenue Analysis', owner: 'Alex Murphy', status: 'Published', updated: 'Mar 3' },
  { name: 'Churn deep dive', owner: 'Priya Patel', status: 'In review', updated: 'Mar 1' },
  { name: 'Customer satisfaction pulse', owner: 'Sam Lee', status: 'Draft', updated: 'Feb 28' },
  { name: 'Product adoption insights', owner: 'Taylor Chen', status: 'Published', updated: 'Feb 26' },
];

const statusColor: Record<string, 'default' | 'success' | 'warning'> = {
  Published: 'success',
  'In review': 'warning',
  Draft: 'default',
};

export default function ReportsPage() {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Reports
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Collaborate on research deliverables, keep stakeholders aligned, and share the latest
          findings across the company.
        </Typography>
      </Box>
      <Card elevation={0} sx={{ borderRadius: 3 }}>
        <CardContent>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Report</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Last updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.name} hover>
                  <TableCell>
                    <Stack>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {report.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Shared with leadership workspace
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{report.owner}</TableCell>
                  <TableCell>
                    <Chip label={report.status} color={statusColor[report.status]} variant="outlined" />
                  </TableCell>
                  <TableCell align="right">{report.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Stack>
  );
}
