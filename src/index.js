import React from "react";
import ReactDOM from "react-dom";


const stateInfo = (stateOne, popOne, capitalOne, stateTwo, popTwo, capitalTwo, stateThree, 
    popThree, capitalThree, stateFour, popFour, capitalFour)=>{
return(
    <table>
<thead>
    
<th>State</th>
<th>Population</th>
<th>Capital</th>
    
</thead>
<tbody>
<tr>
    <td>{stateOne}</td>
    <td>{popOne}</td>
    <td>{capitalOne}</td>

</tr>
<tr>
    <td>{stateTwo}</td>
    <td>{popTwo}</td>
    <td>{capitalTwo}</td>
</tr>

<tr>
    <td>{stateThree}</td>
    <td>{popThree}</td>
    <td>{capitalThree}</td>

</tr>
<tr>
    <td>{stateFour}</td>
    <td>{popFour}</td>
    <td>{capitalFour}</td>

</tr>
</tbody>
    </table>

);     
};

/* Render*/
ReactDOM.render(
    stateInfo('Texas', '29.2 Million', 'Austin', 'Arizona', '7.3 Million', 'Phoenix', 'New Mexico', '2.1 Million', 'Santa Fe', 'Florida', '21.5 Million', 'Tallahassee' ),

document.getElementById('root')
);