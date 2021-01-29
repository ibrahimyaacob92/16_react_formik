import React from "react";
import { useFormik } from "formik";

const OldYoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) errors.name = "Required";
    if (!values.email) errors.email = "Required";
    if (!values.channel) errors.channel = "Required";
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log('form values', formik.values)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps('name')} // removes hte boilerplate commented below
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel ? <div className='error'>{formik.errors.channel}</div> : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default OldYoutubeForm;
