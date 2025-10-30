import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';

interface LocationState {
  from?: {
    pathname?: string;
  };
}

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state ?? {}) as LocationState;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const isValid = await login(username, password);

    if (isValid) {
      const redirectTo = state.from?.pathname ?? '/';
      navigate(redirectTo, { replace: true });
    } else {
      setError('Incorrect username or password. Try admin / letmein.');
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'radial-gradient(circle at top, rgba(25,118,210,0.25), transparent 60%), #f5f7fb',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: { xs: 4, sm: 6 }, borderRadius: 4 }}>
          <Stack spacing={3} component="form" onSubmit={handleSubmit}>
            <Stack spacing={1} textAlign="center">
              <Typography variant="h4" fontWeight={700} color="primary.main">
                Welcome to Atlas Insight
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Sign in with your credentials to access the analytics dashboard.
              </Typography>
            </Stack>
            {error ? <Alert severity="error">{error}</Alert> : null}
            <TextField
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              required
              fullWidth
              disabled={isSubmitting}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              fullWidth
              disabled={isSubmitting}
            />
            <Button
              variant="contained"
              size="large"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing in…' : 'Sign in'}
            </Button>
            <Typography variant="caption" color="text.secondary" textAlign="center">
              Demo credentials — Username: <strong>admin</strong> · Password: <strong>letmein</strong>
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
