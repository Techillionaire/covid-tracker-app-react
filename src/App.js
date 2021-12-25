import React from "react";
import Cards from './components/cards/Cards'
import Chart from './components/chart/Chart'
import CountryPicker from './components/countrypicker/CountryPicker'
import styles from './App.module.css';
import { fetchData } from "./api"


class App extends React.Component{

  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchData = await fetchData();

    this.setState({ data: fetchData });
   
  }

  render(){
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={ data }/>
        <Chart />
        <CountryPicker />
      </div>
    )

  }
}


export default App

