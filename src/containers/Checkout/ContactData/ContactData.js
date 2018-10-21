import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Street'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        zipcode: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Zip Code'
          },
          value: '',
          validation: {
            required: true,
            minLength: 3,
            maxLength: 5
          },
          valid: false,
          touched: false
        },
        countries: {
          elementType: 'select',
          elementConfig: {
            options: []
          },
          value: 'fastest',
          validation: {},
          valid: true
        },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      delivery: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest' },
            {value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: 'fastest',
        validation: {},
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  }

  checkValidity(value, rules){

    let isValid = true;
    
    if(rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  componentWillMount() {
    var countries = require('country-list')();
 
    console.log('countries ', countries.getNameList()); 
    const countryList = countries.getNameList();
    const updatedOrderForm = {
      ...this.state.orderForm
    }

    let updateFormElement = [];

    //let countryListConfig = this.state.orderForm.countries.elementConfig.options;
    //let updatedCountryList = [];
    for(let country in countryList) {
      updateFormElement.push( {
        value: countryList[country],
        displayValue: country
      }
      )
    }
    updatedOrderForm.countries.elementConfig.options = updateFormElement;
    this.setState({orderForm: updatedOrderForm});
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.products);

    this.setState({loading: true});

    const formData = {};
    for(let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const order = {
      products: this.props.products,
      price: this.props.price,
      orderData: formData
    }

    axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({loading: false});
    });
  }

  inputChangedHandler= (event, inputID) =>{
    const updatedOrderForm = {
      ...this.state.orderForm
    }

    const updateFormElement = {
      ...updatedOrderForm[inputID]
    }

    updateFormElement.value = event.target.value;
    updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation);
    updateFormElement.touched = true;
    console.log(updateFormElement);
    updatedOrderForm[inputID] = updateFormElement;

    let formValid = true;
    for(let validElement in updatedOrderForm) {
      formValid = updatedOrderForm[validElement].valid && formValid;
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formValid});

  }

  render() {

    const formElementsArray = [];

    for(let element in this.state.orderForm) {
      formElementsArray.push({
        id: element,
        config: this.state.orderForm[element]
      })
    }

    let form = (<form onSubmit={this.orderHandler}>
      {formElementsArray.map(formElement => (
        <Input  
          key={formElement.id}
          elementType={formElement.config.elementType}
          invalid={!formElement.config.valid} 
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          inputErrorType={formElement.config.elementConfig.placeholder}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          onChangeHandler={(event) => this.inputChangedHandler(event, formElement.id)}/>
      )

      )}
      
      <Button buttonType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
    </form>
    );
    if(this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4> Enter your Shipping details: </h4>
        {form}
      </div>
    );
  }
}

export default ContactData;