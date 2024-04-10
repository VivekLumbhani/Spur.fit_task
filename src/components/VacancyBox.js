import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const JobList = (props) => {
  const jobListRef = useRef(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  useEffect(() => {
    const jobListElement = jobListRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(jobListElement.children, {
            opacity: 0,
            y: 50,
            duration: 6,
            stagger: 0.5,
            ease: "power4.out",
          });
        }
      });
    });

    observer.observe(jobListElement);

    const storedVacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
    setVacancies(storedVacancies);

    return () => observer.disconnect();
  }, []);

  const toggleForm = () => {
    setShowAddForm((prevShowAddForm) => !prevShowAddForm);
  };

  const toggleEditForm = (vacancy) => {
    setSelectedVacancy(vacancy);
    setShowAddForm(true);
  };

  const addVacancy = () => {
    setSelectedVacancy(null);
    toggleForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { role, features } = vacancyform;
  
    // If selectedVacancy is not null, it means we're editing an existing vacancy
    if (selectedVacancy !== null) {
      const updatedVacancies = vacancies.map((vacancy, index) =>
        index === vacancies.indexOf(selectedVacancy) ? { ...vacancy, role, features } : vacancy
      );
      setVacancies(updatedVacancies);
    } else {
      // If selectedVacancy is null, it means we're adding a new vacancy
      const newVacancy = { role, features };
      const updatedVacancies = [...vacancies, newVacancy];
      setVacancies(updatedVacancies);
    }
  
    localStorage.setItem("vacancies", JSON.stringify(vacancies));
    setVacancyform({ role: "", features: "" });
    setSelectedVacancy(null);
  };
  

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setVacancyform((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (index) => {
    const updatedVacancies = [...vacancies];
    updatedVacancies.splice(index, 1);
    setVacancies(updatedVacancies);
    localStorage.setItem("vacancies", JSON.stringify(updatedVacancies));
  };

  const [vacancyform, setVacancyform] = useState({
    role: "",
    features: "",
  });

  useEffect(() => {
    if (selectedVacancy) {
      setVacancyform({
        role: selectedVacancy.role,
        features: selectedVacancy.features,
      });
    } else {
      setVacancyform({ role: "", features: "" });
    }
  }, [selectedVacancy]);

  return (
    <>
      <br />
      <br />
      <br />
      <div className="relative w-full max-w-3xl mx-auto" ref={jobListRef}>
        <div className="">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-medium">Open vacancies</h2>{" "}
              {props.isAdmin && (
                <button
                  onClick={addVacancy}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              )}
            </div>
            {showAddForm && (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="role"
                  value={vacancyform.role}
                  onChange={handleChange}
                  placeholder="enter role"
                />
                <input
                  type="text"
                  name="features"
                  value={vacancyform.features}
                  onChange={handleChange}
                  placeholder="enter features"
                />
                <button type="submit">Submit</button>
              </form>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {vacancies.map((vacancy, index) => (
                <div
                  onClick={() => toggleEditForm(vacancy)}
                  key={index}
                  className="bg-yellow-50 rounded-lg shadow-md px-6 py-8"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold">{vacancy.role}</h3>
                    {props.isAdmin && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(index);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                  <ul className="list-disc pl-5 text-sm">
                    {Array.isArray(vacancy.features) ? (
                      vacancy.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-700">
                          {feature}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-700">{vacancy.features}</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default JobList;
