import React from 'react';
import classes from './Input.css';

const input = (props) => {

  let inputElement = null;

  const inputClass = [classes.InputElement];
  let inputErrorElement = null;

  if(props.invalid && props.shouldValidate && props.touched){
    inputClass.push(classes.Invalid);
    inputErrorElement = <p className={classes.ErrorMessage}>Enter valid input for {props.inputErrorType}</p>
  }

  switch(props.elementType) {
      case('input'):
        inputElement = <input {...props.elementConfig} 
            className={inputClass.join(' ')}
            value={props.value} onChange={props.onChangeHandler}/>;
        break;
      case('textArea'):
        inputElement = <textarea {...props.elementConfig} 
            className={inputClass.join(' ')}
             value={props.value} onChange={props.onChangeHandler}/>;
        break;
      case('select'):
        inputElement = (<select  
            className={inputClass.join(' ')}
             value={props.value} onChange={props.onChangeHandler}> 
            {props.elementConfig.options.map(option => (
                <option className={classes.Options} key={option.value} value={option.value}>{option.displayValue}</option>))}
          </select>);
        break;
      default:
        inputElement= <input {...props.elementConfig} 
            className={inputClass.join(' ')}
             value={props.value} onChange={props.onChangeHandler}/>;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {inputErrorElement}
    </div>
  );
}

export default input;