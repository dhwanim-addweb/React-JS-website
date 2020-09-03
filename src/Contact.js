import React,{ useState } from 'react';

const Contact = () =>{
  const [data,setData] =useState({
    fullname:"",
    email:"",
    phone:"",
    message:"",
  });

  const InputEvent = (event) => {
    const {name,value} = event.target;
    setData((prevVal)=> {
      return{
        ...prevVal,
        [name]:value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name is ${data.fullname},Email address is ${data.email},Mobile number is ${data.phone},Message is ${data.message}`);
  };
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-d-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                    FullName
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      placeholder="Enter Your Name"/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                    Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="name@example.com"/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                    Phone
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder="Enter Your mobile number"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                    Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="message"
                      value={data.message}
                      onChange={InputEvent}>
                    </textarea>
                </div>

                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit form</button>
                </div>


            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
