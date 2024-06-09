import React from 'react'
import Navigation from './Navigation'

const Addpatient = () => {
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">patient name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">patient id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">date of birth</label>
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">blood group</label>
                            <select name="" id="" className="form-control">
                                <option value="">A+</option>
                                <option value="">B+</option>
                                <option value="">O+</option>
                                <option value="">AB+</option>
                                <option value="">A-</option>
                                <option value="">B-</option>
                                <option value="">O-</option>
                                <option value=""AB-></option>
                            </select>
                        </div>
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">address</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addpatient