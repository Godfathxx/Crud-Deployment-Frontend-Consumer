import Axios from "axios";
import { Link } from "react-router-dom";

function ConsumerListRow(props) {
    const { _id, Name, ID, PhoneNo, EmailID, PetName, Breed, Services } = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://crud-deployment-backend-15pi.onrender.com/consumerRoute/delete-Consumer/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{Name}</td>
            <td>{ID}</td>
            <td>{PhoneNo}</td>
            <td>{EmailID}</td>
            <td>{PetName}</td>
            <td>{Breed}</td>
            <td>{Services}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/edit-Pet/" + _id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default ConsumerListRow;
