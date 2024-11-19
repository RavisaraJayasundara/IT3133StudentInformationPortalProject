export default function Profile(props){
    return(
        <>
        <table>
            <tr>
                <td rowspan={7}>
                    <img src = {require('../assests/img/1.jpg')} alt="Profile picture"/>
                </td>
                <td>ID</td>
            </tr>
        </table>
        </>
    );
}