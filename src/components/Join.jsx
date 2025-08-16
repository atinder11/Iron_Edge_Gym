import React, { useState } from "react";
import img4 from "../assets/main-image3.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    gender: "",
    age: "",
    email: "",
    phoneNumber: "",
    goal: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.age || isNaN(formData.age)) errors.age = "Valid age is required";
    if (!formData.email) errors.email = "Email is required";

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be exactly 10 digits";
    }

    if (!formData.goal) errors.goal = "Goal is required";

    setFormErrors(errors);

    if (errors.phoneNumber && !formErrors.phoneNumber) {
      alert("Please enter a 10-digit mobile number");
    }

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbywRqHFyel--Oboxt9txTrSR_aQw_SzfGt3nB2DbYCl5WGjX5igpOICLHUPRU1hS-uT/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );
      alert("Form submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      city: "",
      gender: "",
      age: "",
      email: "",
      phoneNumber: "",
      goal: "",
    });
    setFormErrors({});
  };



  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation only once
    });
  }, []);

  return (
    <div className="container-fluid py-4 " style={{ backgroundColor: "#3a3b3f" }}>
      <div className="row align-items-center g-4 " >
        <div className="col-lg-6">
          <h2 className="mb-3 text-white text-center  fw-bold " >Join Now</h2>
          <form onSubmit={handleSubmit} data-aos="fade-right">
            {[
              { id: "fullName", label: "Full Name", type: "text" },
              { id: "city", label: "City", type: "text" },
              { id: "age", label: "Age", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "phoneNumber", label: "Phone Number", type: "text" },
            ].map(({ id, label, type }) => (
              <div className="form-group mb-2 text-white p-2" key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="form-control"
                />
                {formErrors[id] && <small className="text-danger">{formErrors[id]}</small>}
              </div>
            ))}

            <div className="form-group mb-2 text-white p-2">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {formErrors.gender && <small className="text-danger">{formErrors.gender}</small>}
            </div>

            <div className="form-group mb-3 text-white p-2">
              <label htmlFor="goal">Goal</label>
              <textarea
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="form-control"
              ></textarea>
              {formErrors.goal && <small className="text-danger">{formErrors.goal}</small>}
            </div>

            <button type="submit" className="btn1  w-20" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="col-lg-6 col-md-4 text-center">
          <img src={img4} alt="Join Now" className="img-fluid rounded h-100" data-aos="fade-left" style={{maxHeight:"30rem", height:"10rem"}} />
        </div>
      </div>
    </div>
  );
};

export default Join;
