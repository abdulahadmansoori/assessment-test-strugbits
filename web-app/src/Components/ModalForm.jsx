import React from 'react'

export const ModalForm = ({formData,handleChange}) => {
    return (
        <div>
            <div className="mb-3">
                <input type="text" className="form-control" id="name" name="name" placeholder='name' value={formData.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="username" name="username" placeholder='username' value={formData.username} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="email" name="email" placeholder='email' value={formData.email} onChange={handleChange} />
            </div>
            <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02" name='profilePicture' onChange={handleChange}/>
            </div>
        </div>
    )
}
