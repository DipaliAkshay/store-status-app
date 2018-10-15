import React,{Component} from 'react';
import { Redirect  } from 'react-router-dom';
import Navbar from '../UI/Navbar';

import './StorePage.css';
import Store from './Stores/Store';
import Spinner from '../UI/Spinner/Spinner';

class StorePage extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          stores: [],
          isLoading: false,
          error: null,
        };
      }
    
      componentDidMount() {
        this.setState({ isLoading: true });
    
        this.callApi()
          .then(result => {
            this.setState({
              stores: result.data,
              isLoading: false
            })
          }
            )
          .catch(error => this.setState({
            error,
            isLoading: false
          }));
      }
      callApi = async () => {
        const response = await fetch('api/store');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
        console.log("test");
        return body;
      };
    getStatus=(status)=>{

      let getcolor = {
        color:'grey'
      }
      if(status==='n'){
        getcolor.color='green';
      }
      return <span className="glyphicon glyphicon-ok-circle " style={getcolor} aria-hidden="true"></span>
    }  
    render(){
        var stores = []; 
        
        for(var key in this.state.stores)   {
        
          stores.push({
                name:this.state.stores[key].name.toString(),
                status:this.getStatus(this.state.stores[key].status.toString())
            });
           
        }
        
        const table = stores.length?<Store  store={stores} />:null;

        let redirect = <Redirect to={{
                                pathname:"/"
                          }}  />;

        if(this.props.location.state && this.props.location.state.isLoggedIn){
          //get username
          const username= this.props.location.state.username;
          if(this.state.isLoading){
            redirect=<Spinner />
          }else{
          redirect=     <div>
                          <Navbar username={username}/>
                            <div className="store">
                            {table}
                            </div>
                          </div>
          }
          
        }       
        return (
              <div>{redirect}</div>            )
    }
}
export default StorePage;