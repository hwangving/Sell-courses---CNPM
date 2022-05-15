import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from './Orders';
import { GlobalState } from '../../../GlobalState';
import { useContext, useState } from 'react';
// import CreateProduct from './createProduct/createProduct';
// import Category from './category/Category';
import AdminProductsList from './products/AdminProductsList';

// const drawerWidth = 240;

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

const mdTheme = createTheme();

function Admin() {
  // const [open, setOpen] = useState(false);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };
  const state = useContext(GlobalState)
  const [history] = state.userAPI.history
  console.log(history, 'history')

  return (
    <div className="admin__container">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              // height: '100vh',
              // overflow: 'auto',
            }}
            className="admin__main"
          >
            <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
              <h2 className="page__header">Thống kê</h2>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  {/* <h2>Evarate</h2> */}
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 150,
                    }}
                  // className="paper__container"
                  >
                    <div>
                      <h2>Số sản phẩm đã bán</h2>
                      <p className="overview__number">
                      {
                          history.reduce((prev, item) => prev + (
                            item.cart.reduce((prevItem, product) => (
                              prevItem + (product.sold)
                            ), 0)
                          ), 0)
                        }
                      </p>
                    </div>
                  </Paper>
                </Grid>

                {/* Recent Deposits */}

                <Grid item xs={12} md={6} lg={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 150,
                    }}
                  >
                    <div>
                      <h2>Doanh số</h2>
                      <p className="overview__number">
                        $ {
                          history.reduce((prev, item) => (
                            prev + (
                              item.cart.reduce((prevItem, product) => (
                                prevItem + (product.quantity * product.price)
                              ), 0)
                            )
                          ), 0)
                        }
                      </p>
                    </div>

                  </Paper>
                </Grid>
                <div className="space__column"></div>
                {/*Orders */}

                <Grid item xs={12}>
                  <h2 className="page__header">Lịch sử bán hàng</h2>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} className="paper__container">
                    <Orders />
                  </Paper>
                </Grid>

                <div className="space__column"></div>

                <div className="space__column"></div>

                {/* product list */}
                <AdminProductsList />


              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default function Dashboard() {
  return <Admin />;
}