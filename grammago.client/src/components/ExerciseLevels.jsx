import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExerciseLevels.css"; // Importa el CSS específico si lo tienes aquí o asegúrate de que esté en MainPage.css

const ExerciseLevels = () => {
    const navigate = useNavigate();

    const goToExercises = (level) => {
        navigate(`/exercises?level=${level}`);
    };

    return (
        <div className="exercise-links">
            <button className="exercise-button" onClick={() => goToExercises(1)}>Nivel Básico (1)</button>
            <button className="exercise-button" onClick={() => goToExercises(2)}>Nivel Avanzado (2)</button>
        </div>
    );
};

export default ExerciseLevels;
