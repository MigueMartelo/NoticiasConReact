import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
	state = {
		category: 'general'
	};

	handleChange = e => {
		this.setState(
			{
				category: e.target.value
			},
			() => {
				// Send to App component
				this.props.callApi(this.state.category);
			}
		);
	};

	render() {
		return (
			<div className="buscador row">
				<div className="col s12 m8 offset-m2">
					<form>
						<h2>Encuentra Noticias por Categoría</h2>
						<div className="input-field col s12 m8 offset-m2">
							<select onChange={this.handleChange}>
								<option value="general">General</option>
								<option value="sports">Deportes</option>
								<option value="business">Negocio</option>
								<option value="technology">Tecnología</option>
								<option value="entertainment">Entretenimiento</option>
								<option value="science">Ciencia</option>
							</select>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

Form.propTypes = {
	callApi: PropTypes.func.isRequired
};

export default Form;
