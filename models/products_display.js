const {Client} = require('pg');
const pg_config = require('./pg_config');

async function products_display() {
    /*
            <table border='1'> \
            <tr> \
                <th>Company</th> <th>Contact</th> <th>Country</th> \
            </tr> \
            <tr> \
                <td>Alfreds </td> \
                <td>Maria </td> \
                <td>Germany</td> \
            </tr> \
            </table>
     */
    html_table = `<table border='1'> <tr>`;
    // Query to DB and get all data from products table
    const client = new Client(pg_config);
    await client.connect();
    const query_string = 'SELECt * FROM products';
    const result = await client.query(query_string);
    headers_list = [];
    // Use the loop to generate headers
    result.fields.forEach(element => {
        header = element.name;
        headers_list.push(header);
        html_table += `<th>${header}</th>`;
    });
    html_table += `</tr> <tr>`;
    result.rows.forEach(row => {
        headers_list.forEach(column => {
            html_table += `<td>${row[column]}</td>`;
        });
        html_table += `</tr> <tr>`;
    });
    html_table +=  `</tr> </table>`;
    return html_table
}
module.exports = products_display;