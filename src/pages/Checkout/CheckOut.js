import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CartHeading, ButtonContainer, Button } from '../Cart/CartElement';
import { CheckOutContainer, CheckOutInfo } from './CheckOutElements';
import { GlobalState } from '../../DataProvider';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});
function ProductTable({ rows, totalPrice, totalPriceWithPromo }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align='center'>Category</TableCell>
            <TableCell align='center'>Quantity</TableCell>
            <TableCell align='center'>Price</TableCell>
            <TableCell align='center'>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.category}</TableCell>
              <TableCell align='right'>{row.quantityInCart}</TableCell>
              <TableCell align='right'>{row.price}</TableCell>
              <TableCell align='right'>
                {`$ ${(row.quantityInCart * +row.price.substring(1)).toFixed(
                  2
                )}`}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell align='right'>{`$ ${totalPrice}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>Total With Promo</TableCell>
            <TableCell align='right'>{`$ ${totalPriceWithPromo}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const CheckOut = () => {
  const history = useHistory();
  const state = useContext(GlobalState);
  const [data, setData] = state.data;
  const [products, setProducts] = state.products;
  const [totalPrice] = state.price;
  const [totalPriceWithPromo] = state.priceWithPromo;
  const createData = (products, data) => {
    const dataArr = [];
    products.forEach((productId) => {
      dataArr.push(data[productId - 1]);
    });
    return dataArr;
  };
  const rows = createData(products, data);
  const handlePay = () => {
    alert('Thank You for Shopping');
    setProducts([]);
    const newData = data.slice(0);
    newData.map((item) => item.quantityInCart = 1);
    setData(newData);
    history.push('/');
  };
  return (
    <div>
      <CheckOutContainer>
        <CartHeading>Check Out</CartHeading>
        <CheckOutInfo>
          <ProductTable
            totalPrice={totalPrice}
            totalPriceWithPromo={totalPriceWithPromo}
            rows={rows}
          />
        </CheckOutInfo>
        <ButtonContainer>
          <Button
            onClick={() => {
              history.push('/');
            }}
          >
            Back
          </Button>
          <Button onClick={handlePay}>Pay</Button>
        </ButtonContainer>
      </CheckOutContainer>
    </div>
  );
};

export default CheckOut;
