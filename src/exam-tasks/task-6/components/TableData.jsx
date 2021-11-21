function TableData({ name, email, street, phone, company, city }) {
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>Street: {street} City: {city}</td>
                <td>{phone}</td>
                <td>{company}</td>
            </tr>
            {/*<tr>*/}
            {/*    <td>{email}</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <td>{address}</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <td>{phone}</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <td>{company}</td>*/}
            {/*</tr>*/}
        </>

    );
}

export default TableData;