import React, { useState } from 'react';

const Home = function (data) {
   
    const [name, setName] = useState("example");
    // console.log("name "+name);
    // console.log(setName);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [showModal, setShowModal] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null); 

    const submit = (e) => {
        e.preventDefault();
        if (!name || !email || !address || !country) {
            alert("All fields are required!");
        } else {
            setName("");
            setEmail("");
            setAddress("");
            setCountry("");
            data.insert(name, email, address, country);
        }
    };

    const openModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);   
    };

    const closeModal = () => {
        setShowModal(false); 
    };

    return (
        <div className="container-fluid my-5 mx-3">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="mb-3">Add Your Details</h3>
                    <form className="row g-3" onSubmit={submit}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="country" className="form-label">Country</label>
                            <select id="country" className="form-select" value={country} onChange={(e) => setCountry(e.target.value)}>
                                <option style={{ display: 'none' }}>Choose your country</option>
                                <option>India</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success w-50">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-6 mr-2">
                    <h3 className="mb-3">Listing of Data</h3>
                    <table className="table table-striped table-responsive table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Country</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.response && data.response.length > 0 ? data.response.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.country}</td>                                    
                                    <td>
                                        <button className="btn btn-sm btn-success" onClick={() => openModal(item)}><i className="fa fa-edit"></i></button>
                                        <button className="btn btn-sm btn-danger" onClick={() => data.delete(index)}><i className="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            )) : (<tr><td className="text-center">No Data Found</td></tr>)}
                        </tbody> 
                    </table>
                </div>
            </div>

            {/* Modal Implementation */}
            {showModal && (
                <div className="modal fade show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Details</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                {/* Display selected item details in the modal */}
                                <p><strong>Name: </strong>{selectedItem.name}</p>
                                <p><strong>Email: </strong>{selectedItem.email}</p>
                                <p><strong>Address: </strong>{selectedItem.address}</p>
                                <p><strong>Country: </strong>{selectedItem.country}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { Home };
