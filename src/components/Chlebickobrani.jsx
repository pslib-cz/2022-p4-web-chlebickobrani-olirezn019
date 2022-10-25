import Navigation from "./Navigation";
import TableGroup from './TableGroup';
import Container from 'react-bootstrap/Container';
import { useContext, useEffect, useState } from 'react';
import { arraySum } from "../helpers/ArrayManipulation";
import { Context, CLEAR, RESET } from "../providers/Provider";
import { Button, Stack } from "react-bootstrap";

function Chlebickobrani() {

  let [store, dispatch] = useContext(Context);
  //console.log(store);

  const onClear = (e) => {
    dispatch({type: CLEAR});
  }
  const onReset = (e) => {
    dispatch({type: RESET});
  }

  return (
    <Container>
      <h1 className='fw-bold mt-2 mb-3'>U poníka</h1>
      <p>Celkem: {store.count}</p>
      <Stack direction="horizontal" gap={3}>
        <Button className="mb-3" variant="outline-primary" onClick={onClear}>{CLEAR}</Button>
        <Button className="mb-3" variant="outline-danger" onClick={onReset}>{RESET}</Button>
      </Stack>
      <TableGroup tables={store.tables} />
    </Container>
  );
}

export default Chlebickobrani;
