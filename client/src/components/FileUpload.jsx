import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const FileUpload = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxFileSize = 10 * 1024 * 1024;

    if (!allowedFileTypes.includes(selectedFile.type)) {
      setErrorMessage('Invalid file type. Please upload an image (JPEG/PNG) or a PDF.');
      return;
    }

    if (selectedFile.size > maxFileSize) {
      setErrorMessage('File size exceeds the maximum limit of 10MB.');
      return;
    }

    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios.post("https://counting-words.vercel.app/file-upload", formData)
        .then(response => {
          alert('File uploaded successfully!');
          console.log(response.data);
        })
        .catch(err => console.log(err))
    }
    catch (err) {
      console.error('An error occurred:', err);
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <Helmet>
        <title>File Upload</title>
      </Helmet>
      <p className="font-semibold text-lg">Please Upload your file</p>
      <input
        type="file"
        className="file-input file-input-bordered file-input-accent my-10"
        onChange={handleFileUpload}
      />
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default FileUpload;