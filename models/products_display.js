function products_display() {
    html_table = "<table border='1'> \
                    <tr> \
                        <th>Company</th> \
                        <th>Contact</th> \
                        <th>Country</th> \
                    </tr> \
                    <tr> \
                        <td>Alfreds Futterkiste</td> \
                        <td>Maria Anders</td> \
                        <td>Germany</td> \
                    </tr> \
                    <tr> \
                        <td>Centro comercial Moctezuma</td> \
                        <td>Francisco Chang</td> \
                        <td>Mexico</td> \
                    </tr> \
                    </table>"
    // Query to DB and get all data from products table

    // Use the loop to generate a HTML table based on the returned data
    return html_table
}

module.exports = products_display;