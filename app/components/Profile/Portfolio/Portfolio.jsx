import React, { useState, useRef } from "react";
import styles from "../Profile.module.css";
import Image from "next/image";

const Portfolio = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);
  const fileInputRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (editingProjectIndex !== null) {
      // Update the project
      const updatedProjects = [...projects];
      updatedProjects[editingProjectIndex] = {
        title,
        description,
        url,
        images,
      };
      setProjects(updatedProjects);
      setEditingProjectIndex(null);
    } else {
      // Add the new project to the list of projects
      setProjects([...projects, { title, description, url, images }]);
    }

    // Reset the form inputs
    setTitle("");
    setDescription("");
    setUrl("");
    setImages([]);

    // Close the form
    setIsFormOpen(false);
  };

  const handleImageUpload = (event) => {
    // Convert the FileList to an array
    const files = Array.from(event.target.files);

    // Check if the number of currently selected images plus the number of new images exceeds 5
    if (images.length + files.length > 5) {
      alert("You can only select up to 5 images.");
    } else {
      files.forEach((file) => {
        // Create a new FileReader object for each file
        const reader = new FileReader();

        // This will be called once the reader has finished reading a file
        reader.onloadend = () => {
          // The result attribute contains the data URL of the image
          setImages((oldImages) => [...oldImages, reader.result]);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
      });
    }

    // Reset the value of the file input element
    event.target.value = null;
  };

  const handleEditClick = (index) => {
    const project = projects[index];
    setTitle(project.title);
    setDescription(project.description);
    setUrl(project.url);
    setImages(project.images);
    setIsFormOpen(true);
    setEditingProjectIndex(index);
  };

  const handleDeleteClick = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.bodycontent}>
      <div
        className={styles.buttoncontainer}
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        <i class="fa-solid fa-plus"></i>
        <h3 className={styles.addProject}>Add new project</h3>
      </div>

      {isFormOpen && (
        <form onSubmit={handleFormSubmit} className={styles.addprojectform}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL"
            required
          />
          <div>
            <button type="button" onClick={handleFileButtonClick}>
              Select Images
            </button>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              ref={fileInputRef}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {images.map((image, index) => (
        <div
          key={index}
          style={{ position: "relative", width: "100px", height: "100px" }}
        >
          <Image
            src={image}
            alt={`Preview ${index}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <button onClick={() => handleEditClick(index)}>Edit</button>
          <button onClick={() => handleDeleteClick(index)}>Delete</button>
          <button>View</button>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
