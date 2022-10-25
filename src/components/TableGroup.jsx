import { CardGroup, Row, Col } from "react-bootstrap";
import Table from "./Table";

const TableGroup = ({ tables }) => {

    return (
        <Row xs={1} md={2} lg={4}>
            {tables.map((val, i) => <Col className="mb-3"><Table key={i} index={i} people={val} /></Col>)}
        </Row>
    );
}

export default TableGroup;