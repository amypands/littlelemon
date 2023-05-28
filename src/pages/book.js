import { useReducer } from "react";
import { fetchAPI } from "../util";
import { Heading, BookForm, Container } from '../components';

export const Book = () => {
    const updateTimes = (date) => fetchAPI(date)

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            <Heading />
            <Container>
                <BookForm availableTimes={availableTimes} updateTimes={dispatch} />
            </Container>
        </>
    );
}