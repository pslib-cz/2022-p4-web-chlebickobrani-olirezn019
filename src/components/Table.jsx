import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { arraySum, copyMultidimensionalArray } from "../helpers/ArrayManipulation"
import { useContext } from "react";
import { Context, INCCOUNT, SETTABLES } from "../providers/Provider";

const Table = ({ index, people }) => {
    let [store, dispatch] = useContext(Context);

    function onButtonClick(e) {
        let array = copyMultidimensionalArray(store.tables);
        array[index][e.target.value] += 1;
        dispatch({type: SETTABLES, payload: array});
        dispatch({type: INCCOUNT});
    }

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="fw-bold">Stůl: {index+1}</Card.Title>
                <Card.Text>Konzumace: {arraySum(people)}</Card.Text>
                <Stack direction="horizontal" gap={3}>
                    {people.map((val, i) => <Button key={i} variant="secondary" value={i} onClick={onButtonClick} >{val}</Button>)}
                </Stack>
            </Card.Body>
        </Card>
    );
}

export default Table;