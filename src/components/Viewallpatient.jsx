import React from 'react'
import Navigation from './Navigation'

const Viewallpatient = () => {
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">patient id</th>
      <th scope="col">patient name</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>john</td>
      <td>calicut</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Thornton</td>
      <td>kollam</td>
    </tr>
    <tr>
      <td>3</td>
      <td>witter</td>
      <td>thrissur</td>
    </tr>
    <tr>
      <td>4</td>
      <td>watsonr</td>
      <td>thrissur</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewallpatient