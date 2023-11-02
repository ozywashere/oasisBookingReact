import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Users, Settings, Account, Bookings, PageNotFound, Cabins, Login } from './pages';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});
import { AppLayout } from './ui';
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppLayout />}>
              <Route index element={<Navigate replace to='/dashboard' />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='users' element={<Users />} />
              <Route path='settings' element={<Settings />} />
              <Route path='account' element={<Account />} />
              <Route path='bookings' element={<Bookings />} />
              <Route path='cabins' element={<Cabins />} />
              <Route path='login' element={<Login />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            // Define default options
            className: '',
            duration: 2000,
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
            },
            // Default options for specific types
            success: {
              duration: 2000,
            },
            error: {
              duration: 2000,
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
