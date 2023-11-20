import { useParams } from "react-router-dom";
import ConsumerForm from "./ConsumerForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditConsumer() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ Name: "", ID: "", PhoneNo: "", EmailID: "", PetName: "", Breed: "", Services: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-deployment-backend-15pi.onrender.com/consumerRoute/update-Consumer/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { Name, ID, PhoneNo, EmailID, PetName, Breed, Services} = res.data;
                    setInitialValue({ Name, ID, PhoneNo, EmailID, PetName, Breed, Services });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { Name: newData[0],ID:newData[1],PhoneNo:newData[2],EmailID:newData[3],PetName:newData[4],Breed:newData[5],Services:newData[6] };
        Axios.put("https://crud-deployment-backend-15pi.onrender.com/consumerRoute/update-Consumer/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <ConsumerForm getState={getState}
                NameValue={initialValue.Name}
                IDValue={initialValue.ID}
                PhoneNoValue={initialValue.PhoneNo}
                EmailIDValue={initialValue.EmailID}
                PetNameValue={initialValue.PetName}
                BreedValue={initialValue.Breed}
                ServicesValue={initialValue.Services}
                >
                    Update Pet
            </ConsumerForm>
        </form>
    )
}
export default EditConsumer;
