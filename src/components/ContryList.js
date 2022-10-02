const CountryList = (props) => {
    console.log(props);
    let content = props.country.map((people) => (
        <div key={people.id}>
          <h2>{people.name}</h2>
          <br></br>
        </div>
      ));
    
    
    return(
        <div>{content}</div>
    );
}

export default CountryList;