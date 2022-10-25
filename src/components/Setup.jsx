import { useContext } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Context, CLEAR } from "../providers/Provider";

const Setup = () => {
    const [, dispatch] = useContext(Context);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        dispatch({type: CLEAR, payload: data});
        navigate("/");
    }

    return (
        <Container>
            <Form className="m-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Počet stolů</Form.Label>
                    <Form.Control min={1} type="number" {...register("table_count", { required: true })} />
                    {errors.table_count && <Form.Text style={{color: "red"}}>This field is required.</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Počet židlí</Form.Label>
                    <Form.Control min={1} type="number" {...register("chair_count", { required: true })} />
                    {errors.chair_count && <Form.Text style={{color: "red"}}>This field is required.</Form.Text>}
                </Form.Group>
                <Button variant="outline-dark" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

export default Setup;