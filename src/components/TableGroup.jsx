import { CardGroup } from "react-bootstrap";
import Table from "./Table";

const TableGroup = ({ tables, setTables }) => {

    return (
        <CardGroup>
            {tables.map((val, i) => <Table key={i} index={i} people={val} tables={tables} setTables={setTables} />)}
        </CardGroup>
    );
}

export default TableGroup;