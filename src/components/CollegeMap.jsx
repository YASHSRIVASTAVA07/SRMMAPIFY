import React from 'react';

const CollegeMap = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7780.657718187583!2d80.03905959551784!3d12.822013269252311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76d4cecae21%3A0x4ffbf1222ec00611!2sS.R.M%20UNIVERSITY%20-K.T.R%20Campus!5e0!3m2!1sen!2sin&zoom=15"
        width="800"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default CollegeMap;
