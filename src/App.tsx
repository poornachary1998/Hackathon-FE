import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute.tsx';
import LoginPage from './pages/LoginPage.tsx';
import DashboardLayout from './layout/DashboardLayout.tsx';
import OverviewPage from './pages/OverviewPage.tsx';
import ReportsPage from './pages/ReportsPage.tsx';
import TeamPage from './pages/TeamPage.tsx';
import { useAuth } from './context/AuthContext.tsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f7fb',
    },
    primary: {
      main: '#1976d2',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<OverviewPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />}
        />
      </Routes>
    </ThemeProvider>
  );
}
