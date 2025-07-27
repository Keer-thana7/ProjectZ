import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/api/products/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Image uploaded successfully!");
        console.log("Server Response:", data);
      } else {
        setMessage(data.error || "Upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("An error occurred while uploading.");
    }
  };

  return (
    <div className="upload-form-container">
      <h2>Upload Fashion Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadForm;
