import React from "react";
import './ProgressBar.css'
import { useState } from 'react'

/**
 * Función para aplicar un ancho diferente a cada una de las tecnologías 
 *
 * @param {*} {done}
 * @author María Fernández
 * @date 2022/02/23
 */
const ProgressBar = ({done}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

export default ProgressBar