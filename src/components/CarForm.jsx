import { useState } from "react";
import Card from "./Card";
import styles from './Form.module.css';

const CarForm = () => {
	const [car, setCar] = useState({ brand: "", model: "" });
	const [error, setError] = useState("");
	const [submittedCar, setSubmittedCar] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCar({ ...car, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (car.brand.length < 3 || car.brand.trim() === "" || car.brand.startsWith(" ")) {
			setError("Por favor verifica que la información sea correcta");
			return;
		}
		
		if (car.model.length < 4) {
			setError("Por favor ingresa el año completo");
			return;
		}

		setError("");
		setSubmittedCar(car);
	};

	return (
		<div className={styles.formContainer}>
			<h2>Formulario de Autos</h2>
			<form onSubmit={onSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="brand">Marca del Auto:</label>
					<input
						type="text"
						id="brand"
						name="brand"
						value={car.brand}
						onChange={handleInputChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="model">Modelo del Auto:</label>
					<input
						type="text"
						id="model"
						name="model"
						value={car.model}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit" className={styles.submitButton}>Enviar</button>
				{error && <p className={styles.errorMessage}>{error}</p>}
			</form>
			{submittedCar && <Card brand={submittedCar.brand} model={submittedCar.model} />}
		</div>
	);
};

export default CarForm;
