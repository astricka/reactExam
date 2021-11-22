import {useEffect, useState} from "react";
import TableData from "./TableData";
import {fetchedData} from "../utils/fetch";
import css from './Table.module.css';

function Table() {
    const [dataFromFetch, setDataFromFetch] = useState([]);
    useEffect(() => {
        fetchedData(setDataFromFetch);
    }, []);

    return(
        <main>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Company</th>
                </tr>
                {dataFromFetch.map((item) =>
                    <TableData
                        name={item.name}
                        email={item.email}
                        city={item.address.city}
                        street={item.address.street}
                        phone={item.phone}
                        company={item.company.name}
                    />
                )}
            </table>
        </main>
    );
}

export default Table;

