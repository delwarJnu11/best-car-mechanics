import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://aqueous-caverns-12891.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('data inserted done!!!')
                }
            })
    };
    return (
        <div>
            <h3 className="text-center my-4">Add All Services</h3>
            <form className="d-flex justify-content-center align-items-center flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-50 mb-2" {...register("name", { required: true })} placeholder="Name" />
                <input className="w-50 mb-2" {...register("price", { required: true })} placeholder="Price" />
                <input className="w-50 mb-2" {...register("image", { required: true })} placeholder="Image URl" />
                <textarea className="w-50 mb-2" {...register("description", { required: true })} placeholder="Description..." />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;