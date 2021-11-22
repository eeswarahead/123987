import React, {useState, useEffect,Fragment} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Home.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Layer from './Layer';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { sizing } from '@material-ui/system';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    maxWidth:"100%",
    overflow: 'hidden'
  },

  appBar:{
   color: "#3f51b5",
   backgroundColor: "#fff",
   fontWeight: 700,
  },

  result_header :{
    borderBottom: "solid",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    height: "40px",
    padding : "4px",
    margin:"8px",    
  },

  rs_text :{
   fontWeight: 700,
   color:"grey",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControl_select: {
    margin: theme.spacing(1),
    maxWidth: 280,
    minWidth: 280,
    //width:"100%"
  },
  formControl_input: {
   '& .MuiTextField-root': {
      margin: theme.spacing(1),
      minWidth: 250,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
      margin: theme.spacing(1),
      width: 120,
      height: 35,
      fontWeight: 400, 
   },
   homeContent: {
    background: '#f0f2f5', 
   },
   input: {
    margin: 10,
    borderRadius: 10,
    background: 'white',
   },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [appnameState, setappnameState] = useState('');
  const [scenarioList, setscenarioList] = useState([]);
  const [scenarioSeq, setscenarioSeq] = useState('');
  const [GetDisabled, setGetDisabled] =useState(true);
  const [RunDisabled, setRunDisabled] =useState(true);
  const [scenarioUI, setscenarioUI] = useState([]);
  const [userInputState, setuserInputState] = useState([{"scenario_no":null}]);
  const [scenarioResultState, setscenarioResultState] = useState([]);
  const [detailViewState, setdetailViewState] = useState(false);
  const [boxDisplayState, setboxDisplayState] = useState(false);
  const [vbExpandState, setvbExpandState] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const vbExpandHandler =() => {
    setvbExpandState(prevvbExpandState => !prevvbExpandState);
  }

  const handleDVChange = (event) =>{
   setdetailViewState(event.target.checked);
   }

  const handlescenarioSeq = (event) => {
    setscenarioSeq(event.target.value);
    if (event.target.value >0) {
    setGetDisabled(false);
    }
    else {
    setGetDisabled(true);
    }
  }

  const handleSelect = (event) => {
        setappnameState(event.target.value);
        console.log("event.target.value" + event.target.value);
        console.log("scenarioList length before get"+scenarioList.length);
        getScenarioList(event.target.value);
        console.log("scenarioList length"+scenarioList.length);
        setGetDisabled(true);
    };
  const getScenarioList = (appSeq)=>{
         console.log("appSeq"+appSeq);
         const url_with_param = "http://localhost:64649/getScnrList/"+appSeq;
         axios.get(url_with_param)
         .then(response=>{  
             let result =[];
              console.log("response"+response);
             result.push(response.data);
             console.log("result"+result);
             setscenarioList(result);
         })
    }

    const getCustomersList = ()=>{
         //console.log("appSeq"+appSeq);
         const url_with_param = "https://2hqapp4cv4.execute-api.ap-south-1.amazonaws.com/Prod/books";
         axios.get(url_with_param)
         .then(response=>{  
             let result =[];
              console.log("response"+response);
             result.push(response.data);
             console.log("result"+result);
             //setscenarioList(result);
         })
    }

    

   const getScenarioUI = ()=>{
         const url_with_param = "http://localhost:64649/getScnrUI/"+scenarioSeq;
         axios.get(url_with_param)
         .then(response=>{  
             let result =[];
              console.log("response_UI"+response);
             result=response.data;
             console.log("result_UI"+result);
             setscenarioUI(result);
         })
    }

    const inputHandler = (event,index) => {
       const UI_Values =[...scenarioUI];
       UI_Values[index].field_value =event.target.value;
       setscenarioUI(UI_Values);
      /* let runEnable =false;
       for(var i=0; i<scenarioUI.length; i++){
         if(!UI_Values[index].field_value) {
          runEnable =true;
		 }
	   }*/
       //if event.target.value
       //setRunDisabled(!RunDisabled);
       SetRD();
	}
    const SetRD =()=> {
      //setRunDisabled(!RunDisabled);
      var Enable_Run=1;
      for(var i=0; i<scenarioUI.length; i++) {
       console.log("length"+ scenarioUI[i].field_value.length);
       if (scenarioUI[i].field_value == null || scenarioUI[i].field_value.length==0){
          Enable_Run=0;
	   }
	  }
       if (Enable_Run==1){
          setRunDisabled(false);
	   }
      console.log("setscenarioUI"+JSON.stringify(scenarioUI));
	}
    const check =() => {
     console.log(scenarioResultState.length+ "result length");
	}

    const runScenario =() => {
    userInputState[0].scenario_no =scenarioSeq;
      for(var i=0; i<scenarioUI.length; i++){
         var fld_Data = {};
         fld_Data["fld_name"] = scenarioUI[i].field_Name;
         fld_Data["fld_val"] = scenarioUI[i].field_value;
         userInputState.push(fld_Data);
	   }
      axios.post('http://localhost:64649/getScenarioresult', userInputState)
      .then(response=>{  
             let result ={};        
             result=response.data;
             console.log("result"+result);
             console.log("result no of layers"+result.no_of_layers);
             let result_arr =[];
             result_arr.push(result);
              console.log(result_arr[0].no_of_layers+ "result" + result_arr.length);
              setscenarioResultState(result_arr);
             //setscenarioResultState(scenarioResultState => ({ ...scenarioResultState, result_arr }))
             });
             //.then((res) => res.json())
        // .then((response)=>{setscenarioResultState([...response])})
         /*console.log(response+ "response");
             let result =[];
             result.push(response.data);
             console.log("Result no of layers"+ result[0].no_of_layers);
             setscenarioResultState({scenarioResultState: [...scenarioResultState, response.data]});
             console.log(result+ "result" + result.length);
             console.log(scenarioResultState.length+ "result length");*/
         

      //check();
	}

    const checkresult = () => {
     console.log("Result length"+ scenarioResultState.length);
     console.log("Result no of layers"+ scenarioResultState[0].no_of_layers);
     
	}


    

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.appBar} >
        <Toolbar disableGutters={true} style={{minHeight:"48px"}} >
        <Grid height="100%" container alignItems={'center'}>
          <Grid item container xs={2} style={{//borderRight:"solid",
          color:"white", backgroundColor:"#1976d2"
         // color:"#40B4EC", backgroundColor:"white"
         }}>
           <Grid item container xs={5} alignItems={'center'} justify="center">
            <Grid item>
             <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <MenuIcon 
              onClick={vbExpandHandler}
             />
             </IconButton>
            </Grid>
           </Grid>
           <Grid item container xs={7} alignItems={'center'} justify="flex-start">
            {/*<TextField className={classes.title} value={'Analyzer'}/>*/}
            <Grid item>
             <Button color="inherit" style={{fontWeight:900, fontSize:"20px"}}>
             <span style={{fontWeight:900, fontSize:"20px"}} >A</span>nalyzer</Button>
            </Grid>
           </Grid>
          </Grid>
          <Grid item container xs={10} style={{//color:"#1976d2", backgroundColor:"white"
          color:"white", backgroundColor:"#1976d2"
          }}>
           <Grid item container xs={11} direction="row-reverse" justify="flex-start">
            <Grid item xs={1} justify="flex-start" >
             <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
              <AccountCircle />
              </IconButton>
            </Grid>
           </Grid>
           <Grid item container xs={1} alignItems={'center'}> 
            <Grid item xs={12}>
            <Button color="inherit" style={{fontWeight:700}}>Login</Button>
            </Grid>
           </Grid>           
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      <Grid container item direction={'row'} className="nav" >
	    {/*<Grid  item container  xs={vbExpandState? 2 :1}  >
           <List  component="nav" aria-label="main mailbox folders" style={{width:"100%",maxWidth: 360}}>
            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 0)}
             >
              <ListItemIcon>
               <InboxIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="Run Scenario" />
             </ListItem>
             <ListItem
                  button
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 1)}
              >
               <ListItemIcon >
                <DraftsIcon fontSize="small" />
               </ListItemIcon>
               <ListItemText secondary="Create/Modify Scenario" />
              </ListItem>
             </List>
              <Divider />
        </Grid>*/}
        <Grid item container xs={12} direction={'row'} spacing={2} className={classes.homeContent} >
         <Grid item container direction={'column'} xs={3}>
         <Grid item container direction={'column'} className={classes.input} style={{height:"40%"}}>
          <Grid item xs={4}>
          <FormControl  size="small"  className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Application
            </InputLabel>
            <Select 
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={appnameState}
              onChange={handleSelect}
              displayEmpty
              className={classes.selectEmpty}
              variant="outlined"
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>CSS</MenuItem>
              <MenuItem value={2}>NCS</MenuItem>
            </Select>
          </FormControl>
          <FormControl  size="small"  className={classes.formControl_select}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Scenario
            </InputLabel>
            <Select 
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={scenarioSeq}
              onChange={handlescenarioSeq}
              displayEmpty
              className={classes.selectEmpty}
              variant="outlined"
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem> 
              {scenarioList.map(SL =>{ 
                         var ScenList =[];
                         var i=0;
                         for (i=0; i<SL.length; i++){
                              ScenList.push(<MenuItem value={SL[i].scnr_Seq_No}>{SL[i].scnr_Name}</MenuItem>)
                            }
                        return(ScenList);
              })
              }
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={4} alignItems="center" container>
           <Button disabled={false} size="small" variant="contained" 
                 className={classes.button} onClick={getCustomersList} 
                 style={{backgroundColor:GetDisabled? "#d3d7de":"#1976d2", color:"white", fontWeight:"500"}}>Get</Button>
          </Grid>
         </Grid>    
         <Grid item container direction={'column'} className={classes.input} style={{height:"40%"}} >
          <Grid item xs={8}>
          <form  size="small"  className={classes.formControl_input}>
          {scenarioUI.map((SUI,index) => (
                        <TextField key={index} size="small" variant="outlined" label={SUI.field_Name} onChange={(event) =>inputHandler(event,index)} />
                         ))}
           </form>
          </Grid>
          <Grid size="small"  item xs={4} alignItems="center" container>
           <Button disabled={RunDisabled} variant="contained" className={classes.button} 
                  onClick={runScenario} 
                  style={{backgroundColor:RunDisabled? "#d3d7de":"#1976d2", color:"white", fontWeight:"700"}}>Run</Button>
          </Grid>
         </Grid>
         </Grid>
         <Divider />
         <Grid item container xs={9} >
         <Box style={{maxHeight: '97vh', width:"100vw", overflow: 'auto'}}>
         <Grid item container direction={'row'} className={classes.input} style={{width:"98%"}} >
          <Grid item container xs={12} className={classes.result_header}>
           <Grid item xs={6}>
            <Typography variant="subtitle1" className={classes.rs_text}>
             Scenario Result
            </Typography> 
           </Grid>
           <Grid item container xs={6} justify={'flex-end'}>
            <Grid item className={classes.rs_text}>
              <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={detailViewState}
                    onChange={handleDVChange}
                    name="detailView"
                    color="primary"
                  />
                }
                label="Detail View"
              />
              </FormGroup>
            </Grid>
           </Grid>
          </Grid>
          
          <Grid item container xs={12} >
           <Layer key={scenarioResultState.length} result={scenarioResultState} dvStatus={detailViewState}/> 
          </Grid>
           {/*<Button variant="contained" className={classes.button} onClick={checkresult} > check </Button>*/}
         </Grid>
         </Box>
         </Grid>
         
        </Grid>
      </Grid>

    </div>
  );
}
